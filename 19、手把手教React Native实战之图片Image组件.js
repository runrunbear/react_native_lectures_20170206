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
    View
    } from 'react-native';



var imgs=[
    'https://www.baidu.com/img/bd_logo1.png',
    'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png',
    'http://bbs.izengzhi.com/template/qing/image/izengzhi.png'
];

class DongFang extends Component {
  render() {

    return (

        <View style={[styles.flex,{marginTop:45}]}>


            <MyImage imgs={imgs}> </MyImage>

        </View>

    );
  }


}

class MyImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            imgs:this.props.imgs,
        };
    }


    //source={{uri:this.state.imgs[this.state.count]}}  网络图片

    //source={require('./xiaoman2016_24.png')}   本地图片
    render(){

        return(
            <View style={[styles.flex,{alignItems:'center'}]}>

                <View style={styles.image}>

                    <Image style={styles.img}
                        resizeMode="contain"
                           source={{uri:this.state.imgs[this.state.count]}}

                        />

                </View>


                <View style={styles.btns}>


                    <TouchableOpacity onPress={this.goPreview.bind(this)}><View style={styles.btn}><Text>上一张</Text></View></TouchableOpacity>

                    <TouchableOpacity onPress={this.goNext.bind(this)}><View style={styles.btn}><Text>下一张</Text></View></TouchableOpacity>

                </View>


            </View>
        );
    }


    goPreview(){
        var count=this.state.count;
        count--;
        if(count>=0){
            this.setState({
                count:count,
            });
        }
    }

    goNext(){
        var count=this.state.count;
        count++;
        if(count<this.state.imgs.length){
            this.setState({
                count:count,
            });
        }
    }


}



const styles = StyleSheet.create({

    btn:{
        width:60,
        height:30,
        borderColor:'#0089FF',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20,

    },

    btns:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
    },


    img:{
        height:150,
        width:200,
    },


    image:{
      borderWidth:1,
        width:300,
        height:200,
        borderRadius:5,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
    },



  flex:{
    flex:1,
  },




});

AppRegistry.registerComponent('DongFang', () => DongFang);
