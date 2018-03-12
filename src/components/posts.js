import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import AlertActions from './../actions/AlertActions';


export class Posts extends React.Component {
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
                {this.props.posts.map((post, i) => {
                    console.log(post);
                    return (
                        <View key={i} style={style.card}>
                             <Text style={style.id}>{post.id}</Text>
                            <Text >{post.title}</Text>
                        </View>
                    )
                })}
            </View>
        )
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
        flexWrap: 'nowrap'
    },

    button: {
        alignItems: 'center',
        padding: 10,
        width: 3,
        height: 3,
        right: 0
    },
    id:{
        color:'#e53935',
        fontWeight: 'bold',
    }

})

