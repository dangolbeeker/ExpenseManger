import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../../utils/Colors'


export default class SplashScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.title}>Scott's Super Simple Expense Manager</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        position: 'absolute',
        fontsFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 48,
        lineHeight: 45,
        alignSelf: 'center',
        letterSpacing: -0.02,
        color: '#FFFFFF'
    }
    
})