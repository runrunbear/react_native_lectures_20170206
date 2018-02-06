/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    Picker,
    View
    } from 'react-native';



class DongFang1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      language:null
    };
  }


  //箭头函数 ES6

  render() {

    return (

        <View style={[styles.flex,{marginTop:45}]}>

          <Text>Picker组件</Text>

          <Picker
              selectedValue={this.state.language}
              onValueChange={lang => this.setState({language: lang})}
              mode="dialog"
              style={{color:'#f00'}}
              >

            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="C语言" value="c" />
            <Picker.Item label="PHP开发" value="php" />
          </Picker>

          <Text>{this.state.language}</Text>




        </View>

    );
  }


}




const styles = StyleSheet.create({





  flex:{
    flex:1,
  },




});

AppRegistry.registerComponent('DongFang1', () => DongFang1);
