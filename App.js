/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Register from './pages/Register';
import Login from './pages/Login';
import GoodsPage from './pages/GoodsPage';
import { StackNavigator } from 'react-navigation';

// const GoodsPage = StackNavigator({
//   GoodsPage: {
//     screen: GoodsPage,
//   },
// });

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

  /// 以下页面粘贴到App类中即可显示。
  {/* 
  <Login></Login>
  <Register></Register>
  <GoodsPage></GoodsPage> 
  

  */}

// type Props = {};
export default class App extends Component {
  render() {
    return (
      <Register></Register>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
