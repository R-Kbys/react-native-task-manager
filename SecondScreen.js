import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Button } from 'react-native-elements';
import { TextContainer } from './TextContainer';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.setInput = React.createRef();
  }

  storeData = async (name) => {

    try {
      await AsyncStorage.setItem('name', name);
    } catch (error) {
      console.log(error);
    }

    Alert.alert(name + ': stored');
  }

  render() {
    return (
      <Container style={styles.base}>
        <Content contentContainerStyle={styles.main}>
          {
            this.props.route.params.textReflection && (
              <View style={{ flex: 1 }}>
                <Text>前回の課題</Text>
                <Text>{this.props.route.params.textReflection}</Text>
              </View>
            )
          }

          {/* <TextContainer concept='最終目標' explanation='目標を定めましょう！' /> */}

          <TextContainer textTitle='observation' concept='現状の観察' explanation='目標を定めましょう！' style={styles.container}/>

          <TextContainer textTitle='analysis' concept='現状の観察からの分析・判断・方針' explanation='目標を定めましょう！'style={styles.container} />

          <TextContainer textTitle='decision' concept='意思決定' explanation='目標を定めましょう！' ref={this.setInput} style={styles.container}/>

        </Content>

        <View style={styles.buttoArea}>
          {/* <Button title='' onPress={this.nextPage}/ > */}
          {/* <Text style={styles.text}></Text> */}
          <Button
            icon={
              <Icon
                name="check"
                size={15}
                color="white"
              />
            }
            iconleft
            title="始める"
            type="solid"
            onPress={this.nextPage}
          />
        </View>
      </Container>
    );
  }
  nextPage = () => {
    this.props.navigation.navigate('FirstScreen', {
      textDecision: this.setInput.current.refTextValue(),
      stage:1
    });
  };
}


export const styles = StyleSheet.create({
  base: { padding: 6, flex: 1, justifyContent:'space-between'},
  body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
  main: {
    padding: 10, backgroundColor: 'white', 
 },
  title: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
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
    // flex: 1,
  }

})

  // < Container style = { styles.base } >
  // {
  //   this.props.route.params.textReflection && (
  //     <Content>
  //       <Text>前回の課題</Text>
  //       <Text>{this.props.route.params.textReflection}</Text>
  //     </Content>
  //   )
  // }

  //   < TextContainer concept = '最終目標' explanation = '目標を定めましょう！' />


  //     <TextContainer concept='現状の観察' explanation='目標を定めましょう！' />


  //     <TextContainer concept='現状の観察からの分析・判断・方針' explanation='目標を定めましょう！' />


  //     <TextContainer concept='意思決定' explanation='目標を定めましょう！' ref={this.setInput} />

  //     <Content contentContainerStyle={styles.buttoArea}>
  //       <Button block onPress={this.nextPage}>
  //         <Text style={styles.text}>始める</Text>
  //       </Button>
  //     </Content>

  //     </Container >