import React, { Component } from 'react';
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Tile, Button } from 'react-native-elements';
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

        const DirectoryButtons = () => {
            return (
                <View style={styles.buttonRow}>
                    <View style={styles.buttonContainer}> 

                    <Button
                        title={'View All'}
                        buttonStyle={{
                                backgroundColor: "#27496d"
                            }}
                        onPress={() => navigate('Directory')}
                    />
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button
                        title={'Favorites'}
                        buttonStyle={{
                                backgroundColor: "#27496d"
                            }}
                        onPress={() => navigate('Favorites')}

                    />
                    </View>
                </View>
            );
        }
        
        return (
            <ScrollView>
            <DirectoryButtons />
            <FlatList 
                data={this.props.school.school}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    schoolTile: {
        backgroundColor: '#fff'
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#27496d',
        
    },
    buttonContainer: {
      flex: 1,
    }
});

export default connect(mapStateToProps)(Directory);