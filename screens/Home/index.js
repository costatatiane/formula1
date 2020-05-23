import React, { Component } from 'react';
import { View } from 'react-native';

import Seasons from './components/Seasons';

class Home extends Component {
    render() {
        return (
            <View>
                <Seasons 
                    handlerSeason={ this.props.navigation.navigate }
                />
            </View>
        );
    }
}

export default Home;