import { View } from 'react-native'
import React from 'react'
import { styles } from './Stars.styles'
import Animated, {
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'

interface IStars {
  animatedValue: Animated.SharedValue<number>
}
interface IStarsArrayItem {
  x: number
  y: number
}

export const Stars = ({ animatedValue }: IStars) => {
  const starsArray: IStarsArrayItem[] = [
    { x: 50, y: 50 },
    { x: 100, y: 100 },
    { x: 140, y: 200 },
    { x: 250, y: 180 },
    { x: 350, y: 80 },
    { x: 50, y: 380 },
    { x: 350, y: 450 },
    { x: 300, y: 350 }
  ]

  const uas = useAnimatedStyle(() => {
    const opacity = interpolate(animatedValue.value, [0, 1], [0, 1])
    return {
      opacity: opacity
    }
  })
  return (
    <View style={styles.starsWrapper}>
      {starsArray.map((i, idx) => (
        <Animated.View
          key={idx}
          style={[
            styles.star,
            { transform: [{ translateX: i.x }, { translateY: i.y }] },
            uas
          ]}
        />
      ))}
    </View>
  )
}
