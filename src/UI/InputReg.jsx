import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View, Pressable, Keyboard } from 'react-native'
import { useFonts } from 'expo-font';

import EyeOpen from 'src/assets/img/eyeOpen.svg'
import EyeClose from 'src/assets/img/eyeClose.svg'

export default InputReg = ({ placeholder, type, errorMsg }) => {
    const [focused, setFocused] = useState(false)
    const [openEye, setOpenEye] = useState(() => type === "password" ? false : null)




    const [fontsLoaded] = useFonts({
        'Satoshi-Bold': require('src/assets/fonts/Satoshi/Satoshi-Bold.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.wrapperInput}>
            <TextInput
                onFocus={() => setFocused(true)}
                style={[styles.textInput, focused && styles.textInputFocused, errorMsg && styles.textInputError]}
                placeholder={placeholder}
                placeholderTextColor="#A7A7A7"
                secureTextEntry={openEye === false}
                onBlur={() => setFocused(false)}
                maxLength={50}
                autoCorrect={false}
                onSubmitEditing={() => Keyboard.dismiss()}

                textContentType="oneTimeCode"
                keyboardType={type === 'email' ? 'email-address' : 'default'}
                autoCapitalize={type === 'name' ? 'words' : 'none'}
            />
            {
                errorMsg
                    ?
                    <Text style={styles.errorMsg}>
                        {errorMsg}
                    </Text>
                    :
                    null
            }

            {openEye === null ? '' :
                <Pressable style={styles.eye} onPress={() => setOpenEye(!openEye)}>
                    {
                        openEye === true ?
                            <EyeOpen width={25} heigth={25} /> :
                            <EyeClose width={25} heigth={25} />
                    }
                </Pressable>
            }

        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        paddingHorizontal: 26,
        paddingVertical: 24,
        color: "#fff",
        borderRadius: 30,
        borderColor: "#333",
        borderWidth: 1,
        fontFamily: 'Satoshi-Bold',
        fontSize: 16,

    },
    errorMsg: {
        color: '#a11521',
        marginLeft: 20,
        marginTop: 4,
        marginBottom: -2,
    },
    wrapperInput: {
        position: 'relative',
        marginBottom: 14,
        justifyContent: 'center'
    },
    textInputFocused: {
        borderColor: "#555",
    },
    textInputError: {
        borderColor: "#a11521",
    },
    eye: {
        position: 'absolute',
        right: 20
    }
})

