import {StyleSheet, Text, Image, View} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Choice from './Choice';

interface ICard {
  name: string;
  age: number;
  uri: string;
  choice: string;
  choiceEvent: (value: number) => void;
  isFirst: boolean;
}

const Card = ({name, age, uri, choice, choiceEvent, isFirst}: ICard) => {
  const renderChoice = useCallback(() => {
    return (
      <>
        {choice === 'left' ? (
          <View style={styles.likeContainer}>
            <Choice color="#00eda6" type="LIKE" />
          </View>
        ) : choice === 'right' ? (
          <View style={styles.nopeContainer}>
            <Choice color="#ff006f" type="NOPE" />
          </View>
        ) : null}
      </>
    );
  }, [choice]);

  const pressed = useSharedValue(false);

  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const eventHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true;
    },
    onActive: event => {
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
    },
    onEnd: () => {
      pressed.value = false;
      x.value = withSpring(startingPosition);
      y.value = withSpring(startingPosition);
    },
  });

  const uas = useAnimatedStyle(() => {
    runOnJS(choiceEvent)(x.value);

    return {
      transform: [
        {translateX: x.value},
        {translateY: y.value},
        {rotate: `${x.value / 10}deg`},
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.card, uas]}>
        <Image
          style={styles.image}
          source={{
            uri: uri,
          }}
        />
        <Text style={styles.header}>{name + '    ' + age}</Text>
        <Text style={styles.pa20}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
          consequatur? Eaque molestiae dignissimos laudantium porro illum.
          Suscipit similique blanditiis culpa ab, totam excepturi ad porro
          voluptates dolorum? Rem, dolor aliquid.
        </Text>
        {isFirst && renderChoice()}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '90%',
    height: '90%',
    borderWidth: 1,
    borderColor: '#fc035e',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    fontSize: 44,
    marginTop: -25,
    marginLeft: -75,
    fontWeight: 'bold',
    color: '#fc035e',
  },
  pa20: {padding: 20},
  likeContainer: {
    position: 'absolute',
    transform: [{rotate: '30deg'}],
    right: 50,
    top: -60,
  },
  nopeContainer: {
    position: 'absolute',
    transform: [{rotate: '-30deg'}],
    left: -50,
  },
});
