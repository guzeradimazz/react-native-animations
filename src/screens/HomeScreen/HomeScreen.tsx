import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = ({ navigation }: any) => {
  const titles: string[] = [
    'Loader',
    'Tinder',
    'Gesture Event',
    'Blocks Transition',
    'Cards'
  ]

  return (
    <View style={styles.wrapper}>
      {titles.map(i => (
        <Text
          onPress={() => navigation.navigate(i)}
          key={i + 9009}
          style={styles.wrapperItem}
        >
          {i}
        </Text>
      ))}
    </View>
  )
}
