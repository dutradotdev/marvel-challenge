import React, { useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'

import { Button, Error } from '@marvel/components'
import { useGetPeopleWithPagination } from '@marvel/hooks'

import { setSelectedHero } from '@marvel/redux/CharacterDetail'

import styles from './styles'
import { toHttps } from '@marvel/utils'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@marvel/router/router'

type ItemProps = {
  name?: string,
  description?: string,
  thumbnail?: {
    path?: string,
    extension?: string
  }
}

type CharacterDetailScreenProp = StackNavigationProp<RootStackParamList, 'CharacterDetail'>;

const Home = () => {
  const navigation = useNavigation<CharacterDetailScreenProp>()
  const dispatch = useDispatch()
  const [
    { people: peopleData, loading: peopleLoading, error: peopleError },
    getPeople,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
    currentPage,
  ] = useGetPeopleWithPagination()

  const handleOnPress = (item: ItemProps) => {

    const { name, description, thumbnail } = item
    dispatch(setSelectedHero({
      name,
      description,
      path: thumbnail?.path,
      extension: thumbnail?.extension
    }))
    navigation.navigate('CharacterDetail')
  }

  const ListItem = ({ item }: ItemProps) => {
    return (
      <TouchableOpacity
      key={item?.name}
      onPress={() => handleOnPress(item)}
      style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.logo} resizeMode='contain' source={{ uri: toHttps(`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`)}} />
      </View>
      <View style={styles.descriptionContainer}>
        {item?.name && <Text style={styles.title}>Name: {item?.name}</Text>}
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
              title='Previous'
              buttonStyle={styles.buttonRight}
            />
            <Button disabled={!hasNextPage} onPress={nextPage} title='Next' />
          </View>
          <Text style={[styles.title, styles.withMargin]}>Página: {Number(currentPage) + 1}</Text>
        </View>
      )}
    </>
  )

  const renderItem = ({ item }) => <ListItem item={item} />
  const keyExtractor = (item: ItemProps) => item?.name

  const CharacterList = () => (
    <FlatList
      style={styles.flatListContainer}
      data={peopleData}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      ListFooterComponent={PaginationButtons}
      renderItem={renderItem}
      scrollEnabled
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      {(peopleLoading) && (
        <ActivityIndicator animating color='#AD7D37' size='large' />
      )}
      {(peopleError) && <Error refetch={getPeople} />}
      {!peopleLoading && !peopleError && (
        <CharacterList />
      )}
    </SafeAreaView>
  )
}

export default Home
