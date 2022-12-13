import { useState, FC } from "react";
import { TextInput, Text, StyleSheet, View, Pressable, Keyboard } from 'react-native'

import EyeOpen from 'src/assets/img/eyeOpen.svg'
import EyeClose from 'src/assets/img/eyeClose.svg'
import { COLORS, SIZES } from "src/common/CONSTANTS";

import { TProps } from "./models/TProps";

const InputReg: FC<TProps> = ({ placeholder, type, errorMsg, value, onChangeText, dirty }) => {
    const [focused, setFocused] = useState(false)
    const [openEye, setOpenEye] = useState(() => type === "password" ? false : null)

    return (
        <View style={styles.wrapperInput}>
            <View style={styles.position}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={() => setFocused(true)}
                    style={StyleSheet.flatten([styles.textInput, focused && styles.textInputFocused, dirty && styles.textInputError])}
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

                {openEye === null ? '' :
                    <Pressable style={styles.eye} onPress={() => setOpenEye(prev => !prev)}>
                        {
                            openEye === true ?
                                <EyeOpen width={25} height={25} /> :
                                <EyeClose width={25} height={25} />
                        }
                    </Pressable>
                }
            </View>
            {
                errorMsg
                    ?
                    <Text style={styles.errorMsg}>
                        {errorMsg}
                    </Text>
                    :
                    null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        paddingHorizontal: 26,
        paddingVertical: 24,
        color: COLORS.white,
        borderRadius: 30,
        borderColor: COLORS.silver,
        borderWidth: 1,
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h2,

    },

    errorMsg: {
        color: COLORS.error,
        marginLeft: 20,
        marginTop: 4,
        marginBottom: -2,
    },
    wrapperInput: {

        marginBottom: 14,
        justifyContent: 'center'
    },
    textInputFocused: {
        borderColor: COLORS.silver2,
    },
    textInputError: {
        borderColor: COLORS.error,
    },
    eye: {
        position: 'absolute',
        right: 20,

    },
    position: {
        position: 'relative',
        justifyContent: 'center'
    }
})

export default InputReg