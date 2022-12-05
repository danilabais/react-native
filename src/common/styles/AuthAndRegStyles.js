import { StyleSheet } from 'react-native'

export const toggleStatusStyles = StyleSheet.create({
    wrapperToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'end',
        marginBottom: 20
    },
    textToggle: {
        color: "#DBDBDB",
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',

    },
    blueText: {
        color: "#288CE9",
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
        borderColor: "#333",
        borderWidth: 1,
        backgroundColor: '#333',
        width: 32,
        height: 32,

    }
})

export const BodyRegStyles = StyleSheet.create({
    wrapper: {
        alignItems: 'stretch',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 15,
        textAlign: "center",
        fontFamily: "Satoshi-Bold"
    },
    support: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Satoshi-Regular'
    },
    supportBtn: {
        color: '#38B432',
        fontSize: 12,
        fontFamily: 'Satoshi-Regular'
    },
    wrapperSupport: {
        flexDirection: 'row',
        alignItems: 'end',
        justifyContent: 'center',

        marginBottom: 32,
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
        fontSize: 24,
        fontFamily: "Satoshi-Bold",
    }
})