import { colors, sizes } from '@marvel/styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    backgroundColor: colors.blue.secondary,
    borderRadius: 10,
    marginBottom: 20,
    minWidth: 200,
  },
  avatarContainer: {
    minHeight: 200,
  },
  logo: { width: 200, height: 200 },
  descriptionContainer: {
    flex: 1,
    width: '100%',
    height: 40,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: sizes.text.medium,
  },
  withMargin: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: sizes.text.small,
  },
  paginationContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  paginationButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  buttonRight: { marginRight: 20 },
})

export default styles
