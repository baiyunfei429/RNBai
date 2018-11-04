import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class LifeCycleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('--constructor--')
  }

  componentWillMount() {
    console.log('--componentWillMount--')
  }

  componentDidMount() {
    console.log('--componentDidMount--')
  }

  componentWillReceiveProps(nextProps) {
    console.log('--componentWillReceiveProps--')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('--shouldComponentUpdate--')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('--componentWillUpdate--')
  }

  componentDidUpdate(preProps, preState) {
    console.log('--componentDidUpdate--')
  }

  componentWillUnmount() {
    console.log('--componentWillUnmount--')
  }

  render() {
    console.log('--render--')
    return <View>
      <Text 
        style={{fontSize: 20, backgroundColor: 'red'}}
        onPress={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}
      >Hello,打我</Text>
      <Text style={{fontSize: 20}}>被打了{this.state.count}次</Text>
    </View>
  }
}