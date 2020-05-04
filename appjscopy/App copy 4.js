import React, { Component } from 'react';
// import React,{Component} from 'react';
import { TextInput, StyleSheet,Alert, StatusBar, Button, Text, View, Vibration, YellowBox } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light" hidden={false} />
        <Header
          leftComponent={{
            icon:'menu',color:'white',size:35,onPress:this.doActionLeft
          }} 
          centerComponent={{
            text:"SampleApp",style:styles.header
          }}
          rightComponent={{
            icon:'android',color:'white',size:35,onPress:this.doActionRight
        }}
          outerContrainerStyles={{height:100,backgroundColor:'#dd0000'}} 
        />
        <View style={styles.base}>
          <Text style={styles.title}>Layout</Text>
          <Text style={styles.message}>This is a sample message</Text>
        </View>
      </View>
    );
  }

  doActionLeft = () =>{
    Alert.alert('you tapped left icon');
  }
  doActionRight = () =>{
    Alert.alert('you tapped right icon');
  }
}


const styles = StyleSheet.create({
  base: {
    padding: 20
  },
  header:{
    color:'white',
    fontSize:28,
    fontWeight:'bold'
  },
  title: {
    padding:10,
    color:'red',
    textAlign:'center',
    fontSize:48,
    fontWeight:'bold'
  },
  message:{
    padding:10,
    color:'green',
    fontSize:24,
    lineHeight:50,
    fontSize:24,
  },

});

