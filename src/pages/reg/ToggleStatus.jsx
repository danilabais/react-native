import React  from "react";
import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native';


export default function ToggleStatus() {
    return (
        <SafeAreaView >
          <View style={styles.wrapperToggle}>
            <Text style={styles.textToggle}>У вас уже есть аккаунт? </Text>
            <Pressable>
                <Text style={[styles.textToggle, styles.blueText]}>Войдите</Text>
            </Pressable>
          </View>
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    wrapperToggle: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    textToggle: {
        color: "#DBDBDB",
        fontSize: 14,
    },
    blueText: {
        color: "#288CE9"
    }
  });