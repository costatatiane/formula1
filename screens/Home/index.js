import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Seasons from './components/Seasons';

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Oi, eu sou a tela de Home!</Text>
                <Seasons />
            </View>
        );
    }
}

export default Home;