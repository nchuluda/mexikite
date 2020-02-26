import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ListItem, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

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