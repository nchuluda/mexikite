import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { SCHOOL } from '../shared/school';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/shakavibes.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            school: SCHOOL
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <View style={{marginTop: 5, alignItems: 'center'}}>
                    <Text>Featured Kite School</Text>
                </View>
                <RenderItem 
                    item={this.state.school.filter(school => school.featured)[0]} />
                
            </ScrollView>
        );
    }
}

export default Home;