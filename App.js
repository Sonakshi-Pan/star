import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import{createAppContainer} from "react-navigation"
import{createStackNavigator} from "react-navigation-stack";
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen/'
export default function App(){
  return<AppContainer/>
}

const appStackNavigator = createStackNavigator(
{
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Detail:{
    screen:DetailScreen,
    
  }
    },
    {
      intialRouteName:"Home"
    }

);
const AppContainer=createAppContainer(appStackNavigator);
  
