import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';
import { TextContainer } from './TextContainer';
import { StyleSheet, ScrollView, View } from 'react-native';

export class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.setInput = React.createRef();
    this.state = {
      textDecision: '',
    };
  }
  render() {
    return (<Container style={styles.base}>

      {this.props.route.params.textReflection && (<Content>
        <Text>前回の課題</Text>
        <Text>{this.props.route.params.textReflection}</Text>
      </Content>)}

      <TextContainer concept='最終目標' explanation='目標を定めましょう！' />


      <TextContainer concept='現状の観察' explanation='目標を定めましょう！' />


      <TextContainer concept='現状の観察からの分析・判断・方針' explanation='目標を定めましょう！' />


      <TextContainer concept='意思決定' explanation='目標を定めましょう！' ref={this.setInput} />

      <Content contentContainerStyle={styles.buttoArea}>
        <Button block onPress={this.nextPage}>
          <Text style={styles.text}>始める</Text>
        </Button>
      </Content>

    </Container>);
  }
  nextPage = () => {
    this.props.navigation.navigate('FirstScreen', {
      textDecision: this.setInput.current.refTextValue()
    });
  };
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

