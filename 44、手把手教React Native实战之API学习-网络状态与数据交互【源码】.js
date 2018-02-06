/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NetInfo,
  ToastAndroid,
  View
} from 'react-native';

class DfyProject02 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: null,
      connectionInfo: null,
    };

  }

  componentDidMount() {
    //网络是否连接的监听
    NetInfo.isConnected.addEventListener(
      'isConnected',
      this._handleConnectivityChange
    );

    //网络状态变化的监听
    NetInfo.addEventListener(
      'statusChange',
      this._handleNetStatusChange
    );


    //检测网络是否连接
    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({ isConnected: isConnected }); }
    );
    //检测网络连接状态
    NetInfo.fetch().done(
      (connectionInfo) => { this.setState({ connectionInfo }); }
    );
  }



  componentWillUnmount() {
    //卸载两个监听
    NetInfo.isConnected.removeEventListener(
      'isConnected',
      this._handleConnectivityChange
    );
    NetInfo.removeEventListener(
      'statusChange',
      this._handleNetStatusChange
    );
  }


  _handleConnectivityChange = (isConnected) => {
    ToastAndroid.show((isConnected ? 'online' : 'offline'), ToastAndroid.SHORT);
  }

  _handleNetStatusChange = (status) => {

    ToastAndroid.show('当然网络状态：' + status, ToastAndroid.SHORT);

  }


  render() {
    return (
      <View >
        <Text style={styles.welcome}>
          当前的网络状态
        </Text>
        <Text style={styles.welcome}>
          {this.state.isConnected ? '网络在线' : '离线'}
        </Text>
        <Text style={styles.welcome}>
          当前网络连接类型
        </Text>
        <Text style={styles.welcome}>
          {this.state.connectionInfo}
        </Text>
        <Text style={styles.welcome}>
          当前网络是否计费(仅Android平台)
        </Text>
        <Text style={styles.welcome}>
          {NetInfo.isConnectionExpensive === true ? '需要计费' : '不要计费'}
        </Text>

        <Text onPress={this.goPostNet2.bind(this) } style={styles.btn}>fetch-POST访问网络1/2</Text>
        <Text onPress={this.goGetNet.bind(this) } style={[styles.btn,{backgroundColor: 'blue'}]}>fetch-GET访问网络</Text>
      </View>
    );
  }

  goPostNet1() {
    ToastAndroid.show('fetch-POST访问网络-方法1', ToastAndroid.SHORT);
    let url = 'http://www.5iqunzi.com/wenjiaosuo/admin/privilege.php';
    let map = { method: 'POST' };

    let privateHeaders = {
      'Private-header1': 'value1',
      'Private-header2': 'value2',
      'Content-Type': 'text/plain',
      'User-Agent': 'testAgent',
    };

    // map.headers = privateHeaders;
    //post的数据 post才需要body
    map.body = JSON.stringify(
      {
        'username': '13667377378',
        'password': 'dfy889',
        'act': 'signin',
      }
    );


    //如果你的服务器无法识别上面POST的数据格式，那么可以尝试传统的form格式
    //  map.body = 'username=13667377378&password=dfy889&act=signin';
    map.follow = 10;//设置请求允许的最大重定向次数，0为不允许重定向
    map.timeout = 8000;//设置超时时间，0为没有超时时间，这个值在重定向时会被重置
    map.size = 0;//设置请求回应中的消息体最大允许长度，0为没有限制

    console.log('fetch-POST访问网络-方法1');

    fetch(url, map).then(
      (response) => {
        console.log('fetch-第一个then里面');
        return response.text();

      }
      // (response) => response.text()
    ).then(
      (responseText) => {
        //这里不能用console否则看不到 这是一个巨大的坑 用alert一点问题没有
        alert('服务器返回：' + responseText);
        // console.log('服务器返回：' + responseText);
      }
      ).catch(
      (err) => {
        console.log('错误：' + err);
      }
      );

  }


  postRequest(url, data, callback) {
    let map = {
      method: 'POST',
      headers: {
        'Private-header1': 'value1',
        'Private-header2': 'value2',
        'Content-Type': 'text/plain',
        'User-Agent': 'testAgent',
      },
      body: JSON.stringify(data),
      follow: 20,
      timeout: 8000,
      size: 0,
    };

    fetch(url, map).then((response) => response.text()).then(
      (responseText) => {
        callback(responseText);
      }
    ).catch(
      (err) => {
        callback(err);
      }
      );

  }

  goPostNet2() {
    ToastAndroid.show('fetch-POST访问网络-方法2', ToastAndroid.SHORT);
    let url = 'http://www.5iqunzi.com/wenjiaosuo/admin/privilege.php';
    let data = {
      'username': '13667377378',
      'password': 'dfy889',
      'act': 'signin',
    };
    console.log('fetch-POST访问网络-方法2');
    this.postRequest(url, data, (result) => {
      alert('服务器返回结果：' + result);
      // console.log('服务器返回结果：' + result);
    });

  }

  goGetNet() {
    ToastAndroid.show('fetch-GET访问网络', ToastAndroid.SHORT);
    console.log('GET访问网络');
    let url = 'http://www.reactnative.vip/';
    fetch(url).then(
      (response) => {
        console.log('第一个then里面');
        return response.text()
      }
    ).then(
      (responseText) => {
        //这里不能用console否则看不到 这是一个巨大的坑 用alert一点问题没有
        alert('服务器返回：' + responseText);
        // console.log('服务器返回：' + responseText);
      }
      ).catch(
      (err) => {
        console.log('err' + err);
      }
      );
  }



}



const styles = StyleSheet.create({



  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {

    backgroundColor: '#FF7200',
    height: 33,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 24,
    marginTop: 40,
    fontSize: 18,


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('DfyProject02', () => DfyProject02);

