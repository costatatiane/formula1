import React, { Component } from 'react';
import { View } from 'react-native';

import { StyleSheet } from 'react-native';

import { Button, Text } from 'native-base';

const style = StyleSheet.create({
    button: {
        marginBottom: 10
    }
});

const Seasons = ({ handlerSeason, years }) => {
    return years
        .map(year => (
            <Button
                key={year.season}
                style={style.button} 
                onPress={ () => handlerSeason('Season', {year: year.season})}>
                
                <Text>{year.season}</Text>
            </Button>
        ));
}

export default Seasons;
