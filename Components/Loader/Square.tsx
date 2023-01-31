import React from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface SquareProps {
  idx: number;
  progress: Animated.SharedValue<number>;
}

const Square = ({idx, progress}: SquareProps) => {
  const offsetAngle = (2 * Math.PI) / 12;
  const finalAngle = offsetAngle * (12 - 1 - idx);

  const rotate = useDerivedValue(() => {
    if (progress.value <= 2 * Math.PI) {
      return Math.min(finalAngle, progress.value);
    }
    if (progress.value - 2 * Math.PI < finalAngle) {
      return finalAngle;
    }

    return progress.value;
  }, []);

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) {
      return withSpring(-12 * 12);
    }

    if (progress.value > 2 * Math.PI) {
      return withTiming((idx - 12) * 12);
    }

    return withTiming(-idx * 12);
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: `${rotate.value}rad`},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <Animated.View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          height: 12,
          aspectRatio: 1,
          backgroundColor: 'white',
          position: 'absolute',
        },
        rStyle,
      ]}
    />
  );
};

export default Square;
