import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class About extends Component {

    render() {
        return (
            <ScrollView>
                <View style={{alignItems: 'center', paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                    <Text>About MexiKite</Text>
                </View>
            </ScrollView>
        );
    }
}

export default About;