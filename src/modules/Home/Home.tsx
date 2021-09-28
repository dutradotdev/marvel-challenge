import React from 'react'
import { SafeAreaView, View, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'
//@ts-ignore
import Image from 'react-native-image-progress'
//@ts-ignore
import ProgressBar from 'react-native-progress/Bar'

import { Button, Error, Text, FavoriteButton } from '@marvel/components'
import { useFavoriteHero, useGetPeopleWithPagination } from '@marvel/hooks'

import { setSelectedHero } from '@marvel/redux/CharacterDetail'

import styles from './styles'
import { toHttps } from '@marvel/utils'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@marvel/router/router'
import { colors } from '@marvel/styles'
import { HeroItemProps, HeroProps } from '@marvel/common'

type CharacterDetailScreenProp = StackNavigationProp<RootStackParamList, 'CharacterDetail'>

const Home = () => {
  const navigation = useNavigation<CharacterDetailScreenProp>()
  const dispatch = useDispatch()
  const [handleFavoriteHeros, isFavoriteHero] = useFavoriteHero()
  const [
    { people: peopleData, loading: peopleLoading, error: peopleError },
    getPeople,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
    currentPage,
  ] = useGetPeopleWithPagination()

  const handleCardOnPress = ({ id, name, description, thumbnail: { path, extension } }: any) => {
    dispatch(
      setSelectedHero({
        id,
        name,
        description,
        path,
        extension,
      })
    )
    navigation.navigate('CharacterDetail')
  }

  const ListItem = ({ item }: HeroItemProps) => {
    return (
      <TouchableOpacity
        key={item?.name}
        onPress={() => handleCardOnPress(item)}
        style={styles.cardContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={{ uri: toHttps(`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`) }}
            indicator={ProgressBar}
          />
        </View>
        <View style={styles.descriptionContainer}>
          {item?.name && (
            <Text weight='bold' size='large' color={colors.black.primary}>
              Name: {item?.name}
            </Text>
          )}
        </View>
        <View style={styles.favoriteButton}>
          <FavoriteButton
            onPress={() => handleFavoriteHeros(item)}
            isFavorite={Boolean(isFavoriteHero(item?.id))}
          />
        </View>
      </TouchableOpacity>
    )
  }

  const PaginationButtons = () => (
    <>
      {!peopleError && (
        <View style={styles.paginationContainer}>
          <View style={styles.paginationButtonContainer}>
            <Button
              disabled={!hasPreviousPage}
              onPress={previousPage}
              title='Anterior'
              buttonStyle={styles.buttonRight}
            />
            <Button disabled={!hasNextPage} onPress={nextPage} title='Próximo' />
          </View>
          <Text customStyle={styles.withMargin} weight='bold'>
            Página: {Number(currentPage) + 1}
          </Text>
        </View>
      )}
    </>
  )

  const renderItem = ({ item }: HeroItemProps) => <ListItem item={item} />
  const keyExtractor = ({ name }: { name: string }) => name

  const CharacterList = () => (
    <FlatList
      style={styles.flatListContainer}
      data={peopleData}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      ListFooterComponent={PaginationButtons}
      renderItem={renderItem}
      scrollEnabled={true}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      {peopleLoading && (
        <ActivityIndicator animating={true} color={colors.yellow.secondary} size='large' />
      )}
      {peopleError && <Error refetch={getPeople} />}
      {!peopleLoading && !peopleError && <CharacterList />}
    </SafeAreaView>
  )
}

export default Home
