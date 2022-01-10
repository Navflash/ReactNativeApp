import React,{useState} from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';
import ColourCounter from '../Components/ColourCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () =>{
    const [red,Setred] = useState(0);
    const [green,Setgreen] = useState(0);
    const [blue,Setblue] = useState(0);

    const setColor = (color,change) =>{
        // string color
        // change +15,or -15
        switch(color){
            case 'red':
                red+change > 255 || red+change < 0 ? null : Setred(red+change);
                return;
            case 'green':
                green+change > 255 || green+change < 0 ? null : Setgreen(green+change);
                return;
            case 'blue':
                blue+change > 255 || blue+change < 0 ? null : Setblue(blue+change);
                return;
            default:
                return;
        }
    };
    
    return(
        <View>
            <ColourCounter 
            onIncrease={()=>setColor('red',COLOR_INCREMENT)}
            onDecrease={()=>setColor('red',-1*COLOR_INCREMENT)}
            color = "Red"
            />
            <ColourCounter
            onIncrease={()=>setColor('green',COLOR_INCREMENT)}
            onDecrease={()=>setColor('green',-1*COLOR_INCREMENT)} 
            color = "Green"
            />
            <ColourCounter
            onIncrease={()=>setColor('blue',COLOR_INCREMENT)}
            onDecrease={()=>setColor('blue',-1*COLOR_INCREMENT)}
            color = "Blue"
            />
            <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;