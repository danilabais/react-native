import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { openURL } from 'expo-linking';
import { useFonts } from 'expo-font';

import InputReg from "src/UI/InputReg";
import { BodyRegStyles as styles } from 'src/common/styles/AuthAndRegStyles'
import { observer } from "mobx-react-lite";

import RegistrationStore from '../store'

const openSupport = () => {
    openURL('https://expo.dev');
}




function BodyReg() {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const changeMail = (text)=> {
        setMail(text)
        if (RegistrationStore.emailError !=='') {
            RegistrationStore.resetMailError()
        }
    }

    const changePassword = (text)=> {
        setPassword(text)
        if (RegistrationStore.passwordError !=='') {
            RegistrationStore.resetPasswordError() //не уверен по ui логике лучше ли так
            RegistrationStore.resetPasswordRepeatError()
        }
    }
    const changeRepeatPassword = (text)=> {
        setRepeatPassword(text)
        if (RegistrationStore.repeatPasswordError !=='') {
            RegistrationStore.resetPasswordRepeatError()
        }
    }
    

    const registration = () => RegistrationStore.registration({mail, password, repeatPassword })



    const [fontsLoaded] = useFonts({
        'Satoshi-Bold': require('src/assets/fonts/Satoshi/Satoshi-Bold.otf'),
        'Satoshi-Regular': require('src/assets/fonts/Satoshi/Satoshi-Regular.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.wrapperSupport}>
                <Text style={styles.support}>Понадобилась помощь? </Text>
                <Pressable onPress={openSupport} style={styles.pressLink}>
                    <Text style={styles.supportBtn}>Поддержка</Text>
                </Pressable>
            </View>
            {/* <InputReg placeholder="Полное имя" type="name" /> */}
            <InputReg errorMsg={RegistrationStore.emailError} dirty={RegistrationStore.emailDirty} value={mail} onChangeText={changeMail} placeholder="Ваша почта" type="email" />
            <InputReg errorMsg={RegistrationStore.passwordError} dirty={RegistrationStore.passwordDirty}  placeholder="Пароль" value={password} onChangeText={changePassword} type="password" />
            <InputReg errorMsg={RegistrationStore.repeatPasswordError} dirty={RegistrationStore.repeatPasswordDirty}  placeholder="Повторите пароль" value={repeatPassword} onChangeText={changeRepeatPassword} type="password" />
            <TouchableHighlight underlayColor="#0a701c" activeOpacity={0.9} style={styles.mainBtn} onPress={registration}>
                <View>
                    <Text style={styles.mainBtnText}>Создать аккаунт</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}


export default observer(BodyReg) 

