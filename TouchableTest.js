import React, {Component} from 'react'
import {
  StyleSheet, 
  View, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  Alert
} from 'react-native'

export default class TouchableTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({
              count: this.state.count + 1
            })
          }}
          //onLongPress的触发，需要关闭debugger-ui,否则出不来弹窗
          //如果没有设置onLongPress，长按时，只触发onPress
          //delayLongPress,可设置长按的延时时间
          onLongPress={() => {
            Alert.alert('提示', '确认删除？', [
              {text: '取消', onPress: () => {}, style: 'cancel'},
              {text: '确定', onPress: () => {},},
            ])
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              我是TouchableWithoutFeedback, 点击我
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>您点击了：{this.state.count}次</Text>

        <TouchableWithoutFeedback
          disabled={this.state.waiting}
          onPress={()=> {
            this.setState({text:'正在登录...',waiting:true})
            //setTimeout的触发，需要关闭debugger-ui,否则出不来
            setTimeout(()=>{
                this.setState({text:'网络不流畅',waiting:false})
            }, 2000);
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              登录
            </Text>     
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{this.state.text}</Text>

        <TouchableWithoutFeedback
          onPressIn={()=> {
            this.setState({touchTimeText:'触摸开始',startTime:new Date().getTime()})
          }}
          onPressOut={()=>{
            this.setState({touchTimeText:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              触摸我
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{this.state.touchTimeText}</Text>

        <TouchableOpacity
          activeOpacity = {0.2}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
            TouchableOpacity
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.hlButton}
          activeOpacity={0.7}
          underlayColor='green'
          onHideUnderlay={()=>{
              this.setState({hightLightText:'衬底被隐藏'})
          }}
          onShowUnderlay={()=>{
              this.setState({hightLightText:'衬底显示'})
          }}
          onPress={()=>{

          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
                TouchableHighlight
            </Text>     
          </View>
        </TouchableHighlight>
        <Text style={styles.text}>{this.state.hightLightText}</Text>

        <TouchableNativeFeedback
          onPress={()=>{
              this.setState({count: this.state.count + 1})
          }}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableNativeFeedback</Text>     
          </View> 
        </TouchableNativeFeedback> 
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
  },
  hlButton: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  buttonText: {
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
  cancel: {
  },
  sure: {
  },
})