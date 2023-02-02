import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// interface IChoice {
//   type: string;
//   color: string;
// }

const Choice = ({type, color}) => {
  return (
    <View style={[styles.choice, {borderColor: color}]}>
      <Text style={[styles.text, {color: color}]}>{type}</Text>
    </View>
  );
};

export default Choice;

const styles = StyleSheet.create({
  choice: {
    position: 'absolute',
    top: 100,
    borderWidth: 7,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 4,
    padding: 5,
  },
});
