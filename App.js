import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SecondScreen } from './SecondScreen';
import { FirstScreen } from './FirstScreen';
import { ModalScreen } from './ModalScreen';
import { ThirdScreen } from './ThirdScreen';

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
         headerShown: false ,
        // headerStyle: {
        //   backgroundColor: '#2c82c9', 
        // },
        // headerTintColor: 'white',
        // headerBackTitle: '戻る',
        // gestureEnabled: true
      }}
    >
      <MainStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        initialParams={{ textDecision: null, StartHour: null, startMin: null, stage: 0 }}
      />
      <MainStack.Screen
        name="SecondScreen"
        component={SecondScreen}
        initialParams={{ textReflection: null }}
        options={{
          title: '短期目標・タスク設定',
        }}
      />

      <MainStack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{
          title: '振り返り',
          headerBackTitle: "戻る",
        }}
      />
    </MainStack.Navigator>
  );
}

export default App;
