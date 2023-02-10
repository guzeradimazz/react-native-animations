import { Image, Switch, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './DayNightSwitcherScreen.styles'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  interpolateColor,
  interpolateColors,
  useAnimatedProps,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import Switcher from './components/Switcher/Switcher'
import Sun from './components/Sun/Sun'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export const DayNightSwitcherScreen = () => {
  const [isEnabled, setEnabled] = useState(true)

  const gradientValue = useSharedValue(0)

  const toggleSwitch = () => {
    setEnabled(prev => !prev)
    gradientValue.value
      ? (gradientValue.value = withSpring(0))
      : (gradientValue.value = withSpring(1))
  }

  const UAP = useAnimatedProps(() => {
    const currentGradient = [
      interpolateColor(gradientValue.value, [0, 1], ['#78daee', '#091e4e']),
      interpolateColor(gradientValue.value, [0, 1], ['#b7eece', '#915627'])
    ]

    return { colors: currentGradient }
  })

  return (
    //@ts-ignore
    <AnimatedLinearGradient animatedProps={UAP} style={styles.wrapper}>
      <Switcher isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <Sun animatedValue={gradientValue} />
      <BackgroundImage />
    </AnimatedLinearGradient>
  )
}
