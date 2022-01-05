import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity, Touchable } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Text style={styles.text}>Hello peter</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go To ComponentsDemo"
    />
    <Button
      onPress={() => navigation.navigate('List')}
      title="Go To ListDemo"
    />
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go To ImageScreen"
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go To CounterScreen"
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
