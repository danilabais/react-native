import { makeAutoObservable } from "mobx"
import AuthApi from '../api'

import { IChecked } from '../models/AuthStoreType'

class AuthStore {
    isValidClient: boolean = false

    emailError: string = ''
    passwordError: string = ''

    emailDirty: boolean = false
    passwordDirty: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    reset() {
        this.emailError = ''
        this.passwordError = ''

        this.emailDirty = false
        this.passwordDirty = false
    }

    resetMailError() {
        this.emailError = ''
    }
    resetPasswordError() {
        this.passwordError = ''
    }

    async postAuth(mail: string, password: string) {
        const response = await AuthApi.auth({ email: mail, password })
        const mailError = response?.error?.data
        if (mailError) {
            //несовсем удачно, но надо было под бек подстроиться
            this.renderServerErrors(mailError)
            return
        }
        this.finishAuth()

    }

    finishAuth() {
        alert('Авторизация завершена')
    }

    checkOnClient(mail: string, password: string, repeatPassword: string) {
        const errors = {
            email: this.emailCheck(mail),
            password: this.passwordCheck(password),
        }
        return {
            isValideClient: errors.email.isValide && errors.password.isValide,
            errors
        }
    }

    async Auth({ mail, password, repeatPassword }) {
        const checkClient = this.checkOnClient(mail, password, repeatPassword)

        this.reset()
        if (!checkClient.isValideClient) {
            this.renderClientErrors(checkClient.errors)
            return
        }
        if (checkClient.isValideClient) {
            await this.postAuth(mail, password)
        }

    }

    renderClientErrors(errors) {
        this.emailError = errors.email.message
        this.passwordError = errors.password.message

        this.emailDirty = !errors.email.isValide
        this.passwordDirty = !errors.password.isValide
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
        return {
            isValide: true,
            message: ''
        }

    }
}


export default new AuthStore