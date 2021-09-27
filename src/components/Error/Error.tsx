import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@marvel/components'
import styles from './styles'

const Error = ({ refetch = () => {} }) => {
  return (
    <View>
      <Text style={styles.title}>An error has occurred :(</Text>
      <Button onPress={refetch} title='Try again' />
    </View>
  )
}

export default Error
