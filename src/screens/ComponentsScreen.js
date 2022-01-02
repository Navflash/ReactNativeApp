import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen = () =>{
    const name = "stephen"
    return (
        <View>
        <Text style={styles.textstyle}>Getting Started with React Naative</Text>
        <Text style={styles.subheading}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textstyle:{
        fontSize : 45
    },
    subheading:{
        fontSize: 20
    }
});

export default ComponentsScreen;