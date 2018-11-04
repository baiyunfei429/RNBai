import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'

// 方式一
// export var name = 'baiyunfei';
// export var age = 27;

// 方式二
var name = 'baiyunfei';
var age = 27;
export {name, age}


export default class EIComponent extends Component {
  render() {
    return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello</Text>
  }
}

export function sum(a, b) {
  return a + b;
}

// var EIComponent = React.createClass({
//   render() {
//     return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello,es5</Text>
//   } 
// })
// module.exports = EIComponent;
