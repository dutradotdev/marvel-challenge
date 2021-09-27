import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: '#65C9FF',
    flex: 1,
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    color: 'white',
  },
  item: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: -5,
    right: -50,
    transform: [{ rotate: '-30deg' }],
  },
  footerSafeArea: { backgroundColor: '#65C9FF' },
})

export default styles
