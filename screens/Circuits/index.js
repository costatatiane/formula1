import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
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
        console.log(this.state.circuits)
        return (
            <SafeAreaView style={styles.container}>
                {this.state.circuits.length > 0
                    ?  <Card>
                        {
                            this.state.circuits.map(circuit => (
                                <Card.Content>
                                    <Title>Circuito</Title>
                                    <Paragraph>{circuit.circuitName}</Paragraph>
                                    <Title>Cidade</Title>
                                    <Paragraph>{circuit.Location.locality}</Paragraph>
                                    <Title>País</Title>
                                    <Paragraph>{circuit.Location.country}</Paragraph>
                                    <Divider />
                                </Card.Content>
                            ))
                        }
                    </Card>
                    : <Text>Buscando...</Text>
                }
            </SafeAreaView>
        );
    }
}

export default Circuits;