import React, { Component } from 'react';
import { Modal, TextInput, Image, StyleSheet, Animated, Button, Text, View, TouchableOpacity, Alert, Easing } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
      animP: new Animated.Value(0),
      text: '',
      targetNumber: 1,
      taskNumber: 1,
      targetIsDone: false,
      modal: false,
    }
  };

  animP = () => {
    Animated.loop(
      Animated.timing(
        this.state.animP,
        {
          toValue: 100,
          easing: Easing.linear,
          duration: 1500,
        }),
      {
        iterations: 2
      }
    ).start();
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <View
            style={{ padding: 10 }}>
            <Button title="Next Screen" onPress={this.nextPage} />
          </View>
        </View>

        <View style={styles.main}>
          <View style={{ flex: 1 }}>
            <Text>長期の目標：</Text>
            <TextInput placeholder="最終的な目標" />
          </View>

          <View style={{ flex: 1 }}>
            <Text>中期の目標を決めます．</Text>
            {/* ボタンを押すと，新しい入力部分が出てくる，任意の数の中期目標を入力できるようにする */}
            <Text>中期目標{this.state.targetNumber}:</Text>
            <TextInput
              ref={component => this._targetInput = component}
              placeholder="最終目標を達成するために必要な段階1"
              value={this.state.text}
              onChangeText={this.doType} />
            {/* ボタンを押すとモーダルが出てきて中期目標に対する短期タスクを決める・ */}
            {/* <Button title="短期目標を決める" onPress={} /> */}
          </View>
          <View>
            <Modal
              visible={this.state.modal}
              transparent={true}
              animationType="fade">
              <View style={styles.modalbase}>
                <View style={styles.modalpanel}>
                  <Text style={styles.message}>中期目標1をなすための短期のタスクを決めましょう</Text>
                  <Text style={styles.message}>タスク{this.state.taskNumber}:</Text>
                  <TextInput
                    placeholder="タスク1"
                    value={this.state.text}
                    onChangeText={this.doType} 
                    style={styles.message}/>
                  <Button title="閉じる" onPress={this.modalSwitch} />
                  <Button title="タスクの開始" onPress={this.nextPage} />
                  {/* ボタンを押すと，新しい入力部分が出てくる，任意の数のタスクを入力できるようにする */}
                </View>
              </View>
            </Modal>
            <Button title="短期目標を決める" onPress={this.modalSwitch} />
          </View>
          <Button title="Next Screen" onPress={this.nextPage} />
        </View>
      </View>
    );
  }

  modalSwitch = () => this.setState({ modal: !this.state.modal })
  nextPage = () => this.props.navigation.navigate('Next');
  doType = text => this.setState({ text });
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
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <View style={{ padding: 10 }}>
            <Button title="Go back " onPress={this.doAction1} />
            <Button title="Next Screen" onPress={this.doAction2} />
          </View>
          <View style={{ flex: 1, backgroundColor: 'darkblue' }}>
            <Text style={styles.title}>{}</Text>
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
  body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
  main: { padding: 10, flex: 2, backgroundColor: 'white', },
  title: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalbase: {
    backgroundColor: '#00000099',
    justifyContent: 'center',
    fontSize: 32,
    flex: 1
  },
  modalpanel: {
    padding: 10,
    margin: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  message: {
    padding: 10,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    // height: 40,
  },

  image: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: '80%',
  }

});

