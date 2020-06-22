import React from 'react';
import { Button } from 'react-native-elements';

import { StyleSheet } from 'react-native';
import { View } from 'native-base';

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginBottom: 10,
        width: 150,
    }
});

const RaceDetails = ({ handlerSeason, year, round }) => {
    return (
        <View>
            <Button title="Colocações"
                style={styles.button} 
                onPress={() => handlerSeason('RaceDetail', {year: year, round: round})}
            />
        </View>
    );
}

export default RaceDetails;
