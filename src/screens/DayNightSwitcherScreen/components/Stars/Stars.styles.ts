import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  star: {
    width: 4,
    height: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 3
  },
  starsWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})
