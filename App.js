import React from 'react';
// import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View,} from 'react-native';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SecondScreen } from './SecondScreen';
import { FirstScreen } from './FirstScreen';
import { ModalScreen } from './ModalScreen';
import { ThirdScreen } from './ThirdScreen';

// const Stack = createStackNavigator();
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
            headerBackTitle: '戻る',
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
        initialParams={{ textDecision: null ,textReflection: null, StartHour: null, startMin: null, stage: 0 }}
        options={{
          title: 'ホーム',
          headerStyle: { backgroundColor: '#2089dc', },
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

