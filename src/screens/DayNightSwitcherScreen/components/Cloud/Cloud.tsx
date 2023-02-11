import { Image, View } from 'react-native'
import React from 'react'
import { styles } from './Cloud.styles'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

interface ICloud {
  animatedValue: Animated.SharedValue<number>
}
interface ICloudArrayItem {
  x: number
  y: number
}

export const Cloud = ({ animatedValue }: ICloud) => {
  const starsArray: ICloudArrayItem[] = [{ x: 50, y: 250 }]

  const uas = useAnimatedStyle(() => {
    const translation = interpolate(animatedValue.value,[0,1],[20,-220])
    return {
      opacity: 1 - animatedValue.value,
      transform: [{ translateX: translation }, { translateY: 110 }]
    }
  })

  return (
    <View style={styles.cloudsWrapper}>
      {starsArray.map((i, idx) => (
        <Animated.Image
          source={require('../../images/cloud.png')}
          key={idx}
          style={[styles.cloud, {}, uas]}
        />
      ))}
    </View>
  )
}
