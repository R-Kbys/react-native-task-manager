import React, { Component } from 'react';
// import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View,} from 'react-native';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Container, Header, Content, Text, Button, Form } from 'native-base';
import 'react-native-gesture-handler';
import { TextContainer } from './TextContainer';
import { TimerContainer } from './TimerContainer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{ gestureEnabled: true }}
      >
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          initialParams={{ textDecision: null }}
          options={{
            title: 'First Screen',
            headerStyle: { backgroundColor: '#0a93aa', },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          initialParams={{ textReflection: null }}
          options={{
            title: '2 Screen',
            headerStyle: { backgroundColor: '#0a93aa', },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            title: '3 Screen',
            headerStyle: { backgroundColor: '#0a93aa', },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

class FirstScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetIsDone: false,
    }
  };

  render() {
    // const { itemId } = this.props.route.params;
    //   const openModalId = this.state.openModalId;
    //   const isVisible = (openModalId == id) ? false : true;
    return (
      <Container>
        <Content>
          <Text>{this.props.route.params.textDecision}</Text>
        </Content>

        <Content>
          <Button block onPress={this.nextPage}>
            <Text style={styles.text}>目標を設定する</Text>
          </Button>
          <TimerContainer/>

        </Content>
      </Container>

      // <View style={styles.base}>
      //   <View style={{ padding: 10 }}>
      //     <Button title="Go back " onPress={this.doAction1} />
      //     <Button title="Next Screen" onPress={this.doAction2} />
      //   </View>
      //   <View style={{ flex: 1, backgroundColor: 'darkblue' }}>
      //     <Text style={styles.title}>{this.props.route.params.}</Text>
      //   </View>
      //   <ScrollView>
      //     <TextContainer
      //       concept='理解したこと．習得したこと'
      //       explanation='今回の学習で成長したことを書きましょう'
      //     />
      //     {/* <SafeAreaView style={styles.container}>
      //     <FlatList
      //       data={DATA}
      //       renderItem={({ item }) => <Item title={item.title} />}
      //       keyExtractor={item => item.id}
      //     />
      //   </SafeAreaView> */}
      //   </ScrollView>
      // </View>
    );
  }

  nextPage = () => {
    this.props.navigation.navigate('SecondScreen');
  }
  doAction2 = () => {
    this.props.navigation.navigate('ThirdScreen');
  }
  doType = text => this.setState({ text });
  handleChange = date => { this.setState({ date }) };

}

class SecondScreen extends Component {

  constructor(props) {
    super(props);
    this.setInput = React.createRef();
    this.state = {
      textDecision: '',
    };
  }

  render() {


    return (
      <Container style={styles.base}>
        {/* <Content> で囲むと．． */}
        {this.props.route.params.textReflection && (
          <Content>
            <Text>前回の課題</Text>
            <Text>{this.props.route.params.textReflection}</Text>
          </Content>
        )}

        <TextContainer
          concept='最終目標'
          explanation='目標を定めましょう！'
        />


        <TextContainer
          concept='現状の観察'
          explanation='目標を定めましょう！'
        />


        <TextContainer
          concept='現状の観察からの分析・判断・方針'
          explanation='目標を定めましょう！'
        />


        <TextContainer
          concept='意思決定'
          explanation='目標を定めましょう！'
          ref={this.setInput}
        />

        <Content contentContainerStyle={styles.buttoArea}>
          <Button block onPress={this.nextPage}>
            <Text style={styles.text}>始める</Text>
          </Button>
        </Content>

      </Container>
    );
  }

  nextPage = () => {
    this.props.navigation.navigate('FirstScreen', {
      textDecision: this.setInput.current.refTextValue()
    });
  }

}

class ThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textReflection: ''
    }
  }

  render() {

    return (
      <Container style={styles.base}>
        <Content style={styles.main}>

          <TextContainer
            concept='理解したこと．習得したこと'
            explanation='今回の学習で成長したことを書きましょう'
          />

          <TextContainer
            concept='課題'
            explanation='今回の学習で見えた課題やできなかったことを書きましょう'
          />

        </Content>

        <Content contentContainerStyle={styles.buttoArea}>
          <Button block onPress={this.nextPage}>
            <Text style={styles.text}>終了</Text>
          </Button>
        </Content>

      </Container>

      // <View style={styles.base}>
      //   <View style={styles.main}>
      //     {/* <TextInput
      //       multiline={true}
      //       value={this.state.text}
      //       onChangeText={(textReflection) => this.setState({ textReflection })}
      //       placeholder='hoge'
      //     /> */}
      //     <Button title="Go back " onPress={this.doAction1} />
      //     <Button title="generate random number " onPress={this.generateRandom} />

      //   </View>
      // </View>

    );
  }

  nextPage = () => {
    this.props.navigation.navigate('SecondScreen', {
      textReflection: this.state.textReflection,
    })


  }

}


export const styles = StyleSheet.create({
  base: { padding: 0, flex: 1, },
  body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
  main: { padding: 10, flex: 8, backgroundColor: 'white', },
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
  },
  buttoArea: {
    padding: 10,
    margin: 10,
    flex: 1,
  }

})

