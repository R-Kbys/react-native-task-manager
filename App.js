import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Example } from './Example';
import { StorageExample } from './StorageExample';

const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="StorageExample">
        <RootStack.Screen
          name="StorageExample"
          component={StorageExample}
          initialParams={{ stage: null, }}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Example"
          component={Example}
          initialParams={{ stage: null, }}
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

export default App;

