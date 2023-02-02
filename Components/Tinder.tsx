import {StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './Tinder/Card';

export interface TinderItem {
  name: string;
  age: number;
  uri: string;
}

export const Tinder = () => {
  const tinderCards: TinderItem[] = [
    {
      name: 'Andrew',
      age: 20,
      uri: 'https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg',
    },
  ];

  return (
    <View style={styles.wrapper}>
      {tinderCards.map((i, idx) => {
        const isFirst = idx === 0;
        return (
          <Card
            key={idx}
            name={i.name}
            age={i.age}
            uri={i.uri}
            isFirst={isFirst}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
