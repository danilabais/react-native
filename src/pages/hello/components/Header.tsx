
import React from "react";
import { View, Pressable } from 'react-native';

import LogoIcon from 'src/assets/img/logo.svg' 
import ArrowLeft from 'src/assets/img/arrowLeft.svg'
import { HeaderStyles as styles } from 'src/common/styles/AuthAndRegStyles'
const goBack = () => {
    alert('назад')
}

const HeaderReg =()=> {
    return (
        <View style={styles.wrapper}>
            <Pressable onPress={goBack} style={styles.arrow}>
                <ArrowLeft width={6} height={12} />
            </Pressable>
            <LogoIcon style={{opacity: 0}} width={108} height={33} />
        </View>
    );
}

export default HeaderReg