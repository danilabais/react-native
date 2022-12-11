import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, SafeAreaView, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import HeaderReg from 'src/pages/reg/сomponents/HeaderReg';
import BodyReg from 'src/pages/reg/сomponents/BodyReg';
import ToggleStatus from 'src/pages/reg/сomponents/ToggleStatus';
import { COLORS } from 'src/common/CONSTANTS'

import RegistrationApi from './api'



export default function App() {
   RegistrationApi.registration({email: 'sdfsdf@fdsf.ru', password: '23423'})

  const [isScrolable, setIsScrolable] =  useState(false)
  return (
    <KeyboardAwareScrollView 
    keyboardShouldPersistTaps={'handled'}
      onKeyboardWillHide={()=>setIsScrolable(false)} 
      onKeyboardWillShow={()=>setIsScrolable(true)} 
      scrollEnabled={isScrolable}
      style={styles.bg}
      extraScrollHeight={100}>
      <SafeAreaView style={styles.container}>
        <HeaderReg/>
        <BodyReg />
        <ToggleStatus/>
      </SafeAreaView>
      <StatusBar style="light"/>
    </KeyboardAwareScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    minHeight: "100%",
    height: "100%",
  },
  bg: {
    backgroundColor: COLORS.background,
    maxHeight: "100%",
  }
});
