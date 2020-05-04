import React, { Component } from 'react';
// import React,{Component} from 'react';
import { TextInput, StyleSheet,Alert, StatusBar, Button, Text, View, Vibration, YellowBox } from 'react-native';
// import { Header } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class FirstScreen extends Component {
  static navigationOptions = {
    title:'First Screen',
    headerStyle:{backgroundColor:'#aa000',},
    headerTintColor:'white'
  };
  
  constructor(props) {
    super(props);
    this.state = {
      title:'First Screen',
      message:'this is a  navigation sample'
    }
  }
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
           <Text style={styles.title}>{this.state.title}</Text>
           <Text style={styles.message}>{this.state.message}</Text>
           <View style={{padding:10}}>
              <Button title="Next Screen" onPress={this.doAction} />
           </View>
        </View>
      </View>
    );
  }
  doAction = () => {
    this.props.navigation.navigate('Next');
  }
}

class SecondScreen extends Component {
  static navigationOptions = {
    title:'Second Screen',
    headerStyle:{backgroundColor:'#00aa00',},
    headerTintColor:'white'
  };
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Screen 2',
      message:'this is a  navigation sample 2'
    }
  }
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
           <Text style={styles.title}>{this.state.title}</Text>
           <Text style={styles.message}>{this.state.message}</Text>
           <View style={{padding:10}}>
              <Button title="Go back " onPress={this.doAction1} />
           </View>
           <View style={{padding:10}}>
              <Button title="Next Screen" onPress={this.doAction2} />
           </View>
        </View>
      </View>
    );
  }
  doAction1 = () => {
    this.props.navigation.goBack();
  }
  doAction2 = () => {
    this.props.navigation.navigate('Last');
  }
}
class ThirdScreen extends Component {
  static navigationOptions = {
    title:'3 Screen',
    headerStyle:{backgroundColor:'#00aa00',},
    headerTintColor:'white'
  };
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Screen 3',
      message:'this is a  navigation sample 3'
    }
  }
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
           <Text style={styles.title}>{this.state.title}</Text>
           <Text style={styles.message}>{this.state.message}</Text>
           <View style={{padding:10}}>
              <Button title="Go back " onPress={this.doAction1} />
           </View>
        </View>
      </View>
    );
  }
  doAction1 = () => {
    this.props.navigation.popToTop();
  }
}

const MainNavigator =  createStackNavigator(
  {
    Home:{screen:FirstScreen},
    Next:{screen:SecondScreen},
    Last:{screen:ThirdScreen},
  },
  {
    initialRouteName:'Home',
  }
);

// const App = createAppContainer(MainNavigator);
const AppContainer = createAppContainer(MainNavigator);
// export default App;

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
// export default class App extends React.Component {
//   counter = 0;
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View>
//         <StatusBar barStyle="light" hidden={false} />
//         <Header
//           leftComponent={{
//             icon:'menu',color:'white',size:35,onPress:this.doActionLeft
//           }} 
//           centerComponent={{
//             text:"SampleApp",style:styles.header
//           }}
//           rightComponent={{
//             icon:'android',color:'white',size:35,onPress:this.doActionRight
//         }}
//           outerContrainerStyles={{height:100,backgroundColor:'#dd0000'}} 
//         />
//         <View style={styles.base}>
//           <Text style={styles.title}>Layout</Text>
//           <Text style={styles.message}>This is a sample message</Text>
//         </View>
//       </View>
//     );
//   }

//   doActionLeft = () =>{
//     Alert.alert('you tapped left icon');
//   }
//   doActionRight = () =>{
//     Alert.alert('you tapped right icon');
//   }
// }


const styles = StyleSheet.create({
  base: {padding: 0,flex:1,},
  body: {padding: 10,flex:1,backgroundColor:'white'},
  title: {
    padding:10,
    color:'red',
    textAlign:'center',
    fontSize:42,
    fontWeight:'bold'
  },
  message:{
    padding:10,
    color:'green',
    fontSize:24,
    lineHeight:50,
  },

});

