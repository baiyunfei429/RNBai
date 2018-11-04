import React, {Component, PropTypes} from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class PropsTest extends Component {
  static defaultProps = {
    name: 'baiyunfei',
    age: 16
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 20, backgroundColor: 'red'}}>姓名,{this.props.name}</Text>
        <Text style={{fontSize: 20, backgroundColor: 'red'}}>年龄,{this.props.age}</Text>
        <Text style={{fontSize: 20, backgroundColor: 'red'}}>性别,{this.props.sex}</Text>
      </View>
    )
  }
}