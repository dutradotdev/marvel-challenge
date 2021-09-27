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
    backgroundColor: '#A8C2C2',
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
    backgroundColor: '#FBE91A',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  withMargin: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
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
