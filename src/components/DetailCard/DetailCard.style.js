import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'contain',
  },
  body_continer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  btn_container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'red',
    margin: 20,
  },
  btn_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
