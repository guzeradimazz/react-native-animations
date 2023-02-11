import React, { useState } from 'react'
import { styles } from './DayNightSwitcherScreen.styles'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage'
import { Switcher } from './components/Switcher/Switcher'
import { Sun } from './components/Sun/Sun'
import { Moon } from './components/Moon/Moon'
import { Stars } from './components/Stars/Stars'
import { Cloud } from './components/Cloud/Cloud'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export const DayNightSwitcherScreen = () => {
  const [isEnabled, setEnabled] = useState(true)

  const gradientValue = useSharedValue(0)

  const toggleSwitch = () => {
    setEnabled(prev => !prev)
    gradientValue.value
      ? (gradientValue.value = withTiming(0, {
          easing: Easing.bezier(0.5, 1, 0.89, 1),
          duration: 2300
        }))
      : (gradientValue.value = withTiming(1, {
          easing: Easing.bezier(0.5, 1, 0.89, 1),
          duration: 2300
        }))
  }

  const UAP = useAnimatedProps(() => {
    const currentGradient = [
      interpolateColor(gradientValue.value, [0, 1], ['#a7dbd8', '#2e3359']),
      interpolateColor(gradientValue.value, [0, 1], ['#fab575', '#434d91']),
      interpolateColor(gradientValue.value, [0, 1], ['#ffef78', '#87b6c9'])
    ]

    return { colors: currentGradient }
  })

  return (
    //@ts-ignore
    <AnimatedLinearGradient animatedProps={UAP} style={styles.wrapper}>
      <Switcher isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <Sun animatedValue={gradientValue} />
      <Moon animatedValue={gradientValue} />
      <Stars animatedValue={gradientValue} />
      <Cloud animatedValue={gradientValue} />
      <BackgroundImage />
    </AnimatedLinearGradient>
  )
}
