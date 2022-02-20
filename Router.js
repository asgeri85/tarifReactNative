import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Meals from './src/pages/Meals';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            title: 'Meals',
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
