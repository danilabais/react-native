import { StyleSheet } from 'react-native'
import {COLORS, SIZES} from 'src/common/CONSTANTS'


export const toggleStatusStyles = StyleSheet.create({
    wrapperToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'end',
        marginBottom: 20
    },
    textToggle: {
        color: COLORS.light,
        fontSize: SIZES.h3,
        fontFamily: 'Satoshi-Bold',

    },
    blueText: {
        color: COLORS.blue,
    }

})

export const HeaderStyles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'

    },
    arrow: {
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: COLORS.silver,
        borderWidth: 1,
        backgroundColor: COLORS.silver,
        width: 32,
        height: 32,

    }
})

export const BodyRegStyles = StyleSheet.create({
    wrapper: {
        alignItems: 'stretch',
    },
    recovery: {
        color: COLORS.light,
        fontFamily: "Satoshi-Bold",
        marginTop: 15,
        textAlign: 'center'
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.h1,
        marginBottom: 15,
        textAlign: "center",
        fontFamily: "Satoshi-Bold"
    },
    support: {
        color: COLORS.white,
        fontSize: SIZES.h4,
        fontFamily: 'Satoshi-Regular'
    },
    supportBtn: {
        color: COLORS.green2,
        fontSize: SIZES.h4,
        fontFamily: 'Satoshi-Regular'
    },
    wrapperSupport: {
        flexDirection: 'row',
        alignItems: 'end',
        justifyContent: 'center',
        marginBottom: 32,
    },
    mainBtn: {
        backgroundColor: COLORS.green2,
        borderRadius: 30,
        paddingVertical: 24,
        alignItems: 'center',
        marginTop: 33,

    },
    mainBtnText: {
        color: COLORS.white,
        fontSize: SIZES.btn,
        fontFamily: "Satoshi-Bold",
    }
})