import React, { Component } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TextInputComponent } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { UserInputModal } from './UserInputModal';
import { TextContainer } from './TextContainer';
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
      text: '',
      targetIsDone: false,
      targetNumber: 1,
      taskNumber: 1,
      isVisibleGoalModal: false,
      isVisibleSituationModal: false,
      isVisibleDecisionModal: false,
      isVisibleAnarisisModal: false,
      isVisibleAquiredModal: false,
      isVisibleReflectionModal: false,
      isInitialised: false,
      textGoal: '',
      textSituation: '',
      textAnarisis: '',
      textDecision: '',
      textAquired: '',
      textReflection: '',

    }
  };


  render() {
    //   const openModalId = this.state.openModalId;
    //   const isVisible = (openModalId == id) ? false : true;
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
          </View>

          {/* <View style={{ flex: 1 }}>
            <Text>現状の観察からの分析・判断・方針</Text>
            <Text>{this.state.textAnarisis}</Text>
            <UserInputModal
              visible={this.state.isVisibleAnarisisModal}
              explanation='現状の観察からの分析を定しましょう！'
              setVisibleModal={this.setVisibleAnarisisModal}
              userValue={this.state.textAnarisis}
              onChangeText={this.typeAnarisis}
            />
          </View> */}
          <TextContainer
            concept='現状の観察からの分析・判断・方針'
            visible={this.state.isVisibleAnarisisModal}
            explanation='現状の観察からの分析を定しましょう！'
            setVisibleModal={this.setVisibleAnarisisModal}
            textInput={this.state.textAnarisis}
            onChangeText={this.typeAnarisis}
          />


          <View style={{ flex: 1 }}>
            <Text>意思決定</Text>
            <Text>{this.state.textDecision}</Text>
            <UserInputModal
              visible={this.state.isVisibleDecisionModal}
              explanation='分析に基づいて今やるべきことを決定しましょう！'
              setVisibleModal={this.setVisibleDecisionModal}
              userValue={this.state.textDecision}
              onChangeText={this.typeDecision}
            />
          </View>

          <Button title="る" onPress={this.setVisibleAnarisisModal} />
          <Button title="2e" onPress={this.setVisibleDecisionModal} />
        </View>

        <Button title="Next Screen" onPress={this.nextPage} />

      </View>
    );
  }

  setGoalModal = () => this.setState({ isVisibleGoalModal: !this.state.isVisibleGoalModal })

  setVisiSituationModal = () => this.setState({ isVisibleSituationModal: !this.state.isVisibleSituationModal })

  setVisibleAnarisisModal = () => this.setState({ isVisibleAnarisisModal: !this.state.isVisibleAnarisisModal })

  setVisibleDecisionModal = () => this.setState({ isVisibleDecisionModal: !this.state.isVisibleDecisionModal })

  setVisibleReflectionModal = () => this.setState({ isVisibleReflectionModal: !this.state.isVisibleReflectionModal })

  setVisibleModal = () => {
    setModalIsOpen = this.state.whichModalIsOpen;
    setModalIsOpen[id] = !setModalIsOpen[id];
    this.setState({ whichModalIsOpen: setModalIsOpen })
  }

  NextModal = () => this.setState({ modal: !this.state.modal, secondModal: !this.state.secondModal })
  nextPage = () => this.props.navigation.navigate('Next');
  typeGoal = textGoal => this.setState({ textGoal });
  typeSituation = textSituation => this.setState({ textSituation });
  typeAnarisis = textAnarisis => this.setState({ textAnarisis });
  typeDecision = textDecision => this.setState({ textDecision });
  typeReflection = textReflection => this.setState({ textReflection });
  // typeAnarisis = (text) => {
  //   this.setState(() => { return { text } })
  // };

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
            multiline={true} />
          <TextInput
            placeholder="タスク1"
            value={this.state.text}
            onChangeText={this.doType}
            style={styles.message}
            multiline={true} />
          <TextInput
            placeholder="タスク1"
            value={this.state.text}
            onChangeText={this.doType}
            style={styles.message}
            multiline={true} />
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

export const styles = StyleSheet.create({
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

