import React, { Component } from 'react';
import { View } from 'react-native';

import Seasons from './components/Seasons';

class Home extends Component {
    state = {
        years: []
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/seasons.json?limit=100`)
            .then(response => response.json())
            .then(data => this.setState({ years: data.MRData.SeasonTable.Seasons.reverse().slice(0,10) }))
            .catch(error => console.log(error));
    }
    
    render() {
        return (
            <View>
                <Seasons 
                    handlerSeason={ this.props.navigation.navigate }
                    years={ this.state.years }
                />
            </View>
        );
    }
}

export default Home;