import React, { Component } from 'react';
import { Image, StyleSheet, Animated, Button, Text, View, TouchableOpacity, Alert } from 'react-native';
// import {SScreen} from './SecondScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Easing } from 'react-native-reanimated';

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
      animP: new Animated.Value(40)
    }
  };

  anim = () => {
    // Animated.loop(
    //   Animated.timing(
    //     this.state.animP,
    //     {
    //       toValue: 100,
    //       duration: 10000,
    //     }),
    //   {
    //     iteration: 2
    //   }
    // ).start();
    Animated.timing(
      this.state.animP,
      {
        toValue: 80,
        duration: 3000,
      }
    ).start();
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <Animated.Text style={{ fontSize: this.state.animP, textAlign: 'center' }}>{this.state.title}</Animated.Text>
          <View
            style={{ padding: 10 }}>
            <Button title="Next Screen" onPress={this.doAction} />
            <Button title="start" onPress={this.anim} />
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ flex: 1 }}>
            <Animated.View>
              <TouchableOpacity
                style={{ width: 70, height: 50, position: 'absolute', bottom: this.state.animP + '%' }}
                onPress={this.onPress}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: 'https://img.icons8.com/office/70/000000/pixar-lamp.png' }}
                />
              </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity
              onPress={this.onPress}
            >
              <Animated.Image
                style={{ width: 50, height: 50, bottom: this.state.animP + '%' }}
                source={{ uri: 'https://img.icons8.com/office/70/000000/pixar-lamp.png' }}
              />
            </TouchableOpacity>

            <Image source={{ uri: 'https://dic.nicovideo.jp/oekaki/381001.png' }} style={{ width: 70, height: 70, position: 'absolute', top: 20 + '%' }} />

          </View>

          {/* right side of  a screen */}
          <Animated.View style={{ flex: 1, top: this.state.animP + '%' }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
            />
            <Image source={{ uri: 'https://img.icons8.com/color/48/000000/super-mario.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom: this.state.animP + '%' }} />
            <Image source={{ uri: 'https://img.icons8.com/doodle/70/000000/iron-man.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom: '40%' }} />
            <Image source={{ uri: 'https://img.icons8.com/officel/70/000000/super-mario.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom: this.state.animP + '%' }} />
            <Image source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom: '80%' }} />
          </Animated.View>
          <Animated.Image source={{ uri: 'https://img.icons8.com/doodle/70/000000/iron-man.png' }} style={{ width: 70, height: 70, position: 'absolute', bottom: this.state.animP + '%' }} />
          <Animated.Image source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png' }} style={{ width: 70, height: this.state.animP, position: 'absolute', bottom: '90%' }} />
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
      message: 'this is a  navigation sample 2',
      animY: new Animated.Value(10),
      animSpin: new Animated.Value(0),
    }
  }

  startAnimation = () => {
    Animated.timing(this.state.animY, {
      toValue: 300,
      duration: 2000
    }).start();
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

          <View style={{ flex: 1, backgroundColor: 'darkblue' }}>
            <TouchableOpacity onPress={this.startAnimation}>
              <Animated.View style={{
                transform: [
                  {
                    translateY: this.state.animY
                  }
                ],
                height: 250,
                width: 200,
                margin: 5,
                borderRadius: 40,
                backgroundColor: "black",
              }} >
                <Image
                  source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png', width: 60, height: 60 }}
                />
                <Image
                  source={{ uri: 'https://img.icons8.com/office/70/000000/pixar-lamp.png' }}
                  style={{ width: 60, height: 60 }}
                />
                <Animated.Image
                  style={{ width: 60, height: 60, transform: [{ translateX: this.state.animY }] }}
                  source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png' }} />
              </Animated.View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={this.startAnimation}>
            <Animated.Image
              style={{ width: 60, height: 60, transform: [{ translateX: this.state.animY }] }}
              source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png' }} />
            <Animated.Image
              style={{ width: 60, height: 60, transform: [{ translateX: this.state.animY }] }}
              source={{ uri: 'https://img.icons8.com/office/70/000000/pixar-lamp.png' }} />
            <Image
              source={{ uri: 'https://img.icons8.com/office/70/000000/pixar-lamp.png' }}
              style={{ width: 60, height: 60 }}
            />
            <TouchableOpacity onPress={this.doAlert}>
              <Animated.Image
                style={{ width: 50, height: 50, transform: [{ translateX: this.state.animY }] }}
                source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  doAlert = () => Alert.alert('F＊＊＊＊n');
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

