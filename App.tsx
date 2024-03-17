import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/Home';
import DataVisualisation from './component/DataVisualisation';
import DataState from './component/context/DataState';

const Stack = createStackNavigator();

const App = () => {


  return (
    <DataState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DataVisualisation" component={DataVisualisation} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataState>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default App;
