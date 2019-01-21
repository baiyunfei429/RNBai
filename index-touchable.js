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
  View
} from 'react-native';

import Student from './Student'
import BaiStudent from './BaiStudent'
import FlexDemo from './FlexDemo'
import TouchableTest from './TouchableTest'

export default class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.stu = new Student('baiyunfei429', 'man', 27)
    this.bai = new BaiStudent()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableTest/>
        <Text
          style={styles.welcome}
        >{this.stu.getDescription()}</Text>
        <Text
          style={styles.welcome}
        >{this.bai.getDescription()}</Text>
        <FlexDemo/>
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

AppRegistry.registerComponent('MyApp', () => MyApp);
