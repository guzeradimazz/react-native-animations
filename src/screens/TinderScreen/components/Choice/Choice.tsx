import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './Choice.styles';

interface IChoice {
  type: string;
  color: string;
}

export const Choice = ({ type, color }: IChoice) => {
  return (
    <View style={[styles.choice, { borderColor: color }]}>
      <Text style={[styles.text, { color: color }]}>{type}</Text>
    </View>
  );
};
