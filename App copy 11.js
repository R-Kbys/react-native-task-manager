import React, { Component } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TextInputComponent } from 'react-native';
import 'react-native-gesture-handler';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { TextContainer } from './TextContainer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen"
        screenOptions={{ gestureEnabled: true }}
      >
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          initialParams={{ textReflection: null }}
          options={{
            title: 'First Screen',
            headerStyle: { backgroundColor: '#0a93aa', },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
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


// class TabScreen extends Component {

//   constructor(props) {
//     super(props);
//   };

//   render(){
//     return ( 
//       <Tab.Navigator>
//         <Tab.Screen name='tab1' component={FirstScreen}/>
//         <Tab.Screen name='tab2' component={ThirdScreen}/>
//       </Tab.Navigator>
//     );
// }}

class FirstScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetIsDone: false,
      targetNumber: 1,
      taskNumber: 1,
    }
  };

  render() {
    // const { itemId } = this.props.route.params;
    //   const openModalId = this.state.openModalId;
    //   const isVisible = (openModalId == id) ? false : true;
    return (

      <View style={styles.base}>
        <ScrollView style={styles.main}>
          {
            this.props.route.params.textReflection && (
              <View>
                <Text>前回の課題</Text>
                <Text> {this.props.route.params.textReflection} </Text>
              </View>)
          }

          <TextContainer
            concept='最終目標'
            explanation='目標を定めましょう！'
          />

          <TextContainer
            concept='現状の観察'
            explanation='目標と現在の状況の比較をして情報を整理しましょう！'
          />

          <TextContainer
            concept='現状の観察からの分析・判断・方針'
            explanation='現状の観察からの分析を定しましょう！'
          />

          <TextContainer
            concept='意思決定'
            explanation='分析に基づいて今やるべきことを決定しましょう！'
          />
          {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
          <TextInput
            multiline={true}
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            placeholder='hoge'
          />
        </ScrollView>

        <Button title="Next Screen" onPress={this.nextPage} />
        <Button title="Last Screen" onPress={this.LastPage} />

      </View>
    );
  }

  setVisibleModal = () => {
    setModalIsOpen = this.state.whichModalIsOpen;
    setModalIsOpen[id] = !setModalIsOpen[id];
    this.setState({ whichModalIsOpen: setModalIsOpen })
  }

  NextModal = () => this.setState({ modal: !this.state.modal, secondModal: !this.state.secondModal })
  nextPage = () => this.props.navigation.navigate('SecondScreen', { textDecision: this.state.text });
  LastPage = () => this.props.navigation.navigate('ThirdScreen');
  // typeAnarisis = (text) => {
  //   this.setState(() => { return { text } })
  // };
}

class SecondScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
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
          <Text style={styles.title}>{this.props.route.params.textDecision}</Text>
        </View>
        <ScrollView>
          <TextContainer
            concept='理解したこと．習得したこと'
            explanation='今回の学習で成長したことを書きましょう'
          />
          {/* <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView> */}
        </ScrollView>
      </View>
    );
  }

  doAction1 = () => {
    this.props.navigation.navigate('FirstScreen', {
    });
  }
  doAction2 = () => {
    this.props.navigation.navigate('ThirdScreen');
  }
  doType = text => this.setState({ text });

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
      <View style={styles.base}>
        <View style={styles.main}>

          <TextContainer
            concept='理解したこと．習得したこと'
            explanation='今回の学習で成長したことを書きましょう'
          />

          <TextContainer
            concept='課題'
            explanation='今回の学習で見えた課題やできなかったことを書きましょう'
          />

          <TextInput
            multiline={true}
            value={this.state.text}
            onChangeText={(textReflection) => this.setState({ textReflection })}
            placeholder='hoge'
          />

          <Button title="Go back " onPress={this.doAction1} />
          <Button title="generate random number " onPress={this.generateRandom} />

        </View>
      </View>

    );
  }

  doAction1 = () => {
    this.props.navigation.navigate('FirstScreen', {
      textReflection: this.state.textReflection,
    })


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

