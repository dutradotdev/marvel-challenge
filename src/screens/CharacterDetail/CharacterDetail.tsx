import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import styles from './styles'
import { FavoriteButton } from '@marvel/components'
import { useFavoriteHero } from '@marvel/hooks'
import { RootState } from '@marvel/redux/store'

const CharacterDetail = () => {
  const navigation = useNavigation()
  const { selectedHero } = useSelector((state: RootState) => state.charactedDetail)
  const [handleFavoriteHeros, isFavoriteHero] = useFavoriteHero()

  useEffect(() => {
    navigation.setOptions({
      title: selectedHero?.name,
    })
  }, [])

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.container}>
          <Image
            style={styles.heroImage}
            resizeMode='contain'
            source={{ uri: selectedHero?.url }}
          />
          <View style={styles.footerContainer}>
            <Text style={styles.item}>Nome: {selectedHero?.name}</Text>
            <Text style={styles.item}>
              Descrição: {selectedHero?.description || 'Herói sem descrição'}
            </Text>
            <View style={styles.favoriteHeroButton}>
              <FavoriteButton
                onPress={() => handleFavoriteHeros(selectedHero)}
                isFavorite={Boolean(isFavoriteHero(selectedHero?.id))}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.footerSafeArea} />
    </>
  )
}

export default CharacterDetail
