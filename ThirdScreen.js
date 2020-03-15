import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TextContainer } from './TextContainer';
export class ThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textReflection: ''
    };
  }
  render() {
    return (<Container style={styles.base}>
      <Content style={styles.main}>

        <TextContainer concept='理解したこと．習得したこと' explanation='今回の学習で成長したことを書きましょう' />

        <TextContainer concept='課題' explanation='今回の学習で見えた課題やできなかったことを書きましょう' />

      </Content>

      <Content contentContainerStyle={styles.buttoArea}>

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