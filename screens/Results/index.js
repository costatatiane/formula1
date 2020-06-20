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

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}/results.json`)
            .then(response => response.json())
            .then(data => this.setState({ drivers: data.MRData.DriverTable.Drivers }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.state.drivers.length > 0
                    ? <DataTable>
                        {
                            this.state.drivers.map(driver => (
                                <DataTable.Row key={driver.driverId}>
                                    <DataTable.Cell>{driver.givenName} {driver.familyName}</DataTable.Cell>
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

export default Results;