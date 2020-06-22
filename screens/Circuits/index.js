import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Paragraph, Headline, Caption } from 'react-native-paper';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
    },
    card: {
        width: 320,
        marginTop: 10,
        marginBottom: 10
    },
});

class Circuits extends Component {
    constructor(props) {
        super(props);

        this.state = {
            circuits: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}/circuits.json`)
            .then(response => response.json())
            .then(data => this.setState({ circuits: data.MRData.CircuitTable.Circuits }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {this.state.circuits.length > 0
                        ? this.state.circuits.map(circuit => (
                            <Card style={styles.card} key={circuit.circuitId}>
                                <Card.Content>
                                    <Headline>{circuit.circuitName}</Headline>
                                    <Caption>Cidade</Caption>
                                    <Paragraph>{circuit.Location.locality}</Paragraph>
                                    <Caption>País</Caption>
                                    <Paragraph>{circuit.Location.country}</Paragraph>
                                </Card.Content>
                            </Card>
                        ))
                        : <Text>Buscando...</Text>
                    }
                </SafeAreaView>
            </ScrollView>
        );
    }
}

export default Circuits;