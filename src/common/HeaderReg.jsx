import React  from "react";
import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native';

import LogoIcon from 'src/assets/img/logo.svg'
import ArrowLeft from 'src/assets/img/arrowLeft.svg'

const goBack =()=> {
    alert('назад')
}

export default function HeaderReg() {
    return (
        <SafeAreaView >
            <View style={styles.wrapper}> 
            <Pressable onPress={goBack} style={styles.arrow}>
                <ArrowLeft  width={6} height={12} />
            </Pressable>
                <LogoIcon  width={108} height={33}/>
            </View>
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      position: 'relative',
      justifyContent: 'center'
      
    },
    arrow: {
        position: 'absolute',
        left: 0,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 50,
        borderColor: "#333",
        borderWidth: 1,
        backgroundColor: '#333',
        width: 32,
        height: 32,
        
    }
  });