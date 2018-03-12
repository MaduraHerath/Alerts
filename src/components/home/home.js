import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, TextInput, StatusBar, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import AlertActions from './../../actions/AlertActions';
import PostActions from './../../actions/PostActions';
import AlertStore from './../../stores/AlertStore';
import PostStore from './../../stores/PostStore';
import AltContainer from 'alt-container';
import { Alerts } from './../alerts';
import { Posts } from './../posts';
import LinearGradient from 'react-native-linear-gradient';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class Home extends React.Component {

    constructor() {
        super();
        this.state = { input: '' }

    }
    render() {
        return (
            <LinearGradient
                colors={['#DA4453', '#89216B']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            >
            <View style={styles.container,{width: width * 1},{height:height * 1.3 }}>

                <StatusBar
                    backgroundColor="#7B1FA2"
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
            </LinearGradient>

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