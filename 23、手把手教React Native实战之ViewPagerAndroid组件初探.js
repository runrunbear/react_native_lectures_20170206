/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ViewPagerAndroid,
    View
    } from 'react-native';


class DongFang1 extends Component {
  render() {

    return (

       <ViewPagerAndroid
           initialPage={0}

           style={[styles.flex,styles.viewpager]}

           >



           <View style={styles.center}><Text style={[{fontSize:12},{color:'red'}]}>第一个页面</Text></View>
           <View style={styles.center}><Text style={{fontSize:20}}>第二个页面</Text></View>
           <View style={styles.center}><Text style={{fontSize:30}}>第三个页面</Text></View>


       </ViewPagerAndroid>


    );
  }
}







const styles = StyleSheet.create({


  flex:{
      flexDirection:'column',
  },

    viewpager:{
        height:200,
    },

    center:{
        justifyContent:'center',
        alignItems:'center',

    },




});

AppRegistry.registerComponent('DongFang1', () => DongFang1);
