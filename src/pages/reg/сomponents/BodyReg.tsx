import React, { useState } from "react";
import { Pressable, Text, View, TouchableHighlight } from 'react-native';
import { openURL } from 'expo-linking';


import InputReg from "src/UI/InputReg";
import { BodyRegStyles as styles } from 'src/common/styles/AuthAndRegStyles'
import { observer } from "mobx-react-lite";

import RegistrationStore from 'src/pages/reg/store/RegistrationStore'

const openSupport = () => {
    openURL('https://expo.dev');
}

const BodyReg = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const changeMail = (text: string) => {
        setMail(text)
        if (RegistrationStore.emailError !== '') {
            RegistrationStore.resetMailError()
        }
    }

    const changePassword = (text: string) => {
        setPassword(text)
        if (RegistrationStore.passwordError !== '') {
            RegistrationStore.resetPasswordError() //не уверен по ui логике лучше ли так
            RegistrationStore.resetPasswordRepeatError()
        }
    }
    const changeRepeatPassword = (text: string) => {
        setRepeatPassword(text)
        if (RegistrationStore.repeatPasswordError !== '') {
            RegistrationStore.resetPasswordRepeatError()
        }
    }
    const registration = () => RegistrationStore.registration({ mail, password, repeatPassword })
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.wrapperSupport}>
                <Text style={styles.support}>Понадобилась помощь? </Text>
                <Pressable onPress={openSupport} >
                    <Text style={styles.supportBtn}>Поддержка</Text>
                </Pressable>
            </View>
            <InputReg errorMsg={RegistrationStore.emailError} dirty={RegistrationStore.emailDirty} value={mail} onChangeText={changeMail} placeholder="Ваша почта" type="email" />
            <InputReg errorMsg={RegistrationStore.passwordError} dirty={RegistrationStore.passwordDirty} placeholder="Пароль" value={password} onChangeText={changePassword} type="password" />
            <InputReg errorMsg={RegistrationStore.repeatPasswordError} dirty={RegistrationStore.repeatPasswordDirty} placeholder="Повторите пароль" value={repeatPassword} onChangeText={changeRepeatPassword} type="password" />
            <TouchableHighlight underlayColor="#0a701c" activeOpacity={0.9} style={styles.mainBtn} onPress={registration}>
                <View>
                    <Text style={styles.mainBtnText}>Создать аккаунт</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}


export default observer(BodyReg)

