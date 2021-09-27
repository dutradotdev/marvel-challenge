import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { darth } from '@marvel/assets'
import styles from './styles'

const CharacterDetail = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: 'MOCKADO'
    })
  }, [])

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.footerContainer}>
            <Text style={styles.title}>Character description:</Text>
            <Text style={styles.item}>Height: {'DADOS MOCKADOS'}</Text>
            <Text style={styles.item}>Mass: {'DADOS MOCKADOS'}</Text>
            <Text style={styles.item}>Birth Year: {'DADOS MOCKADOS'}</Text>
            <Text style={styles.item}>Gender: {'DADOS MOCKADOS'}</Text>
            <Text style={styles.item}>Hair color: {'DADOS MOCKADOS'}</Text>
            <Text style={styles.item}>Skin color: {'DADOS MOCKADOS'}</Text>
            <Image style={styles.image} source={darth} />
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.footerSafeArea}></SafeAreaView>
    </>
  )
}

export default CharacterDetail
