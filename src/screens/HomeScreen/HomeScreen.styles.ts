import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  wrapperItem: {
    fontSize: 20,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
  },
});
