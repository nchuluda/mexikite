import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SCHOOL } from '../shared/school';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            school: SCHOOL
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.location}
                    onPress={() => navigate('SchoolInfo', { schoolId: item.id })}
                    leftAvatar={{ source: require('./images/shakavibes.jpg')}}
                />
            );
        };
    
        return (
            <FlatList 
                data={this.state.school}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;