import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SchoolInfo from './SchoolInfoComponent';
import { View } from 'react-native';
import { SCHOOL } from '../shared/school';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          school: SCHOOL,
          selectedSchool: null
        };
    }

    onSchoolSelect(schoolId) {
        this.setState({selectedSchool: schoolId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory school={this.state.school} onPress={schoolId => this.onSchoolSelect(schoolId)}/>
                <SchoolInfo school={this.state.school.filter(school => school.id === this.state.selectedSchool)[0]} />
            </View>
        )
    }
}

export default Main;