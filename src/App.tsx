import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoaderScreen } from './screens/LoaderScreen/LoaderScreen'
import { HomeScreen } from './screens/HomeScreen/HomeScreen'
import { TinderScreen } from './screens/TinderScreen/TinderScreen'
import { GestureEventScreen } from './screens/GestureEventScreen/GestureEventScreen'
import { BlocksTransitionScreen } from './screens/BlockTransitionScreen/BlocksTransitionScreen'

const Stack = createNativeStackNavigator()

enum AppRoutes {
  Home = 'Home',
  Loader = 'Loader',
  Tinder = 'Tinder',
  GestureEvent = 'Gesture Event',
  BlocksTransition = 'Blocks Transition'
}

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={AppRoutes.Home} component={HomeScreen} />
        <Stack.Screen name={AppRoutes.Loader} component={LoaderScreen} />
        <Stack.Screen name={AppRoutes.Tinder} component={TinderScreen} />
        <Stack.Screen
          name={AppRoutes.GestureEvent}
          component={GestureEventScreen}
        />
        <Stack.Screen
          name={AppRoutes.BlocksTransition}
          component={BlocksTransitionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
