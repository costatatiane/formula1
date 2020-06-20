import React from 'react';
import { Button } from 'react-native-elements';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginBottom: 10,
        width: 150,
    }
});

const Seasons = ({ handlerSeason, years }) => {
    return years
        .map(year => (
            <Button title={year.season}
                key={year.season}
                style={styles.button} 
                onPress={() => handlerSeason('Season', {year: year.season})}>
            </Button>
        ));
}

export default Seasons;
