import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import HeaderReg from 'src/pages/reg/сomponents/HeaderReg';
import BodyReg from 'src/pages/reg/сomponents/BodyReg';
import ToggleStatus from 'src/pages/reg/сomponents/ToggleStatus';
import { COLORS } from 'src/common/CONSTANTS'


const App = ({ navigation }) => {
  const [isScrolable, setIsScrolable] = useState(false)
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      onKeyboardWillHide={() => setIsScrolable(false)}
      onKeyboardWillShow={() => setIsScrolable(true)}
      scrollEnabled={isScrolable}
      style={styles.bg}
      extraScrollHeight={100}>
      <SafeAreaView style={styles.container}>
        <HeaderReg navigation={navigation} />
        <BodyReg />
        <ToggleStatus navigation={navigation} />
      </SafeAreaView>
      <StatusBar style="light" />
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



export default App