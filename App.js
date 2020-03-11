import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { resolveUri } from 'expo-asset/build/AssetSources';


export class StorageExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '0000'
    }
  }
  nextPage = () => this.props.navigation.navigate('Example');
  onChangeText = (textValue) => this.setState({ textValue })

  storeData = async (name) => {

    try {
      await AsyncStorage.setItem('name', name);
    } catch (error) {
      console.log(error);
    }

    Alert.alert(name + ': stored');
  }

  getData = async () => {

    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        Alert.alert('We have ' + value);
      } else {
        Alert.alert('We have no data');
      }
    } catch (error) {
      console.log(error);
    }
  }

  showText = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const textValue = this.state.textValue;
    const text = this.showText();
    return (
      <View style={styles.container}>
        <Button
          title='Next'
          onPress={this.nextPage}
        />
        <Button
          title='保存'
          onPress={() => this.storeData(textValue)}
        />
        <Button
          title='Alert 取得'
          onPress={this.getData}
        />
        <Text>{textValue}</Text>
        <Text>{typeof text} </Text>
        {/* <Text>{JSON.stringify(text)} </Text> */}
        <TextInput
          placeholder="Textarea"
          value={textValue}
          onChangeText={this.onChangeText}
        />
      </View>
    );
  }
}

function Show(props) {
  const text = props.text;
  return <Text>{text}</Text>;
}

export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '初期値'
    }
  }

  onChangeText = (text) => this.setState({ text })
  getData = async () => {

    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        Alert.alert('We have ' + value);
      } else {
        Alert.alert('We have no data');
      }
    } catch (error) {
      console.log(error);
    }

  }

  render() {
    const text = this.state.text;
    return (
      <View style={styles.container}>
        
        <Button
          title='取得'
          onPress={() => this.getData()}
        />
        <Text>{text}</Text>
        <TextInput
          placeholder="Textarea"
          value={text}
          onChangeText={this.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="StorageExample">
        <RootStack.Screen
          name="StorageExample"
          component={StorageExample}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Example"
          component={Example}
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

