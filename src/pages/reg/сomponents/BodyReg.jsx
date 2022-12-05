import React from "react";
import { Pressable, StyleSheet, Text, View, TextInput,TouchableHighlight } from 'react-native';
import { openURL } from 'expo-linking';
import { useFonts } from 'expo-font';

import InputReg from "src/UI/InputReg";
import {BodyRegStyles as styles} from 'src/common/styles/AuthAndRegStyles'

const openSupport =()=>{
    openURL('https://expo.dev');
}
const registration =()=> {
    alert('регистрация')
}


export default function BodyReg() {
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
                    <Text style={styles.supportBtn }>Поддержка</Text>
                </Pressable>
            </View>
                {/* <InputReg placeholder="Полное имя" type="name" /> */}
                <InputReg errorMsg="Пиздец ошибка появилась" placeholder="Ваша почта" type="email" />
                <InputReg  placeholder="Пароль" type="password" />
                <InputReg  placeholder="Повторите пароль" type="password" />
                
            <TouchableHighlight underlayColor="#0a701c" activeOpacity={0.9} style={styles.mainBtn} onPress={registration}>
                <View>
                    <Text style={styles.mainBtnText}>Создать аккаунт</Text>
                </View>
            </TouchableHighlight>
            
        </View>
    )
}


