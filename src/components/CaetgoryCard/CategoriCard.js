import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriCard.style';

const CategoriCard = ({category, onSelected}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelected}>
      <View style={styles.container}>
        <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriCard;
