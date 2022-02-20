import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/DetailCard';
import Loading from '../../components/Loading/Loading';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

const Detail = ({route}) => {
  const {mealName} = route.params;
  const {data, loading, error} = useFetch(`${URL}=${mealName}`);

  const renderDetail = ({item}) => <DetailCard meal={item} />;

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
};

export default Detail;
