import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ListItem, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        school: state.school
    };
};

class Directory extends Component {



    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <View >
                <ListItem
                    title={item.name}
                    subtitle={item.location}
                    onPress={() => navigate('SchoolInfo', { schoolId: item.id })}
                    leftAvatar={{ source: {uri: baseUrl + item.image}}}
                />
                <Tile
                    featured
                    onPress={() => navigate('SchoolInfo', { schoolId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                    
                />
                </View>
            );
        };

        if (this.props.school.isLoading) {
            return <Loading />;
        }
        if (this.props.school.errMess) {
            return (
                <View>
                    <Text>{props.school.errMess}</Text>
                </View>
            );
        }
        
        return (
            <FlatList 
                data={this.props.school.school}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

const styles = StyleSheet.create({
    schoolTile: {
        backgroundColor: '#fff'
    }
});

export default connect(mapStateToProps)(Directory);