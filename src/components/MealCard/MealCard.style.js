import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: deviceSize.height / 4,
    borderRadius: 15,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    backgroundColor: '#000000c0',
    textAlign: 'center',
  },
});
