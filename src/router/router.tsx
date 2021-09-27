import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, CharacterDetail } from '@marvel/screens'

export type RootStackParamList = {
  Home: undefined;
  CharacterDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>()

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen name='CharacterDetail' component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
