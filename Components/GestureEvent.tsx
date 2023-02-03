import {StyleSheet} from 'react-native';
import React from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const GestureEvent = () => {
  const pressed = useSharedValue(false);
  const startPosition = 0;
  const x = useSharedValue(startPosition);
  const y = useSharedValue(startPosition);
  const gestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true;
    },
    onActive: e => {
      x.value = startPosition + e.translationX;
      y.value = startPosition + e.translationY;
    },
    onEnd: () => {
      pressed.value = false;
      x.value = withSpring(startPosition);
      y.value = withSpring(startPosition);
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [
        {scale: withSpring(pressed.value ? 0.6 : 1)},
        {translateX: x.value},
        {translateY: y.value},
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureEvent}>
      <Animated.View style={[styles.ball, uas]} />
    </PanGestureHandler>
  );
};

export default GestureEvent;

const styles = StyleSheet.create({
  ball: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    top: '20%',
    left: '24%',
  },
});
