import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 25,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: 100,
    minHeight: 80,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
