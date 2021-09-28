import { colors } from '@marvel/styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textContainer: {
    width: 100,
    height: 40,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow.primary,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  disabled: {
    backgroundColor: colors.gray.secondary,
    color: colors.white,
  },
})

export default styles
