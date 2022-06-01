import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';

export default class App extends React.Component{
  render(){
    return (<AppNavigator/>
      );
  } 
}