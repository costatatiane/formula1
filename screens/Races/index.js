import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Paragraph, Subheading, Headline, Caption } from 'react-native-paper';
import { Text } from 'react-native-elements';

import RaceDetails from './components/RaceDetails';

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
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {this.state.races.length > 0
                        ? this.state.races.map(race => (
                            <Card key={race.round} style={styles.card}>
                                <Card.Content style={styles.card} key={race.round}>
                                    <Headline>{race.raceName}</Headline>
                                    <Subheading>{race.round}º round</Subheading>
                                    <Caption>Circuito</Caption>
                                    <Paragraph>{race.Circuit.circuitName}</Paragraph>
                                    <Caption>Data</Caption>
                                    <Paragraph>{race.date.split("-").reverse().join("/")}</Paragraph>
                                    <RaceDetails
                                        handlerSeason={this.props.navigation.navigate}
                                        year={this.props.route.params.year}
                                        round={race.round}
                                    />
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

export default Races;