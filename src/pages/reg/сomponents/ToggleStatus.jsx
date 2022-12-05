import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

import { toggleStatusStyles as styles } from 'src/common/styles/AuthAndRegStyles'

export default function ToggleStatus() {
  const [fontsLoaded] = useFonts({
    'Satoshi-Bold': require('src/assets/fonts/Satoshi/Satoshi-Bold.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.wrapperToggle}>
      <Text style={styles.textToggle}>У вас уже есть аккаунт? </Text>
      <Pressable>
        <Text style={[styles.textToggle, styles.blueText]}>Войти</Text>
      </Pressable>
    </View>
  );
}
