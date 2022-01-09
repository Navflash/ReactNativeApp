import React,{useState} from 'react';
import {View,StyleSheet,Button,FlatList} from 'react-native';

const ColourScreen = () =>{
    const [colours,Setcolours] = useState([]);
    return (
    <View>
        <Button title='Add a Colour' onPress={() =>{
            Setcolours([...colours,Randomrgb()]);
        }}/>
        
        <FlatList 
            keyExtractor={(item) => item}
            data={colours}
            renderItem={({ item }) =>{
                return <View style={{height:100 , width:100, backgroundColor: item}} />
            }}
        />
    </View>
    );
};

const Randomrgb = () =>{
    const Red = Math.floor(Math.random()*256);
    const Green = Math.floor(Math.random()*256);
    const Blue = Math.floor(Math.random()*256);

    return `rgb(${Red},${Green},${Blue})`;
}

const styles = StyleSheet.create({});

export default ColourScreen;