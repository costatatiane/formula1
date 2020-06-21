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

const Seasons = ({ handlerSeason, year }) => {
    return (
        <View>
            <Button title="Corridas"
                style={styles.button} 
                onPress={() => handlerSeason('Races', {year: year})}
            />
            <Button title="Pilotos"
                style={styles.button} 
                onPress={() => handlerSeason('Drivers', {year: year})}
            />              
            <Button title="Circuitos"
                style={styles.button} 
                onPress={() => handlerSeason('Circuits', {year: year})}
            />
            <Button title="Escuderias"
                style={styles.button} 
                onPress={() => handlerSeason('Constructors', {year: year})}
            />
            <Button title="Resultados"
                style={styles.button} 
                onPress={() => handlerSeason('Results', {year: year})}
            /> 
        </View>
    );
}

export default Seasons;
