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

import { logo } from '@marvel/assets'
import { Button, Error } from '@marvel/components'
import { useGetPeopleWithPagination } from '@marvel/hooks'

import styles from './styles'

type ItemProps = {
  item: {
    name: string,
    thumbnail: {
      path: string,
      extension: string
    }
  }
}

const Home = () => {
  const navigation = useNavigation()
  const [
    { people: peopleData, loading: peopleLoading, error: peopleError },
    getPeople,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
    currentPage,
  ] = useGetPeopleWithPagination()

  const handleOnPress = (item) => {
    navigation.navigate('CharacterDetail', {
      item,
    })
  }

  const ListItem = ({ item }: ItemProps) => {
    return (
      <TouchableOpacity
      key={item?.name}
      onPress={() => handleOnPress(item)}
      style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.logo} resizeMode='contain' source={{ uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`.replace('http', 'https')}} />
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
          <Text style={[styles.title, styles.withMargin]}>Page: {currentPage}</Text>
        </View>
      )}
    </>
  )

  const renderItem = ({ item }: ItemProps) => <ListItem item={item} />
  const keyExtractor = ({ item }: ItemProps) => item?.name

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
