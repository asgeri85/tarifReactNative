import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoriCard from '../../components/CaetgoryCard';
import styles from './Home.style';
import Loading from '../../components/Loading/Loading';

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Home = ({navigation}) => {
  const {data, loading, error} = useFetch(URL);

  const itemClick = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };

  const renderCategory = ({item}) => (
    <CategoriCard
      category={item}
      onSelected={() => itemClick(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Home;
