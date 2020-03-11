import React, { Component } from 'react';
// import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View,} from 'react-native';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { TextContainer } from './TextContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SecondScreen } from './SecondScreen';
import { FirstScreen } from './FirstScreen';
import { ModalScreen } from './ModalScreen';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen 
        name="MyModal" 
        component={ModalScreen} 
          options={{
            title: '時間設定',
            headerBackTitle:'戻る',
            headerStyle: { backgroundColor: 'white', },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName="FirstScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2089dc',
        },
        headerTintColor: '#fff',
        headerBackTitle: '戻る',
      
        gestureEnabled: true
      }}
    >
      <MainStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        initialParams={{ textDecision: null ,StartHour: null ,startMin:null}}
        options={{
          title: 'ホーム',
          headerStyle: { backgroundColor: '#2089dc',},
          headerTintColor: 'white'
        }}
      />
      <MainStack.Screen
        name="SecondScreen"
        component={SecondScreen}
        initialParams={{ textReflection: null }}
        options={{
          title: '短期目標・タスク設定',
          // headerStyle: { backgroundColor: 'white', },
          headerTintColor: 'white'
        }}
      />

      <MainStack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{
          title: '振り返り',
          // headerStyle: { backgroundColor: '#2089dc', },
          // headerTintColor: 'white'
        }}
      />
    </MainStack.Navigator>
  );
}
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="FirstScreen"
//         screenOptions={{ gestureEnabled: true }}
//       >
//         <Stack.Screen
//           name="FirstScreen"
//           component={FirstScreen}
//           initialParams={{ textDecision: null }}
//           options={{
//             title: 'First Screen',
//             headerStyle: { backgroundColor: '#2089dc', },
//             headerTintColor: 'white'
//           }}
//         />
//         <Stack.Screen
//           name="SecondScreen"
//           component={SecondScreen}
//           initialParams={{ textReflection: null }}
//           options={{
//             title: '2 Screen',
//             headerStyle: { backgroundColor: '#2089dc', },
//             headerTintColor: 'white'
//           }}
//         />

//         <Stack.Screen
//           name="ThirdScreen"
//           component={ThirdScreen}
//           options={{
//             title: '3 Screen',
//             headerStyle: { backgroundColor: '#2089dc', },
//             headerTintColor: 'white'
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default App;

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
          {/* <Button onPress={this.nextPage}>
            <Text style={styles.text}>終了</Text>
          </Button> */}
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

