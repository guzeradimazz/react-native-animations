import React from 'react'
import Animated, {
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'
import { styles } from './Moon.styles'

interface IMoon {
  animatedValue: Animated.SharedValue<number>
}

export const Moon = ({ animatedValue }: IMoon) => {
  const uas = useAnimatedStyle(() => {
    const translate = interpolate(animatedValue.value, [0, 2], [800, -700])

    return {
      transform: [{ translateY: translate }],
      opacity: animatedValue.value
    }
  })

  return (
    <Animated.Image
      source={ require('../../images/moon.png') }
      style={[styles.moon, uas]}
    />
  )
}

