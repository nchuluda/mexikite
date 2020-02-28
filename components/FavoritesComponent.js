import React, { Component } from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import Swipeout from 'react-native-swipeout';
import { deleteFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        school: state.school,
        favorites: state.favorites
    };
};

const mapDispatchToProps = { deleteFavorite: schoolId => (deleteFavorite(schoolId))};


class Favorites extends Component {

    render() {
        const { navigate } = this.props.navigation;

        const renderFavoriteItem = ({item}) => {
            const rightButton = [
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => this.props.deleteFavorite(item.id)
                }
            ];

            return (
                
                <Swipeout right={rightButton} autoClose={true}>
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={() => navigate('SchoolInfo', {schoolId: item.id})}
                />
                </Swipeout>
                
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
            <ScrollView>
            <Button
                        title={'Favorites'}
                        buttonStyle={{
                                backgroundColor: "#27496d"
                            }}
                        onPress={() => navigate('Favorites')}

                    />
            <FlatList
                data={this.props.school.school.filter(
                    school => this.props.favorites.includes(school.id)
                )}
                renderItem={renderFavoriteItem}
                keyExtractor={item => item.id.toString()}
            />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);