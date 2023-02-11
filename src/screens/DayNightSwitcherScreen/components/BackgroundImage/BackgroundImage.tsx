import { Image } from 'react-native'
import React from 'react'
import { styles } from './BackgroundImage.styles'

export const BackgroundImage = () => {
  return (
    <Image
      style={styles.image}
      resizeMode='cover'
      source={require('../../images/background.png')}
    />
  )
}