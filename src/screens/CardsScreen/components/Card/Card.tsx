import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './Card.styles'
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'

interface ICard {
  color: string
  idx: number
  isSwitched: boolean
}

export const Card = ({ color, idx, isSwitched }: ICard) => {
  const rotation = useSharedValue(0)
  const translation = useSharedValue(0)

  const onSwitchCards = () => {
    translation.value = withTiming(idx * 20 + 5, {
      easing: Easing.linear,
      duration: 500
    })
    rotation.value = withTiming(15, {
      easing: Easing.linear,
      duration: 500
    })
    setTimeout(() => {
      rotation.value = withTiming(0, {
        easing: Easing.linear,
        duration: 500
      })
      translation.value = withTiming(0, {
        easing: Easing.linear,
        duration: 500
      })
    }, 1500)
  }

  useEffect(() => {
    isSwitched ? onSwitchCards() : null
  }, [isSwitched])

  const animatedRotationStyle = useAnimatedStyle(() => {
    const rotate = interpolate(rotation.value, [0, 2], [0, idx])
    return {
      transform: [
        { rotate: withSpring(`${rotate}deg`) },
        { translateY: -translation.value }
      ]
    }
  })

  return (
    <Animated.View
      style={[
        styles.card,
        { backgroundColor: color, borderColor: color },
        animatedRotationStyle
      ]}
    >
      <Text style={styles.cardTopText}>Mastercard</Text>
      <Text style={styles.cardNum}>**** **** **** 7788</Text>
      <View style={styles.bottomLine}>
        <Text style={styles.bottomLineText}>Card holder</Text>
        <Text style={styles.bottomLineText}>Entry date</Text>
      </View>
      <View style={styles.bottomLine}>
        <Text style={styles.bottomLineText}>Dmitry Mohhamad</Text>
        <Text style={styles.bottomLineText}>03/25</Text>
      </View>
    </Animated.View>
  )
}
