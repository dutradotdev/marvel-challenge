import React from 'react'
import { View } from 'react-native'
import { Button, Text } from '@marvel/components'

const Error = ({ refetch = () => {} }) => {
  return (
    <View>
      <Text weight='bold' size='large'>
        An error has occurred :(
      </Text>
      <Button onPress={refetch} title='Try again' />
    </View>
  )
}

export default Error
