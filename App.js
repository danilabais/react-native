import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';


import HeaderReg from 'src/common/HeaderReg';
import BodyReg from 'src/pages/reg/BodyReg';
import ToggleStatus from 'src/pages/reg/ToggleStatus';

export default function App() {
  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.avoidView}
      >
    <View style={styles.container}>
      <HeaderReg/>
      
      <BodyReg />
      <ToggleStatus/>

      <StatusBar />
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070707',
    flexDirection: 'column',
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  avoidView: {
    flex: 1
  }
});
