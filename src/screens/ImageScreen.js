import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetail 
                title="forest" 
                imageSource = {require('../../assets/forest.jpg')}
                score ={7}
            />
            <ImageDetail 
                title="Beach" 
                imageSource = {require('../../assets/beach.jpg')}
                score={9}
            />
            <ImageDetail 
                title="Mountain" 
                imageSource = {require('../../assets/mountain.jpg')}
                score={4}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;