import { Image, StyleSheet } from 'react-native'
import React from 'react'

const BackgroundImage = () => {
  return (
    <Image
      style={styles.image}
      resizeMode='cover'
      source={require('../../images/background.png')}
    />
  )
}

export default BackgroundImage

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  }
})
