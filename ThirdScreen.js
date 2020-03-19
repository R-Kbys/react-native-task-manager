import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Content, Text } from 'native-base';
import { TextContainer } from './TextContainer';
export class ThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textReflection: ''
    };
  }
  render() {
    return (
    <Container style={styles.base}>
      <Content style={styles.main}>

          <TextContainer textTitle='acquition' concept='理解したこと．習得したこと' explanation='今回の学習で成長したことを書きましょう' />

          <TextContainer textTitle='reflection' concept='課題' explanation='今回の学習で見えた課題やできなかったことを書きましょう' />

      </Content>

      {/* <Content contentContainerStyle={styles.buttoArea}>

      </Content> */}

        <View style={styles.buttoArea}>
          <Button title="Go back " onPress={this.nextPage} />
      </View>
      </Container>

    );
  }
  // nextPage = () => {
  //   this.props.navigation.navigate('FirstScreen', {
  //     textReflection: this.state.textReflection,
  //     stage:0
  //   })
  // }

  nextPage = async () => {
    try {
      await AsyncStorage.setItem('stage', '3');
      console.log('setItem() stage 3 ')
    }
    catch (error) {
      console.log(error);
    }
    // 空のオブジェクトを渡すことで移動先のスクリーンで強制的にComponentをアップデートさせる
    this.props.navigation.navigate('FirstScreen',{})
  }

}

export const styles = StyleSheet.create({
    base: { padding: 0, flex: 1, },
    body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
    main: { padding: 10, backgroundColor: 'white', },
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
    
    }

})