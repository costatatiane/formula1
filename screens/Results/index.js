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

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}/results/1.json`)
            .then(response => response.json())
            .then(data => this.setState({ results: data.MRData.RaceTable.Races}))
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.results)
        return (
            <SafeAreaView style={styles.container}>
                {this.state.results.length > 0
                    ? <Card>
                        {
                            this.state.results.map(result => (
                                    <Card.Content key={result.round}>
                                        <Title>Corrida</Title>
                                        <Paragraph>{result.raceName}</Paragraph>
                                        <Title>Circuito</Title>
                                        <Paragraph>{result.Circuit.circuitName}</Paragraph>
                                        <Title>Data</Title>
                                        <Paragraph>{result.date}</Paragraph>
                                        <Title>Vencedor</Title>
                                        <Paragraph>{result.Results[0].Driver.familyName}</Paragraph>
                                        <Title>Escuderia</Title>
                                        <Paragraph>{result.Results[0].Constructor.name}</Paragraph>
                                        <Title>Voltas</Title>
                                        <Paragraph>{result.Results[0].laps}</Paragraph>
                                        <Title>Tempo</Title>
                                        <Paragraph>{result.Results[0].Time.time}</Paragraph>
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

export default Results;