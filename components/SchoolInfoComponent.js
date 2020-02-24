import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { SCHOOL } from '../shared/school';

function RenderSchool({school}) {   
    if (school) {
        return (
            <Card
                featuredTitle={school.name}
                image={require('./images/shakavibes.jpg')}>
                <Text style={{margin: 10}}>
                    {school.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class SchoolInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            school: SCHOOL
        };
    }
    
    static navigationOptions = {
        title: 'School Information'
    };

    render() {
        const schoolId = this.props.navigation.getParam('schoolId');
        const school = this.state.school.filter(school => school.id === schoolId)[0];
        return <RenderSchool school={school} />;
    }
}

export default SchoolInfo;