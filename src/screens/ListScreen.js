import React from 'react';
import {Text,StyleSheet,View,FlatList} from 'react-native';

const ListScreen = () =>{
    const Friends = [
        {Name : "Friend1"},
        {Name : "Friend2"},
        {Name : "Friend3"},
        {Name : "Friend4"},
        {Name : "Friend5"},
        {Name : "Friend6"},
        {Name : "Friend7"}
    ]
    return(
        <FlatList
            keyExtractor={friend => friend.Name } 
            data={Friends} 
            renderItem={({item}) => {
                return <Text style ={styles.textstyle}>{item.Name}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    textstyle : {
        marginVertical : 50
    }
});

export default ListScreen;