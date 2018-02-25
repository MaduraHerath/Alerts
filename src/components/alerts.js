import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Alert } from 'react-native';
import AlertActions from './../actions/AlertActions';


export class Alerts extends React.Component {
    constructor() {
        super();
        this.button = {
            buttonColor: '#9C27B0',
            buttonTitle: 'Complete'
        }
    }
    render() {
        return (
            <View>
                {this.props.alerts.map((alert, i) => {
                    console.log(alert);
                    return (
                        <View key={i} style={style.card}>
                            <TouchableOpacity onPress={this.deleteAlert.bind(this, alert.id)}>
                                <Image
                                    style={style.button}
                                    source={require('./../images/close.png')}
                                />
                            </TouchableOpacity>
                            <Text style={style.text} >{alert.content}</Text>

                            <Button
                                onPress={this.completeAlert.bind(this, alert)}
                                title={this.checkStatus(alert).buttonTitle}
                                color={this.checkStatus(alert).buttonColor}
                                accessibilityLabel="Learn more about this purple button"
                            />
                            {/*<Button
                                onPress={this.updateAlert.bind(this, alert,"content")}
                                title='Edit'
                                color='#9C27B0'
                                accessibilityLabel="Learn more about this purple button"
                            />*/}

                        </View>
                    )
                })}
            </View>
        )
    }


    completeAlert(alert) {
        AlertActions.completeAlert(alert.id);


    }
    deleteAlert(id) {
       
        Alert.alert('Are You Sure?','This will be delete forever',[  {text: 'Yes', onPress: () => AlertActions.deleteAlert(id)},{text: 'No', onPress: () => console.log('Ask me later pressed')}])
    }
    updateAlert(alert, content) {
        AlertActions.updateAlert(alert.id, content)
    }

    checkStatus(alert) {
        if (alert.isComplete) {
            return this.button = { buttonColor: '#2196F3', buttonTitle: 'Complete' };
        }
        else {
            return this.button = { buttonColor: '#66BB6A', buttonTitle: 'Not Complete' };
        }
    }

}
const style = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#263238',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        width: 300,
        flexWrap: 'nowrap'
    },

    button: {
        alignItems: 'center',
        padding: 10,
        width: 3,
        height: 3,
        right: 0
    },
    text:{
        padding:6,
        margin:10,
        color:'#455A64'
    }

})

