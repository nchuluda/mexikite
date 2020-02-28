import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon, Image, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        school: state.school,
        comments: state.comments,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: schoolId => (postFavorite(schoolId))
};

function RenderSchool(props) {   
    const {school} = props;
    if (school) {
        return (
            <View>
            
            
            <Card
                featuredTitle={school.name}
                image={{uri: baseUrl + school.image}}>
                <Text style={{margin: 10}}>
                    {school.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
            </View>
        );
    }
    return <View />;
}

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class SchoolInfo extends Component {

    markFavorite(schoolId) {
        this.props.postFavorite(schoolId);
    }

    render() {
        const schoolId = this.props.route.params.schoolId;
        const school = this.props.school.school.filter(school => school.id === schoolId)[0];
        
        const comments = this.props.comments.comments.filter(comment => comment.schoolId === schoolId);
        return (
        <ScrollView>
            <RenderSchool school={school}
                          favorite={this.props.favorites.includes(schoolId)}
                          markFavorite={() => this.markFavorite(schoolId)} 
                          />
            <RenderComments comments={comments} />
        </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolInfo);