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
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
    } from 'react-native';


var onePT = 1 / PixelRatio.get();

class DongFang extends Component {
  render() {

    return (

        <View style={styles.flex}>

          <TouchableHighlight onPress={this.show.bind(this,'欢迎学习React Native技术')}
              underlayColor='#E1F6FF'
              >
          <Text style={styles.item}>欢迎学习React Native技术-TouchableHighlight</Text>

          </TouchableHighlight>

          <TouchableOpacity onPress={this.show.bind(this,'作者东方耀Q：3096239789')}>
          <Text style={styles.item}>作者东方耀Q：3096239789-TouchableOpacity</Text>

          </TouchableOpacity>


          <TouchableWithoutFeedback onPress={this.show.bind(this,'作者东方耀Q：3096239789')}>
            <Text style={styles.item}>作者东方耀Q：3096239789-TouchableWithoutFeedback</Text>


          </TouchableWithoutFeedback>

        </View>

    );
  }

  show(txt){
    alert(txt);
  }
}



const styles = StyleSheet.create({

  flex:{
    flex:1,
    marginTop:25,
  },

 item:{
   fontSize:18,
   color:'#434343',
   marginLeft:5,
   marginTop:10,
 },

});

AppRegistry.registerComponent('DongFang', () => DongFang);
