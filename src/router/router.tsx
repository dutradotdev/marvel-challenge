import * as React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import { Home, CharacterDetail, FavoriteHeros } from '@marvel/modules'
import { Button } from '@marvel/components'
import { View, StyleSheet } from 'react-native'
import { colors } from '@marvel/styles'

export type RootStackParamList = {
  Home: undefined
  CharacterDetail: undefined
  FavoriteHeros: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: colors.blue.secondary,
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <View style={styles.container}>
                <Button
                  onPress={() => navigation.navigate('FavoriteHeros')}
                  title='Favoritos'
                  buttonStyle={styles.headerRight}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen name='CharacterDetail' component={CharacterDetail} />
        <Stack.Screen name='FavoriteHeros' component={FavoriteHeros} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  headerRight: { marginTop: 0 },
})
