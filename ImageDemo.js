/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import FlexDemo from './FlexDemo'

export default class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
       <Image 
        stylel={styles.image} 
        // 如果是require()引用的JS项目目录下的img文件，不需要设置图片大小，设置了也没有用。
        // rn可以动态获取图片资源以及其大小，自动赋值
        source={require('./assests/images/list.png')
      }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 20,
    height: 20,
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
