import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, TextInput, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import AlertActions from './../../actions/AlertActions';
import PostActions from './../../actions/PostActions';
import AlertStore from './../../stores/AlertStore';
import PostStore from './../../stores/PostStore';
import AltContainer from 'alt-container';
import { Alerts } from './../alerts';
import { Posts } from './../posts';


export default class Home extends React.Component {




    constructor() {
        super();
        this.state = { input: '' }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#ef5350"
                    barStyle="light-content"
                />
                <Button style={styles.button}
                    onPress={() => this.props.navigation.navigate('Newsfeed')}
                    title='Goto Posts'
                    color='#9C27B0'
                />
                
                <ScrollView>
                    <AltContainer store={AlertStore}>
                        <Alerts>

                        </Alerts>
                    </AltContainer>
                </ScrollView>
                <TextInput style={styles.text} onChangeText={(text) => this.setState({ input: text })} value={this.state.input} onSubmitEditing={this.handleSubmit.bind(this)} />

            </View>
        );
    }

    handleSubmit() {
        let alert = this.state.input;
        if (alert === null) {
            alert("Empty String")
        }
        else {
            AlertActions.addAlert(alert);
            this.setState({ input: '' });
        }
    }


}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding:10,
        paddingTop:10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FAFAFA',
    },
    instructions: {
        textAlign: 'center',
        color: '#FAFAFA',
        marginBottom: 5,
    },
    signup: {
        marginTop: 10,
        paddingTop: 5,
        borderRadius: 30,

    },
    text: {

        bottom: 10,
        position: 'absolute',
        height:40,
        width:200,
        backgroundColor:'rgba(244,67,54 ,0.6)',
       
        paddingHorizontal:10,
        marginBottom:10

    },
    button: {
        alignItems: 'center',
        padding: 10,
        width: 3,
        height: 3,
        right: 0,
        marginTop:30
    },
});