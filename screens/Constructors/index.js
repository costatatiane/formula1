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
});

class Constructors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            constructors: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}/constructors.json`)
            .then(response => response.json())
            .then(data => this.setState({ constructors: data.MRData.ConstructorTable.Constructors }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.state.constructors.length > 0
                    ? <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Escuderia</DataTable.Title>
                            <DataTable.Title>Nacionalidade</DataTable.Title>
                        </DataTable.Header>
                        {
                            this.state.constructors.map(constructor => (
                                <DataTable.Row key={constructor.constructorId}>
                                    <DataTable.Cell>{constructor.name}</DataTable.Cell>
                                    <DataTable.Cell>{constructor.nationality}</DataTable.Cell>
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

export default Constructors;