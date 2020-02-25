import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { SCHOOL } from '../shared/school';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/holbox.jpg')}>
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
            
                <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                resizeMode='contain'
                resizeMethod='scale'
                source={require('./images/home.jpg')}
                
            />
                    
                </View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>

                <Text>Featured Kite School</Text>
                <RenderItem 
                    item={this.state.school.filter(school => school.featured)[0]} />
                </View>
            </ScrollView>
        );
    }
}

export default Home;