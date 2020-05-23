import React from 'react';

import { StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';

const style = StyleSheet.create({
    button: {
        marginBottom: 10
    }
})

const years = ['2020', '2019', '2018', '2017', '2016']

const Seasons = () => {
    return years
        .map(year => (
            <Button style={style.button}>
                <Text>{year}</Text>
            </Button>
        ));
}

export default Seasons;