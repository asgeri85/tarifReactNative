import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, mealSelected}) => {
  return (
    <TouchableWithoutFeedback onPress={mealSelected}>
      <View style={styles.container}>
        <ImageBackground source={{uri: meal.strMealThumb}} style={styles.image}>
          <Text style={styles.title}>{meal.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
