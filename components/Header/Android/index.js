import React from 'react';
import logo from '../../../assets/logo.png';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 40,
        width: 155
    }
});

const HeaderAndroid = () => (
    <View style={styles.header}>
        <Image style={styles.img} source={logo} />
    </View>
);

export default HeaderAndroid;