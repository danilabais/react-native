import React from "react";
import { Text, View, Pressable } from 'react-native';

import { toggleStatusStyles as styles } from 'src/common/styles/AuthAndRegStyles'

const ToggleStatus = ({ navigation }) => {

  return (
    <View style={styles.wrapperToggle}>
      <Text style={styles.textToggle}>У вас уже есть аккаунт? </Text>
      <Pressable onPress={() => navigation.navigate('Reg')}>
        <Text style={[styles.textToggle, styles.blueText]}>Войти</Text>
      </Pressable>
    </View>
  );
}

export default ToggleStatus
