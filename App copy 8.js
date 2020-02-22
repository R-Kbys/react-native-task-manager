import React, { Component } from 'react';
import { Modal, TextInput, ScrollView, StyleSheet, FlatList, Button, Text, View, TouchableHighlight, SafeAreaView } from 'react-native';
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
      text: '',
      targetNumber: 1,
      taskNumber: 1,
      targetIsDone: false,
      modal: true,
      secondModal:false,
      explanation: 'ジオいおっj',
      textDecision: '',

    }
  };

  render() {
    return (
      <View style={styles.base}>

        <View style={styles.main}>
          <View style={{ flex: 1 }}>
            <Text>最終的目標：</Text>
            {/* ModalInputかmodalを使用 */}
            <TextInput placeholder="最終的目標" />
          </View>

          <View style={{ flex: 1 }}>
            <Text>現状の観察</Text>
            {/* ボタンを押すとモーダルが出てきてユーザに入力を促す・ModalInputかmodalを使用 */}
            {/* <Button title="短期目標を決める" onPress={} /> */}
            {/*  後々に実装したい=> ボタンを押すと，新しい入力部分が出てくる，任意の数を箇条書き入力できるようにする */}
          </View>

          <View style={{ flex: 1 }}>
            <Text>現状の観察からからの分析・判断・方針</Text>
            {/* ボタンを押すとモーダルが出てきてユーザに入力を促す・ModalInputかmodalを使用 */}
            {/* <Button title="短期目標を決める" onPress={} /> */}
            {/*  後々に実装したい=> ボタンを押すと，新しい入力部分が出てくる，任意の数を箇条書き入力できるようにする */}
          </View>
          <View>
            {/* <ModalInput
                placeholder="今実行すべきもっとも優先順位の高いタスク"
                stage="Decide 意思決定" /> */}
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
                    style={styles.message} />
                  <Button title="閉じる" onPress={this.NextModal} />
                  <Button title="タスクの開始" onPress={this.nextPage} />
                  {/* ボタンを押すと，新しい入力部分が出てくる，任意の数のタスクを入力できるようにする */}
                </View>
              </View>
            </Modal>
            <Modal
              visible={this.state.secondModal}
              transparent={true}
              animationType="fade">
              <View style={styles.modalbase}>
                <View style={styles.modalpanel}>
                  <Text style={styles.message}>中期目標1をなすための短期のタスクを決めましょう</Text>
                  <Text style={styles.message}>タス{this.state.taskNumber}:</Text>
                  <TextInput
                    placeholder="タスク2"
                    value={this.state.text}
                    onChangeText={this.doType}
                    style={styles.message} />
                  <Button title="閉じる" onPress={this.modalSwitch} />
                  <Button title="タスクの開始" onPress={this.nextPage} />
                  {/* ボタンを押すと，新しい入力部分が出てくる，任意の数のタスクを入力できるようにする */}
                </View>
              </View>
            </Modal>
            <Button title="短期目標を決める" onPress={() => this.setState({ modal: !this.state.modal})} />
          </View>
          <Button title="Next Screen" onPress={this.nextPage} />
          <UserInputModal explanation={this.state.explanation} />
        </View>
      </View>
    );
  }

  modalSwitch = () => this.setState({ secondModal: !this.state.secondModal ,})
  NextModal = () => this.setState({ modal: !this.state.modal, secondModal: !this.state.secondModal })
  nextPage = () => this.props.navigation.navigate('Next');
  doType = text => this.setState({ text });
}

function UserInputModal(props) {
  return(
  <Modal
    visible={true}
    transparent={false}
    animationType="fade">
    <View style={styles.modalbase}>
      <View style={styles.modalpanel}>
        <Text style={styles.message}>{props.explanation}中期目標1をなすための短期のタスクを決めましょう</Text>
        <TextInput
          placeholder="タスク1"
          value=''
          style={styles.message} />
        {/* <Button title="閉じる" onPress={this.modalSwitch} />
        <Button title="タスクの開始" onPress={this.nextPage} /> */}
        {/* ボタンを押すと，新しい入力部分が出てくる，任意の数のタスクを入力できるようにする */}
      </View>
    </View>
  </Modal>
  );
}

const DATA = [{
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second Item',
}, {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
}]

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
      text: ''
    };

  }

  render() {
    return (
      <View style={styles.base}>
          <View style={{ padding: 10 }}>
            <Button title="Go back " onPress={this.doAction1} />
            <Button title="Next Screen" onPress={this.doAction2} />
          </View>
          <View style={{ flex: 1, backgroundColor: 'darkblue' }}>
            <Text style={styles.title}>{}</Text>
          </View>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
          <ScrollView>
            <TextInput
              placeholder="タスク1"
              value={this.state.text}
              onChangeText={this.doType}
              style={styles.message} 
              multiline={true}/>
            <TextInput
              placeholder="タスク1"
              value={this.state.text}
              onChangeText={this.doType}
              style={styles.message} 
              multiline={true}/>
            <TextInput
              placeholder="タスク1"
              value={this.state.text}
              onChangeText={this.doType}
              style={styles.message} 
              multiline={true}/>
              <TextInput
              placeholder="タスク1"
              value={this.state.text}
              onChangeText={this.doType}
              style={styles.message}
              multiline={true} />
          </ScrollView>
      </View>
    );
  }

  doAction1 = () => {
    this.props.navigation.goBack();
  }
  doAction2 = () => {
    this.props.navigation.navigate('Last');
  }
  doType = text => this.setState({ text });

}

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
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

