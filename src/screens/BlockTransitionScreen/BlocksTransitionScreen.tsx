import { Button, View } from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './BlocksTransitionScreen.styles';

export const BlocksTransitionScreen = () => {
  const offset = useSharedValue(0);
  const rotationValue = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const doubleX = useSharedValue(0);
  const doubleY = useSharedValue(0);

  const firstBrickStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 255) }],
    };
  });

  const secondBrickStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: withSpring(`${rotationValue.value}deg`) }],
    };
  });

  const thirdBrickStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(offsetY.value * 255) }],
    };
  });

  const fourthBrickStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(doubleX.value * 200) },
        { translateY: withSpring(doubleY.value * 200) },
      ],
    };
  });

  const onPress = () => {
    offset.value = Math.random();
  };

  const onPressRotation = () => {
    rotationValue.value = withRepeat(withTiming(50), 6, true);
  };

  const onPressTranslateY = () => {
    offsetY.value = Math.random();
  };

  const onPressTranslateXY = () => {
    doubleX.value = withTiming(Math.random(), {
      duration: 500,
      easing: Easing.linear,
    });
    doubleY.value = withTiming(Math.random(), {
      duration: 500,
      easing: Easing.linear,
    });
  };

  return (
    <View>
      <View style={styles.card}>
        <Animated.View style={[styles.brick, firstBrickStyles]} />
        <Button onPress={onPress} title="MOVE" />
      </View>

      <View
        style={[
          styles.card,
          { justifyContent: 'center', alignItems: 'center' },
        ]}>
        <Animated.View style={[styles.brick, secondBrickStyles]} />
        <Button onPress={onPressRotation} title="START" />
      </View>

      <View style={[styles.card, { height: 150 }]}>
        <Animated.View style={[styles.brick, thirdBrickStyles]} />
        <Button onPress={onPressTranslateY} title="MOVE" />
      </View>
      <View style={[styles.card]}>
        <Animated.View style={[styles.brick, fourthBrickStyles]} />
        <Button onPress={onPressTranslateXY} title="MOVE" />
      </View>
    </View>
  );
};
