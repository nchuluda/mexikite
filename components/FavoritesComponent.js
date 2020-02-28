import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        school: state.school,
        favorites: state.favorites
    };
};

class Favorites extends Component {

    render() {
        const { navigate } = this.props.navigation;

        const renderFavoriteItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={() => navigate('SchoolInfo', {schoolId: item.id})}
                />
            );
        };

        if (this.props.school.isLoading) {
            return <Loading />;
        }
        if (this.props.school.errMess) {
            return (
                <View>
                    <Text>{this.props.school.errMess}</Text>
                </View>
            );
        }
        return (
            <FlatList
                data={this.props.school.school.filter(
                    school => this.props.favorites.includes(school.id)
                )}
                renderItem={renderFavoriteItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Favorites);