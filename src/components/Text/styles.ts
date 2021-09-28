import { StyleSheet } from 'react-native'
import { sizes as textSizes } from '@marvel/styles'

const sizes = StyleSheet.create({
  small: {
    fontSize: textSizes.text.small,
  },
  medium: {
    fontSize: textSizes.text.medium,
  },
  large: {
    fontSize: textSizes.text.large,
  },
})

const weights = StyleSheet.create({
  normal: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
})

export { sizes, weights }
