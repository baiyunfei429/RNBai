import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'

/**
 * 方式一：es6 方式
 * 推荐这种
 */
export default class HelloComponent extends Component {
  render() {
    return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello,{this.props.name}</Text>
  }
}

/**
 * 方式二：es5 方式
 */
// var HelloComponent = React.createClass({
//   render() {
//     return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello,es5</Text>
//   } 
// })
// module.exports = HelloComponent;

/**
 * 方式三：函数式
 * 无状态，不能使用this
 */
// function HelloComponent(props) {
//   // this.state不能调用，没有完整的生命周期的方法
//   // 可以通过props.key去获取父组件传递过来的属性
//   return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello,函数式.{props.name}</Text>
// }
// module.exports = HelloComponent;