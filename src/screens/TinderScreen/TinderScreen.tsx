import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from './components/Card/Card'

export interface TinderItem {
  name: string
  age: number
  uri: string
}

export const TinderScreen = () => {
  const [choice, setChoice] = useState('middle')
  const [tinderCards, setTinderCards] = useState<TinderItem[]>([
    {
      name: 'Mary',
      age: 18,
      uri: 'https://image.winudf.com/v2/image/Y29tLmhvdGdpcmxzLmV1cm9wZWFuaGRfc2NyZWVuXzRfMTUxOTM0OTQ3Nl8wMjU/screen-4.jpg?fakeurl=1&type=.webp'
    },
    {
      name: 'Ksenia',
      age: 30,
      uri: 'https://4-russianbride.com/wp-content/uploads/2021/01/127815795_159155395935535_1033316767718245670_n-1024x939.jpg'
    },
    {
      name: 'Darya',
      age: 22,
      uri: 'https://gobrides.net/wp-content/uploads/2022/08/hot-lady-pamela-reif.jpg'
    },
    {
      name: 'Mila',
      age: 24,
      uri: 'https://eurobridefinder.com/wp-content/uploads/2021/03/Eastern-European-Women-Dating-Sites.jpg'
    },
    {
      name: 'Andrew',
      age: 22,
      uri: 'https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg'
    }
  ])

  const choiceEvent = (value: number) => {
    if (value > 20) {
      setChoice('right')
    } else if (value < -20) {
      setChoice('left')
    }
  }
  useEffect(() => {
    if (choice === 'left' || choice === 'right') {
      setTimeout(() => {
        setTinderCards(prev => prev.slice(1))
        setChoice('middle')
      }, 500)
    }
    console.log(choice)
  }, [choice])
  return (
    <View style={styles.wrapper}>
      {tinderCards
        .map((i, idx) => {
          const isFirst = idx === 0
          return (
            <Card
              key={idx}
              name={i.name}
              age={i.age}
              uri={i.uri}
              choice={choice}
              choiceEvent={choiceEvent}
              isFirst={isFirst}
            />
          )
        })
        .reverse()}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
})
