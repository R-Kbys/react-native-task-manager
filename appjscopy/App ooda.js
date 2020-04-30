import React, { Component } from 'react';
import { Modal, TextInput, Image, StyleSheet, Animated, Button, Text, View, TouchableOpacity, Alert, Easing } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { ModalInput } from './ModalInput';

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
      isInitialised: false,
      textGoal: '',
      textSituation: '',
      textAnarisis: '',
      textDecision: '',
      textAquired: '',
      textReflection: '',
      targetNumber: 1,
      taskNumber: 1,
      targetIsDone: false,
      modal: false,
      explanation:'ジオいおっj'
    }
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.main}>
          {/* // 一度決めたら変更不可にする */}
          <Modal
            visible={!this.state.isInitialised} // visibleには関数渡せる？　this.state.isInitialisedをtrueにしたい
            animationType="slide">>
            <Text>最終的に達成したい目標を決めましょう</Text>
            <TextInput placeholder="最終的目標" value={this.state.textGoal} />
          </Modal>
          <Text>最終的目標</Text>
          <Text>{this.state.textGoal}</Text>

          <View style={{ flex: 1 }}>
            <Text>現状の観察</Text>
            <Text>{this.state.textSituation}</Text>
            {/* ボタンを押すとモーダルが出てきてユーザに入力を促す・ModalInputかmodalを使用 */}
            {/* <Button title="短期目標を決める" onPress={} /> */}
            {/*  後々に実装したい=> ボタンを押すと，新しい入力部分が出てくる，任意の数を箇条書き入力できるようにする */}
          </View>

          <View style={{ flex: 1 }}>
            <Text>現状の観察からの分析・判断・方針</Text>
            <Text>{this.state.textAnarisis}</Text>
            {/* ボタンを押すとモーダルが出てきてユーザに入力を促す・ModalInputかmodalを使用 */}
            {/* <Button title="短期目標を決める" onPress={} /> */}
            {/*  後々に実装したい=> ボタンを押すと，新しい入力部分が出てくる，任意の数を箇条書き入力できるようにする */}
          </View>

          <View style={{ flex: 1 }}>
            <UserInputModal explanation={this.state.explanation} />
            <Text>意思決定</Text>
            <Text>{this.state.textDecision}</Text>
            {/* ボタンを押すとモーダルが出てきてユーザに入力を促す・ModalInputかmodalを使用 */}
            {/* <Button title="短期目標を決める" onPress={} /> */}
            {/*  後々に実装したい=> ボタンを押すと，新しい入力部分が出てくる，任意の数を箇条書き入力できるようにする */}
          </View>


          <Modal
            visible={this.state.modal}
            transparent={true}
            animationType="fade">
            <View style={styles.modalbase}>
              <View style={styles.modalpanel}>
                <Text style={styles.message}>{this.props.explanation}中期目標1をなすための短期のタスクを決めましょう</Text>
                <TextInput
                  placeholder="タスク1"
                  value={this.state.text}
                  onChangeText={this.doType}
                  style={styles.message} />
                <Button title="閉じる" onPress={this.modalSwitch} />
                <Button title="タスクの開始" onPress={this.nextPage} />
                {/* ボタンを押すと，新しい入力部分が出てくる，任意の数のタスクを入力できるようにする */}
              </View>
            </View>
          </Modal>

        </View>
        <Button title="Next Screen" onPress={this.nextPage} />
      </View>

    );
  }

  modalSwitch = () => this.setState({ modal: !this.state.modal })
  nextPage = () => this.props.navigation.navigate('Next');
  doType = text => this.setState({ text });
}
function UserInputModal(props) {
  <Modal
    visible={true}
    transparent={true}
    animationType="fade">
    <View style={styles.modalbase}>
      <View style={styles.modalpanel}>
        <Text style={styles.message}>{this.props.explanation}中期目標1をなすための短期のタスクを決めましょう</Text>
        <TextInput
          placeholder="タスク1"
          value={this.state.textDecision}
          onChangeText={this.doType}
          style={styles.message} />
        <Button title="閉じる" onPress={this.modalSwitch} />
        <Button title="タスクの開始" onPress={this.nextPage} />
        {/* ボタンを押すと，新しい入力部分が出てくる，任意の数のタスクを入力できるようにする */}
      </View>
    </View>
  </Modal>

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

