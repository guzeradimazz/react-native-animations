import React from 'react'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import { styles } from './Sun.styles'

interface ISun {
  animatedValue: Animated.SharedValue<number>
}

const Sun = ({ animatedValue }: ISun) => {
  const sunAnimatedValue = useSharedValue(animatedValue ? 0 : 1)
  const uas = useAnimatedStyle(() => {
    const translate = interpolate(animatedValue.value, [0, 2], [0, -800])

    return {
      transform: [{ translateY: translate }],
      opacity: 1-animatedValue.value
    }
  })

  return <Animated.View style={[styles.sun, uas]} />
}

export default Sun
