import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '90%',
    height: '90%',
    borderWidth: 1,
    borderColor: '#fc035e',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    fontSize: 44,
    marginTop: -25,
    marginLeft: -75,
    fontWeight: 'bold',
    color: '#fc035e',
  },
  pa20: { padding: 20 },
  likeContainer: {
    position: 'absolute',
    transform: [{ rotate: '30deg' }],
    right: 50,
    top: -60,
  },
  nopeContainer: {
    position: 'absolute',
    transform: [{ rotate: '-30deg' }],
    left: -50,
  },
});
