import React from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { openURL } from 'expo-linking';

import InputReg from "src/UI/InputReg";


const openSupport =()=>{
    openURL('https://expo.dev');
}
const registration =()=> {
    alert('регистрация')
}


export default function BodyReg() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.wrapperSupport}>
                <Text style={styles.support}>Нужна ли вам помощь? </Text>
                <Pressable onPress={openSupport} style={styles.pressLink}>
                    <Text style={styles.supportBtn }>Поддержка</Text>
                </Pressable>
            </View>
                <InputReg placeholder="Полное имя" type="name" />
                <InputReg placeholder="Почта" type="email" />
                <InputReg placeholder="Пароль" type="password" />
                
            <Pressable onPress={registration}>
                <View style={styles.mainBtn}>
                    <Text style={styles.mainBtnText}>Создать аккаунт</Text>
                </View>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'stretch',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginBottom:15,
        textAlign: "center",
    },
    support: {
        color: '#fff',
        fontSize: 12,
    },
    supportBtn: {
        color: '#38B432',
        fontSize: 12,
    },  
    wrapperSupport: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 38,
    },
    textInput: {
        paddingHorizontal: 26,
        paddingVertical: 28, //2
        color:"#fff",
        borderRadius: 30,
        borderColor:"#333",
        borderWidth: 1,
        fontSize: 16,
        marginBottom: 16,
    },
    wrapperInputs: {
        flexDirection:'column',
        marginBottom: 24
    },
    mainBtn: {
        backgroundColor: '#42C83C',
        borderRadius: 30,
        paddingVertical: 24,
        alignItems: 'center',
        marginTop: 33,
    },
    mainBtnText: {
        color: "#fff",
        fontSize: 24
    }
})

