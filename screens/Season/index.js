import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

class Season extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        return fetch(`https://ergast.com/api/f1/${this.props.route.params.year}.json`)
            .then(response => response.json())
            .then(data => this.setState({data: data.MRData.RaceTable.Races}))
            .catch(error => console.log(error));
    }

    render() {
        const data = this.state;
        return (
            <SafeAreaView>
                <Text>{data.length > 0 ? data[0].raceName : 'Buscando...'}</Text>
            </SafeAreaView>
        );
    }
}

export default Season;