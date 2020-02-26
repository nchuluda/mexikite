import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        school: state.school
    };
};

function RenderItem(props) {
    const { item } = props;
    
    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}>
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

    render() {
        return (
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Image
                    source={require('./images/home.jpg')}
                    />
                </View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                    <Text>Featured Kite School</Text>
                    <RenderItem 
                        item={this.props.school.school.filter(school => school.featured)[0]} 
                        isLoading={this.props.school.isLoading}
                        errMess={this.props.school.errMess}
                        />
                </View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);