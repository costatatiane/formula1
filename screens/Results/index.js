import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Paragraph, Subheading, Headline, Caption } from 'react-native-paper';
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
            .then(data => this.setState({ results: data.MRData.RaceTable.Races }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {this.state.results.length > 0
                        ? this.state.results.map(result => (
                            <Card style={styles.card} key={result.round}>
                                <Card.Content>
                                    <Headline>{result.raceName}</Headline>
                                    <Subheading>{result.Circuit.circuitName}</Subheading>
                                    <Caption>Data</Caption>
                                    <Paragraph>{result.date.split("-").reverse().join("/")}</Paragraph>
                                    <Caption>Vencedor / Escuderia</Caption>
                                    <Paragraph>{result.Results[0].Driver.givenName} {result.Results[0].Driver.familyName} / {result.Results[0].Constructor.name}</Paragraph>
                                    <Caption>Voltas</Caption>
                                    <Paragraph>{result.Results[0].laps}</Paragraph>
                                    <Caption>Tempo</Caption>
                                    <Paragraph>{result.Results[0].Time.time}</Paragraph>
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

export default Results;