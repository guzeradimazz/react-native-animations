import { StyleSheet, Switch } from 'react-native'
import React from 'react'

interface ISwitcher {
  isEnabled: boolean
  toggleSwitch: () => void
}

export const Switcher = ({ isEnabled, toggleSwitch }: ISwitcher) => {
  return (
    <Switch
      style={styles.switcher}
      trackColor={{ false: '#87b6c9', true: '#ffef78' }}
      thumbColor={isEnabled ? '#fab575' : '#434d91'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}
const styles = StyleSheet.create({
  switcher: {
    margin: 10,
    zIndex: 10
  }
})
