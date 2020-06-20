import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataTable } from 'react-native-paper';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        width: 150,
    }
});

class Races extends Component {
    constructor(props) {
        super(props);

        this.state = {
            races: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}.json`)
            .then(response => response.json())
            .then(data => this.setState({ races: data.MRData.RaceTable.Races }))
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.races)
        return (
            <SafeAreaView style={styles.container}>
                {this.state.races.length > 0
                    ? <DataTable>
                        {
                            this.state.races.map(race => (
                                <DataTable.Row key={race.round}>
                                    <DataTable.Cell>{race.round}</DataTable.Cell>
                                    <DataTable.Cell>{race.Circuit.circuitName}</DataTable.Cell>
                                </DataTable.Row>
                            ))
                        }
                    </DataTable>
                    : <Text>Buscando...</Text>
                }
            </SafeAreaView>
        );
    }
}

export default Races;