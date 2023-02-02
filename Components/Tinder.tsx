import {StyleSheet, View, PanResponder} from 'react-native';
import React, {useRef} from 'react';
import Card from './Tinder/Card';
import Animated from 'react-native-reanimated';

// export interface TinderItem {
//   name: string;
//   age: number;
//   uri: string;
// }

export const Tinder = () => {
  const tinderCards = [
    {
      name: 'Andrew',
      age: 20,
      uri: 'https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg',
    },
  ];

  const swipe = useRef(new Animated.Value()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipe.setValue({x: dx, y: dy});
    },
    onPanResponderRelease: () => {
      Animated.spring(swipe, {
        toValue: {x: 0, y: 0},
        useNativeDriver: true,
        friction: 5,
      });
    },
  });

  return (
    <View style={styles.wrapper}>
      {tinderCards.map((i, idx) => {
        const isFirst = idx === 0;
        const dragHandler = isFirst ? panResponder.panHandlers : {};
        return (
          <Card
            key={idx}
            name={i.name}
            age={i.age}
            uri={i.uri}
            isFirst={isFirst}
            swipe={swipe}
            {...dragHandler}
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
