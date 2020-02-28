import React, { Component } from 'react';
import { View, Text, ScrollView, Button, Modal, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements'

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          name: '',
          email: '',
          text: ''
        };
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleContact(schoolId) {
        console.log(JSON.stringify(this.state));
        this.props.postContact(schoolId, this.state.name, this.state.email, this.state.text);
        this.toggleModal();
    }

    
    resetForm() {
        this.setState({
            showModal: false,
            name: '',
            email: '',
            text: ''
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{alignItems: 'center', paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                    <Text>About MexiKite</Text>
                    <Button 
                        title='Contact Us'
                        color="#0c7b93"
                        onPress={() => this.toggleModal()}
                        />
                </View>
                <Modal 
                animationType='slide' 
                transparent={false}
                visible={this.state.showModal}
                onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                    <Input
                            placeholder='Name'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(name)=>this.setState({name: name})}
                            value={this.state.name}
                            />
                        <Input
                            placeholder='Email'
                            leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(email)=>this.setState({email: email})}
                            value={this.state.email}
                            />
                        <Input
                            multiline={true}
                            placeholder='Comment'
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(text)=>this.setState({text: text})}
                            value={this.state.text}
                            />
                        
                        <View style={{margin: 10}}>
                            
                        <Button
                            onPress={() => {
                                
                                this.toggleModal();
                             }}
                             color='#0c7b93'
                             title='Submit'
                             />
                        </View>
                        <View style={{margin: 10}}>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                                color='#808080'
                                title='Cancel'
                                />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 20
    },
});

export default About;