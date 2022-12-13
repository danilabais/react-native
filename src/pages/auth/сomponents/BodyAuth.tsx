import { FC, useState } from "react";
import { Pressable, Text, View, TouchableHighlight } from 'react-native';
import { openURL } from 'expo-linking';


import InputReg from "src/UI/InputReg";
import { BodyRegStyles as styles } from 'src/common/styles/AuthAndRegStyles'
import { observer } from "mobx-react-lite";

import AuthStore from 'src/pages/auth/store/AuthStore'

const openSupport = () => {
    openURL('https://expo.dev');
}

const BodyAuth: FC = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const changeMail = (text: string) => {
        setMail(text)
        if (AuthStore.emailError !== '') {
            AuthStore.resetMailError()
        }
    }

    const changePassword = (text: string) => {
        setPassword(text)
        if (AuthStore.passwordError !== '') {
            AuthStore.resetPasswordError()
        }
    }

    const auth = () => AuthStore.Auth({ mail, password, repeatPassword })

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Авторизация</Text>
            <View style={styles.wrapperSupport}>
                <Text style={styles.support}>Понадобилась помощь? </Text>
                <Pressable onPress={openSupport} >
                    <Text style={styles.supportBtn}>Поддержка</Text>
                </Pressable>
            </View>
            {/* <InputReg placeholder="Полное имя" type="name" /> */}
            <InputReg errorMsg={AuthStore.emailError} dirty={AuthStore.emailDirty} value={mail} onChangeText={changeMail} placeholder="Ваша почта" type="email" />
            <InputReg errorMsg={AuthStore.passwordError} dirty={AuthStore.passwordDirty} placeholder="Пароль" value={password} onChangeText={changePassword} type="password" />

            <TouchableHighlight underlayColor="#0a701c" activeOpacity={0.9} style={styles.mainBtn} onPress={auth}>
                <Text style={styles.mainBtnText}>Создать аккаунт</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.recovery}>Восстановление пароля</Text>
            </TouchableHighlight>

        </View>
    )
}

export default observer(BodyAuth)

