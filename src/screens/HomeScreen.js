import React from 'react';
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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
