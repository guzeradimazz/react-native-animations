import { Button, View } from 'react-native'
import React, { useState } from 'react'
import { Card } from './components/Card'
import { styles } from './CardScreen.styles'

export const CardsScreen = () => {
  const cards = [
    {
      color: 'pink'
    },
    {
      color: '#eb6c63'
    },
    {
      color: '#f5c269'
    },
    {
      color: '#9af569'
    },
    {
      color: '#f569f3'
    }
  ]

  const [isSwitched, setSwitched] = useState(false)

  const handleSwitchCards = () => {
    setSwitched(true)
    setTimeout(() => {
      setSwitched(false)
    }, 1500)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.cards}>
        {cards
          .map((i, idx) => <Card color={i.color} key={idx} idx={idx} isSwitched={isSwitched} />)
          }
      </View>
      <Button title='SWITCH' onPress={handleSwitchCards} />
    </View>
  )
}
