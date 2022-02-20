import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({meal}) => {
  const url = meal.strYoutube;
  const setButton = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: meal.strMealThumb}} style={styles.image} />
      <View style={styles.body_continer}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text>{meal.strInstructions}</Text>
      </View>
      {url ? (
        <TouchableOpacity style={styles.btn_container} onPress={setButton}>
          <Text style={styles.btn_text}>Watch on Youtube</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default DetailCard;
