import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';

import Options from './components/Options';

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

class Season extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: this.props.route.params.year,
        }
    }

    render() {
        const data = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Options 
                    handlerSeason={ this.props.navigation.navigate }
                    year={ this.state.year }
                />

                {/* <Text>{data.length > 0 ? data[0].raceName : 'Buscando...'}</Text> */}
                {/* <Races 
                    handlerSeason={ this.props.navigation.navigate }
                    races={ this.state.races } */}
                {/* /> */}
            </SafeAreaView>
        );
    }
}

export default Season;