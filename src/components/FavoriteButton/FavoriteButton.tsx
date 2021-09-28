import React from 'react'
import { Button } from '@marvel/components'

import styles from './styles'

type FavoriteButtonProps = {
  onPress?: () => void
  isFavorite?: boolean
}

const FavoriteButton = ({ onPress = () => {}, isFavorite = false }: FavoriteButtonProps) => {
  return (
    <Button
      onPress={onPress}
      title={isFavorite ? '💘' : '💔'}
      buttonStyle={styles.favoriteButton}
    />
  )
}

export default FavoriteButton
