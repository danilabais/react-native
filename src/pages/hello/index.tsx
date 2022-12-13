import React from "react"
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from 'src/pages/hello/components/Header'
import Body from 'src/pages/hello/components/Body'
import { COLORS } from 'src/common/CONSTANTS'
import BgIcon from 'src/assets/img/bg.svg'

const Hello = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <Header />
                <Body navigation={navigation} />
            </SafeAreaView>
            <StatusBar style="light" />
            <BgIcon style={styles.bgIcon} />
            <Image style={styles.girlImg} source={require('src/assets/img/girl.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 10,
        flexDirection: 'column',
    },
    bgIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: -222,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: "100%",
        height: "100%",
        position: 'relative',
        backgroundColor: COLORS.background,
    },
    girlImg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: -222,
    }
})

export default Hello