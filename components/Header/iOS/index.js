import React from 'react';
import logo from '../../assets/logo.png';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3c74d7',
        marginBottom: 10
    },
    img: {
        height: 40,
        width: 120
    }
});

const HeaderIOS = () => (
    <View style={styles.header}>
        <Image style={styles.img} source={logo} />
    </View>
);

export default HeaderIOS;