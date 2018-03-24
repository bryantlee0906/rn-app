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

const HomePage = StackNavigator({
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  },
  GoodsPage: {
    screen: GoodsPage,
  },


}, {
    // 首页先设置成注册页
    initialRouteName: 'Register',
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)  
      headerStyle: { elevation: 0, shadowOpacity: 0, height: 0, backgroundColor: "#2196f3" },
      headerTitleStyle: { color: '#fff', fontSize: 16 }, //alignSelf:'center'  文字居中  
      headerBackTitleStyle: { color: '#fff', fontSize: 12 },
      // headerTintColor:{},  
      //gesturesEnabled: true,//是否支持滑动返回收拾，iOS默认支持，安卓默认关闭  
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)  
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏  
    onTransitionStart: (Start) => { console.log('导航栏切换开始'); },  // 回调  
    onTransitionEnd: () => { console.log('导航栏切换结束'); }  // 回调  
});

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
      <HomePage></HomePage>
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
