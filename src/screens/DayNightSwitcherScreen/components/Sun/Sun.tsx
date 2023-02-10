import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { styles } from './Sun.styles'

interface ISun {
  animatedValue: Animated.SharedValue<number>
}

const Sun = ({ animatedValue }: ISun) => {
  const uas = useAnimatedStyle(() => {
    const translate = interpolate(animatedValue.value, [0, 2], [0, 1000])

    return {
      transform: [{ translateY: translate }]
    }
  })

  return <Animated.View style={[styles.sun, uas]} />
}

export default Sun
