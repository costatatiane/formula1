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

class RaceDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            positions: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}/${this.props.route.params.round}/results.json`)
            .then(response => response.json())
            .then(data => this.setState({ positions: data.MRData.RaceTable.Races[0].Results }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {this.state.positions.length > 0
                        ? this.state.positions.map(position => (
                            <Card key={position.position} style={styles.card}>
                                <Card.Content>
                                    <Headline>{position.position}º: {position.Driver.givenName} {position.Driver.familyName}</Headline>
                                    <Subheading>{position.Constructor.name}</Subheading>
                                    <Caption>Pontuação</Caption>
                                    <Paragraph>{position.points}</Paragraph>
                                    <Caption>Volta mais rápida</Caption>
                                    <Paragraph>{position.FastestLap.Time.time}</Paragraph>
                                    <Caption>Voltas Finalizadas</Caption>
                                    <Paragraph>{position.laps}</Paragraph>
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

export default RaceDetail;