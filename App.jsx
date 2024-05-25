import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';

// import LoginScreen from '.src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="login">
        <AppStack.Screen name="login" component={LoginScreen} />
        <AppStack.Screen name="registration" component={RegistrationScreen} />
        <AppStack.Screen name="home" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;