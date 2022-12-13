import { makeAutoObservable } from "mobx"
import RegistrationApi from '../api'
import { REGEX } from "src/common/CONSTANTS"

import { IChecked } from '../models/RegistrationStoreType'

class RegistrationStore {
    isValidClient: boolean = false

    emailError: string = ''
    passwordError: string = ''
    repeatPasswordError: string = ''

    emailDirty: boolean = false
    passwordDirty: boolean = false
    repeatPasswordDirty: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    reset() {
        this.emailError = ''
        this.passwordError = ''
        this.repeatPasswordError = ''

        this.emailDirty = false
        this.passwordDirty = false
        this.repeatPasswordDirty = false
    }

    resetMailError() {
        this.emailError = ''
    }
    resetPasswordError() {
        this.passwordError = ''
    }
    resetPasswordRepeatError() {
        this.repeatPasswordError = ''
    }

    async postRegistration(mail: string, password: string) {
        const response = await RegistrationApi.registration({ email: mail, password })
        const mailError = response?.error?.data?.email
        if (mailError) {
            //несовсем удачно, но надо было под бек подстроиться
            this.renderServerErrors(mailError)
            return
        }
        this.finishRegistration()

    }

    finishRegistration() {
        alert('Регистрация завершена')
    }

    checkOnClient(mail: string, password: string, repeatPassword: string) {
        const errors = {
            email: this.emailCheck(mail),
            password: this.passwordCheck(password),
            repeatPassword: this.repeatPasswordCheck(password, repeatPassword)
        }
        return {
            isValideClient: errors.email.isValide && errors.password.isValide && errors.repeatPassword.isValide,
            errors
        }
    }

    async registration({ mail, password, repeatPassword }) {
        const checkClient = this.checkOnClient(mail, password, repeatPassword)

        this.reset()
        if (!checkClient.isValideClient) {
            this.renderClientErrors(checkClient.errors)
            return
        }
        if (checkClient.isValideClient) {
            await this.postRegistration(mail, password)
        }

    }

    renderClientErrors(errors) {
        this.emailError = errors.email.message
        this.passwordError = errors.password.message
        this.repeatPasswordError = errors.repeatPassword.message

        this.emailDirty = !errors.email.isValide
        this.passwordDirty = !errors.password.isValide
        this.repeatPasswordDirty = !errors.repeatPassword.isValide
    }
    renderServerErrors(email: string) {
        if (email) {
            this.emailError = email
            this.emailDirty = !!email
        }
    }
    emailCheck(mail: string): IChecked {
        if (mail === '') {
            return {
                isValide: false,
                message: 'Обязательно к заполнению',
            }
        }
        if (!REGEX.email.test(mail)) {
            return {
                isValide: false,
                message: 'Некорректный формат'
            }
        }
        return {
            isValide: true,
            message: ''
        }
    }
    passwordCheck(password: string): IChecked {
        if (password === '') {
            return {
                isValide: false,
                message: 'Обязательно к заполнению',
            }
        }
        if (password.length < 8) {
            return {
                isValide: false,
                message: 'Пароль должен быть больше 8 символов',
            }
        }
        return {
            isValide: true,
            message: ''
        }

    }
    repeatPasswordCheck(password: string, repeatPassword: string): IChecked {
        if (repeatPassword === '') {
            return {
                isValide: false,
                message: 'Обязательно к заполнению'
            }
        }
        if (password !== repeatPassword) {
            return {
                isValide: false,
                message: 'Пароли не совпадают'
            }
        }
        return {
            isValide: true,
            message: ''
        }
    }
}


export default new RegistrationStore