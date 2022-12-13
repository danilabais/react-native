import React from "react";

import Reg from 'src/pages/reg'
import Auth from 'src/pages/auth'
import Hello from 'src/pages/hello'

import { createNativeStackNavigator } from '@react-navigation/native-stack'


import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default App = () => {
  const [fontsLoaded] = useFonts({
    'Satoshi-Bold': require('src/assets/fonts/Satoshi/Satoshi-Bold.otf'),
    'Satoshi-Regular': require('src/assets/fonts/Satoshi/Satoshi-Regular.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen options={{headerShown: false}} name="Hello" component={Hello} />
        <Stack.Screen options={{headerShown: false}} name="Auth" component={Auth} />
        <Stack.Screen options={{headerShown: false}} name="Reg" component={Reg} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}