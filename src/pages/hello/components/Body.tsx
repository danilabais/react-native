import React from "react"
import { View, Text, StyleSheet, TouchableHighlight, Pressable } from 'react-native';

import LogoIcon from 'src/assets/img/logo.svg'
import { COLORS, SIZES } from 'src/common/CONSTANTS'

const Body = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <LogoIcon style={styles.logo} width={235} height={71} />
            <Text style={styles.title}>
                Наслаждайся музыкой
            </Text>
            <Text style={styles.text}>
                Spotify — это проприетарный шведский поставщик аудиостриминговых и мультимедийных услуг.
            </Text>
            <View style={styles.buttonWrapper}>
                <TouchableHighlight onPress={() => navigation.navigate('Reg')} style={styles.mainBtn} underlayColor="#0a701c" activeOpacity={0.9} >
                    <Text style={styles.regBtnText}>Регистрация</Text>
                </TouchableHighlight>
                <Pressable onPress={() => navigation.navigate('Auth')} style={styles.authBtn}  >
                    <Text style={styles.regBtnText}>Авторизация</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    logo: {
        marginBottom: 45,
        alignSelf: "center",
    },
    wrapper: {
        alignItems: "stretch",
        marginTop: '10%'
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",


    },
    mainBtn: {
        backgroundColor: COLORS.green2,
        borderRadius: 30,
        paddingVertical: 24,
        alignItems: 'center',
        marginTop: 33,
        marginRight: 10,
    },
    authBtn: {
        borderRadius: 30,
        paddingVertical: 24,
        alignItems: 'center',
        marginTop: 33,
    },
    regBtnText: {
        fontFamily: "Satoshi-Bold",
        paddingHorizontal: 10,
        color: COLORS.white,
        fontSize: SIZES.btn,

    },
    authBtnText: {
        fontSize: SIZES.btn,
        color: COLORS.white,
        fontFamily: "Satoshi-Bold",
        textAlignVertical: "center",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 26,
        color: COLORS.white,
        fontFamily: "Satoshi-Bold",
        marginBottom: 21,
        textAlign: "center",

    },
    text: {
        fontFamily: "Satoshi-Regular",
        textAlign: "center",
        color: COLORS.light,

    }
})


export default Body