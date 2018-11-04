
import React, {Component, PropTypes} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

export default class RefTest extends Component {
  state = {
    size: 80
  }
  constructor(props) {
    super(props)
    // this.state = {
    //   size: 80,
    // }
  }
  
  getSize() {
    return this.state.size;
  }

  render() {
    return (
      <View>
        <Text 
          style={{fontSize: 20, backgroundColor: 'blue'}}
          onPress={() => {
            this.setState({
              size: this.state.size + 10
            })
          }}
        >我吹啊，吹啊</Text>
        <Text 
          style={{fontSize: 20, backgroundColor: 'green'}}
          onPress={() => {
            this.setState({
              size: this.state.size - 10
            })
          }}
        >变小</Text>
        <Image
          style={{width: this.state.size, height: this.state.size}}
          source={require('./assests/images/qiqiu.png')}
        ></Image>
      </View>
    )
  }
}