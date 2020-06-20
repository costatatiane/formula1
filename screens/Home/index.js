import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet } from 'react-native';

import Seasons from './components/Seasons';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
    }
});

class Home extends Component {
    state = {
        years: []
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/seasons.json?limit=100`)
            .then(response => response.json())
            .then(data => this.setState({ years: data.MRData.SeasonTable.Seasons.reverse().slice(0,5) }))
            .catch(error => console.log(error));
    }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Seasons 
                    handlerSeason={ this.props.navigation.navigate }
                    years={ this.state.years }
                />
            </SafeAreaView>
        );
    }
}

export default Home;