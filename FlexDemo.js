import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexDemo extends Component {
  render() {
    /**
     * 父视图属性(容器属性)：
        flexDirection enum('row', 'column','row-reverse','column-reverse')
        flexWrap enum('wrap', 'nowrap')
        justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
        alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
     */
    /**
      flexDirection
        flexDirection enum('row', 'column','row-reverse','column-reverse')
        flexDirection属性定义了父视图中的子元素沿横轴或侧轴方片的排列方式。

        row: 从左向右依次排列
        row-reverse: 从右向左依次排列
        column(default): 默认的排列方式，从上向下排列
        column-reverse: 从下向上排列
     */
    /**
      flexWrap
        flexWrap enum('wrap', 'nowrap')
        flexWrap属性定义了子元素在父视图内是否允许多行排列，默认为nowrap。

        nowrap flex的元素只排列在一行上，可能导致溢出。
        wrap flex的元素在一行排列不下时，就进行多行排列。
     */
    /**
      justifyContent
        justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around') 
        justifyContent属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为flex-start。

        flex-start(default) 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
        flex-end 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
        center 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
        space-between 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
        space-around 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
     */
    /**
      alignItems
        alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
        alignItems属性以与justify-content相同的方式在侧轴方向上将当前行上的弹性元素对齐，默认为stretch。

        flex-start 元素向侧轴起点对齐。
        flex-end 元素向侧轴终点对齐。
        center 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
        stretch 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。
     */
    /**
     * 子视图属性：
        alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
        flex number
     */
    /** 
     alignSelf
      alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
      alignSelf属性以属性定义了flex容器内被选中项目的对齐方式。注意：alignSelf 属性可重写灵活容器的 alignItems 属性。

      auto(default) 元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。
      stretch	元素被拉伸以适应容器。
      center	元素位于容器的中心。
      flex-start	元素位于容器的开头。
      flex-end	元素位于容器的结尾。
    */
    /** 
     flex
      flex number
      flex 属性定义了一个可伸缩元素的能力，默认为0。
    */
    return (
      <View style={ {
        justifyContent:'center',
        // alignItems: 'stretch',
        flexDirection:'column',
        width:320,
        height: 420,
        flexWrap:'wrap',
        backgroundColor:"darkgray",
        marginTop:20,
        borderWidth: 1,
        borderColor: 'red', 
      }}>
        <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5,flex: 1,left: 5}}>
          <Text style={ {width:40,height:40,fontSize:16}}>1</Text>
        </View>
        <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5,padding:10,flex: 2}}>
          <Text style={ {fontSize:16}}>2</Text>
        </View>
        <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5,flex: 1,}}>
          <Text style={ {fontSize:16}}>3</Text>
        </View>
        <View style={ {
          width:40,
          height:40,
          backgroundColor:"darkcyan",
          margin:5,
          flex: 1,
          // alignSelf:'center'
        }}>
          <Text style={ {fontSize:16}}>4</Text>
        </View>
      </View>
    )
  }
}