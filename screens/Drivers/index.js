import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataTable } from 'react-native-paper';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
    },
});

class Drivers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}/drivers.json`)
            .then(response => response.json())
            .then(data => this.setState({ drivers: data.MRData.DriverTable.Drivers }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {this.state.drivers.length > 0
                        ? <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Nome</DataTable.Title>
                                <DataTable.Title>Nacionalidade</DataTable.Title>
                            </DataTable.Header>
                            {this.state.drivers.map(driver => (
                                <DataTable.Row key={driver.driverId}>
                                    <DataTable.Cell>{driver.givenName} {driver.familyName}</DataTable.Cell>
                                    <DataTable.Cell>{driver.nationality}</DataTable.Cell>
                                </DataTable.Row>
                            ))}
                        </DataTable>
                        : <Text>Buscando...</Text>
                    }
                </SafeAreaView>
            </ScrollView>
        )
    }
}

export default Drivers;