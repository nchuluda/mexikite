import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        school: state.school
    };
};

class Home extends Component {

    render() {

        const { navigate } = this.props.navigation;
        
        const RenderItem = ({item}) => {

            if (this.props.school.isLoading) {
                return <Loading />;
            }
            if (this.props.school.errMess) {
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
                        image={{uri: baseUrl + item.image}}
                        
        >
                        <Text
                            style={{ fontSize: 14, margin: 10}}>
                            {item.description}
                        </Text>
                        <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
                        <Button
                            title='More Info'
                            type='solid'
                            buttonStyle={{
                                backgroundColor: "#00a8cc"
                            }}
                            containerStyle={{
                                width: "40%",
                            }}
                            onPress={() => navigate('SchoolInfo', { schoolId: item.id })}
        
                        />
                        </View>
                    </Card>
                );
            }
            return <View />;
        }

        
        
        return (
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Image
                    source={require('./images/home.jpg')}
                    />
                </View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                    <Text style={{ fontFamily: 'ostrich', fontSize: 25}}>Featured Kite School</Text>
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