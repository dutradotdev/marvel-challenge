import React, { useEffect, useState, useMemo } from 'react'
import { SafeAreaView, View, FlatList, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Share from 'react-native-share'
import { useSelector } from 'react-redux'
import styles from './styles'
import { Button, Text } from '@marvel/components'
import { colors } from '@marvel/styles'
import { RootState } from '@marvel/redux/store'

const FavoriteHeros = () => {
  const navigation = useNavigation()
  const { favoriteHeros } = useSelector((state: RootState) => state.favoriteHero)
  const [searchedHero, setSearchedHero] = useState('')

  const favoriteHerosAsArray: string[] = useMemo(
    () =>
      Object.keys(favoriteHeros).reduce((acc: string[], elm) => {
        const name = favoriteHeros[elm]?.name
        acc.push(name)
        return acc
      }, []),
    [favoriteHeros]
  )

  useEffect(() => {
    navigation.setOptions({
      title: 'Heróis favoritos',
    })
  }, [])

  const handleOnPress = async () => {
    try {
      await Share.open({
        title: 'Lista de heróis',
        message: favoriteHerosAsArray.join(', '),
      })
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <Text size='large' weight='bold'>{`${index + 1} - ${item}`}</Text>
  )
  const keyExtractor = (item: string) => item
  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text size='large' weight='bold' color={colors.black.primary}>
            Veja aqui sua lista de heróis favoritos:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSearchedHero(text)}
            placeholder='Digite o nome de um herói...'
            keyboardType='default'
          />
          <FlatList
            style={styles.flatListContainer}
            data={favoriteHerosAsArray.filter((hero: string) => hero.includes(searchedHero))}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            scrollEnabled={true}
            ListEmptyComponent={() => (
              <Text size='large' weight='bold'>
                {'Não há resultados que atendam os critérios da busca'}
              </Text>
            )}
          />
          <Button
            title='Compartilhe a sua lista de heróis!'
            buttonStyle={{ width: '100%' }}
            onPress={handleOnPress}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default FavoriteHeros
