import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Content, Text, Header, Left, Right, Body } from 'native-base';
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
        <Header
          style={styles.floatingHeader}
        >
          <Left>
            <Button
              title="戻る"
              type="clear"
              onPress={this.props.navigation.goBack}
              titleStyle={{ color: '#000' }}
            />

          </Left>
          <Body>
            <Text style={{ color: 'black' }}>フィードバック</Text>
          </Body>
          <Right />
          {/* <Right>
            <Icon
              name="question-circle"
              size={25}
              color="white"
            // onPress={{}}
            // style={{alignSelf:"stretch"}}
            />
          </Right> */}
        </Header>
        <Content contentContainerStyle={styles.main}>

          <TextContainer
            textTitle='acquition'
            concept='理解・習得したこと'
            explanation='今回の学習で成長したことを書きましょう'
            style={styles.container}
          />

          <TextContainer
            textTitle='reflection'
            concept='課題'
            explanation='今回の学習で見えた課題やできなかったことを書きましょう'
            style={styles.container}
          />

        </Content>

        {/* <Content contentContainerStyle={styles.buttoArea}>

      </Content> */}

        <View style={styles.buttoArea}>
          <Button 
          title="完了" 
          onPress={this.nextPage}
          buttonStyle={styles.buttonStyle} />
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
    this.props.navigation.navigate('FirstScreen', {})
  }

}
//00BCD4
//35a6ec
export const styles = StyleSheet.create({
  base: { backgroundColor: '#fff' }, //#E3F2FD
  // body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
  main: { padding: 10, },
  floatingHeader: {
    backgroundColor: "#26C6DA",  //00BCD4
    // backgroundColor: "#2089dc",
    shadowOffset: { width: 0, height: 4, },
    shadowColor: '#000',
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8
  },
  container: {
    flex: 2,
    backgroundColor: "#fff",
    margin: 3,
    padding: 3
  },
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
    padding:5,
    margin: 4,
  },
  buttonStyle: {
    backgroundColor: "#35a6ec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },

})