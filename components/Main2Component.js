import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchSchool, fetchComments } from '../redux/ActionCreators';
import MyTabs from '../navigation/Navigation';

console.disableYellowBox = true;

const mapDispatchToProps = {
    fetchSchool,
    fetchComments,
};

class Main2 extends Component {

    componentDidMount() {
        this.props.fetchSchool();
        this.props.fetchComments();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                }}>
                <MyTabs />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main2);