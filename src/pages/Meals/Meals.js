import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import styles from './Meals.style';
import Loading from '../../components/Loading/Loading';

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;

  const {data, loading, error} = useFetch(`${URL}=${strCategory}`);

  const itemSelected = mealName => {
    navigation.navigate('DetailPage', {mealName});
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} mealSelected={() => itemSelected(item.strMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default Meals;
