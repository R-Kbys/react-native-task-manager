import React, { Component } from 'react';
import { Image, StyleSheet, Animated, Button, Text, View, TouchableOpacity, } from 'react-native';
// import {SScreen} from './SecondScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// const { Surface, Group } = ART;
class FirstScreen extends Component {
  static navigationOptions = {
    title: 'First Screen',
    headerStyle: { backgroundColor: '#0a93aa', },
    headerTintColor: 'white'
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'First Screen',
      message: 'this is a  navigation sample',
      animP: new Animated.Value(0)
    }
  }

  anim = () => {
    // Animated.loop(
    //   Animated.timeing(
    //     this.state.animP,
    //     {
    //       toValue: 100,
    //       duration: 10000,
    //     }),
    //   {
    //     iteration: 2
    //   }
    // ).start();
      Animated.timeing(
        this.state.animP,
        {
          toValue: 100,
          duration: 10000,
        }
      ).start();
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <View
            style={{ padding: 10 }}>
            <Button title="Next Screen" onPress={this.doAction} />
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ width: 70, height: 50, position: 'absolute', bottom:this.state.animP +'%' }}
              onPress={this.onPress}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: 'https://img.icons8.com/office/70/000000/pixar-lamp.png' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ width: 70, height: 50, position: 'absolute', bottom:this.state.animP +10 +'%' }}
              onPress={this.onPress}
            >
              <Image source={{ uri: 'https://img.icons8.com/color/48/000000/cookie-monster.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom:this.state.animP + 10+'%' }} />
            </TouchableOpacity>

            <Image source={{ uri: 'https://dic.nicovideo.jp/oekaki/381001.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom:this.state.animP + 20 + '%' }} />

          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
            />
            <Image source={{ uri: 'https://img.icons8.com/color/48/000000/super-mario.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom: '30%' }} />
            <Image source={{ uri: 'https://img.icons8.com/doodle/70/000000/iron-man.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom:'40%' }} />
            <Image source={{ uri: 'https://img.icons8.com/officel/70/000000/super-mario.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom:this.state.animP + '%' }} />
            <Image source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom: '80%' }} />
          </View>
        </View>
      </View>
    );
  }
  doAction = () => {
    this.props.navigation.navigate('Next');
  }
  onPress = () => this.props.navigation.navigate('Next');

}

class SecondScreen extends Component {
  static navigationOptions = {
    title: 'Second Screen',
    headerStyle: { backgroundColor: '#00aa00', },
    headerTintColor: 'white'
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'Screen 2',
      message: 'this is a  navigation sample 2'
    }
  }
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <View style={{ padding: 10 }}>
            <Button title="Go back " onPress={this.doAction1} />
          </View>
          <View style={{ padding: 10 }}>
            <Button title="Next Screen" onPress={this.doAction2} />
          </View>
          <View style={{ backgroundColor: 'black' }}></View>
          <Text>HELLO</Text>
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
    title: '3 Screen',
    headerStyle: { backgroundColor: '#00aa00', },
    headerTintColor: 'white'
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'Screen 3',
      message: 'this is a  navigation sample 3'
    }
  }
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <View style={{ padding: 10 }}>
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

const MainNavigator = createStackNavigator(
  {
    Home: { screen: FirstScreen },
    Next: { screen: SecondScreen },
    Last: { screen: ThirdScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(MainNavigator);
// export default App;

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  base: { padding: 0, flex: 1, },
  body: { padding: 10, flex: 1, backgroundColor: '#0a55aa', },
  main: { padding: 10, flex: 2, backgroundColor: 'black', flexDirection: 'row' },
  title: {
    padding: 10,
    color: 'red',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold'
  },
  message: {
    padding: 10,
    color: 'green',
    fontSize: 24,
    lineHeight: 15,
    textAlign: 'center',
    height: 40,
  },
  
  image: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: '80%',
  }

});

