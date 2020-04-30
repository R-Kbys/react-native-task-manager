import React from 'react';
// import React,{Component} from 'react';
import { TextInput, StyleSheet,Alert, Button, Text, View } from 'react-native';
// import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
// import Constants from 'expo-constants';
// import WelcomeScreen from "./screens/WelcomeScreen.1";
// import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.title ='welcome';
    this.message = 'Hello EXPO React Native';
    this.state = {message: 'click me ..',text:''};
  }

  render() {
    return (
      <View style={styles.base}> 
        <Text style={styles.title}> Hello</Text>
        <Text style={styles.subtitle}> 
          Welcome expo.
          {this.title}
        </Text>
        <Button title="click" onPress={this.doAction} />
        <Text style={styles.message}>　This is a sample message.  </Text>
        <Text style={styles.message}> 
          {this.state.message} 
          {this.state.text}
          {/* <View style={styles.small} /> */}
          </Text>
        {/* 入力された値を取り出すときは，TextInput のonChangeTextイベントを利用する．これは値が入力されたときイベント発火する．入力された値valueをtextステートとして管理 すると同時に入力操作に伴いイベント発火して，textステートを更新する． */}
        <TextInput 
        ref={component => this._textInput = component}
        style={styles.input}
        placeholder="write here"
        value={this.state.text}
        onChangeText={this.doType}
        />
        <Hello name="chicken" />
      </View>
    );

  }

  doAction = () =>{
    // Alert.alert('you clicked');
    this.setState({message:'count' + ++this.counter});
    this._textInput.setNativeProps({text:''}) // component のプロパティの変更
  }

  doType = (text) => this.setState({text});

}



class Hello extends React.Component {
  constructor(props){
    // props.name = 'hoge from Hello';
    super(props);
  }
  render() {
    return (
      <Text>
        こんにちは，{this.props.name}
      </Text>
    );
  }
}


const styles = StyleSheet.create({
  base: {
    padding: 30
  },
  title: {
    padding:10,
    color:'red',
    textAlign:'center',
    fontSize:60,
    fontWeight:'bold'
  },
  subtitle:{
    padding:10,
    color:'blue',
    fontSize:20,
    fontWeight:'bold'
  },
  message:{
    padding:10,
    color:'green',
    fontSize:26,
    lineHeight:50
  },
  small:{
    width:100,
    height:100,
    borderStyle:'solid',
    borderWidth:6,
    backgroundColor:'#00aa00',
  }
});

