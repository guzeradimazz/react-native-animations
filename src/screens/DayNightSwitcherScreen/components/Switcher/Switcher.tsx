import { StyleSheet, Switch } from 'react-native'
import React from 'react'

interface ISwitcher {
  isEnabled: boolean
  toggleSwitch: () => void
}

const Switcher = ({ isEnabled, toggleSwitch }: ISwitcher) => {
  return (
    <Switch
      style={styles.switcher}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default Switcher

const styles = StyleSheet.create({
  switcher: {
    margin: 10
  }
})
