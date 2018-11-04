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

import HelloComponent from './HelloComponent'
import LifeCycleComponent from './LifeCycleComponent'
import PropsTest from './PropsTest'
import StateTest from './StateTest'
import RefTest from './RefTest'
import EIComponent, {name, age, sum} from './EIComponent'

export default class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      remove: false,
      result: '',
      size: 0
    }
  }
  
  render() {
    var params = {name: 'bai', age: 18, sex: 'man'}
    var {name, sex} = params;
    var view = this.state.remove ? null : <LifeCycleComponent/>;
    var text = this.state.remove ? "让他复活" : "干掉他";
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={() => {
          var result = sum(2, 3);
          this.setState({
            result: result
          })
        }}>
          名字：{name}, 年龄：{age}, 2+3={this.state.result}
        </Text>
        <Text
          style={{fontSize: 20}}
          onPress={() => {
            this.setState({
              remove: !this.state.remove
            })
          }}
        >{text}</Text>
        {view}
       
        <PropsTest 
          {...params}
        />
        <Text
          style = {{fontSize: 20}}
          onPress = {() => {
            var size = this.reftest.getSize()
            // var size = this.refs.reftest.getSize()
            // var size = this.refs['reftest'].getSize();
            this.setState({
              size: size
            })
          }}
        >获取气球大小： {this.state.size}</Text>
        <RefTest 
          ref={reftest => this.reftest = reftest}
          // ref="reftest"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
