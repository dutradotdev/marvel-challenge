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
    flex: 2,
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
  footerSafeArea: { backgroundColor: '#65C9FF' },
  heroImage: { width: 200, height: 200, borderRadius: 25, marginVertical: 20 },
})

export default styles
