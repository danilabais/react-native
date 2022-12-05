import React, {useRef, useState} from "react";
import {TextInput, StyleSheet, View, Pressable} from 'react-native'

import EyeOpen from 'src/assets/img/eyeOpen.svg'
import EyeClose from 'src/assets/img/eyeClose.svg'

export default InputReg =({placeholder,type})=>{
    const [focused,setFocused] = useState(false)
    const [openEye,setOpenEye]= useState(()=>type==="password"?false:null)

    const InputWrapper = React.createRef()
    const onBlur=(e)=>{
        setFocused(false)

        
    }
    return (
        <View style={styles.wrapperInput} ref={InputWrapper}>
            <TextInput
             
            onFocus={()=>setFocused(true)}
            onBlur={onBlur}
            style={[styles.textInput, focused?styles.textInputFocused:null]}
            placeholder={placeholder}
            placeholderTextColor="#A7A7A7"
            secureTextEntry={openEye===false}

            maxLength={50}
            keyboardType={type==='email'?'email-address':'default'}
            autoCapitalize={type==='name'?'words':'none'}
            autoComplete={type}
            />
            {openEye===null?'':
            <Pressable  style={styles.eye} onPress={()=>setOpenEye(!openEye)}>
                {
                openEye===true?
                <EyeOpen width={25} heigth={25}/>:
                <EyeClose width={25} heigth={25}/>
                }
            </Pressable>
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        paddingHorizontal: 26,
        paddingVertical: 28, 
        color:"#fff",
        borderRadius: 30,
        borderColor:"#333",
        borderWidth: 1,
        fontSize: 16,
        
    },
    wrapperInput: {
        position: 'relative',
        marginBottom: 16,
        justifyContent: 'center'
    },
    textInputFocused: {
        borderColor:"#fff",
    },
    eye: {
        position: 'absolute',
        right: 20
    }
})

