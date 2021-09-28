import { colors, sizes } from '@marvel/styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
  },
  footerContainer: {
    width: '100%',
    backgroundColor: colors.blue.primary,
    flex: 2,
    padding: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    color: colors.white,
  },
  item: {
    fontWeight: 'bold',
    fontSize: sizes.text.large,
    marginBottom: 10,
    color: colors.white,
  },
  footerSafeArea: { backgroundColor: colors.blue.primary },
  heroImage: { width: 200, height: 200, borderRadius: 25, marginVertical: 20 },
  favoriteHeroButton: { position: 'absolute', top: 10, right: 20 },
})

export default styles
