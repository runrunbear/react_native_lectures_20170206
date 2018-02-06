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
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    View
    } from 'react-native';


class DongFang1 extends Component {
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#ff0'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>我是抽屉!</Text>
        </View>
    );
    return (
        <DrawerLayoutAndroid
            drawerWidth={100}
            drawerPosition={DrawerLayoutAndroid.positions.Right}
            renderNavigationView={() => navigationView}
            >

          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>React Native World!</Text>
          </View>
        </DrawerLayoutAndroid>
    );
  }
}




const styles = StyleSheet.create({





  flex:{
    flex:1,
  },




});

AppRegistry.registerComponent('DongFang1', () => DongFang1);
