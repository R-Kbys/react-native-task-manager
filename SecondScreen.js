import React, { Component } from 'react';
import { Container, Content, Header, Body, Left, Right } from 'native-base';
import { Button } from 'react-native-elements';
import { TextContainer } from './TextContainer';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DisplayText } from './DisplayText';

export class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.setInput = React.createRef();
    this.state = {
      textValue: "",
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
              title="キャンセル"
              type="clear"
              onPress={this.props.navigation.goBack}
              titleStyle={{ color: 'white' }}
            />
            {/* <Button
              icon={
                <Icon
                  name="angle-left"
                  // size={24}
                  color="white"
                // style={{ margin: 1, }}
                />
              }
              iconleft
              title="戻る"
              type="clear"
              onPress={() => this.props.navigation.goBack()}
            /> */}
          </Left>
          <Body>
            <Text style={{ color: 'white' }}>短期目標</Text>
          </Body>
          <Right>
            <Icon
              name="question-circle"
              size={25}
              color="white"
            // onPress={{}}
            // style={{alignSelf:"stretch"}}
            />
          </Right>
        </Header>

        <Content contentContainerStyle={styles.main}>

          <DisplayText style={styles.subTextContainer} />

          <TextContainer
            textTitle='observation'
            concept='現在の状況'
            explanation='まず，最終的な目標と比較して現状の進み具合や到達度を再確認しましょう'
            placeholder='●全体的に3割程度進んだ  ●しかし，レポートの進み具合が遅い'
            style={styles.container}
          />
          <TextContainer
            textTitle='analysis'
            concept='現在の状況から得られる分析'
            explanation='次に，なぜ今の状況になったのかその原因や理由，解決法を考えましょう'
            placeholder='●レポートに必要なデータが不足しているため　\n　●また集めたデータが整理されていないため，考察が滞った'

            style={styles.container}
          />
          <TextContainer
            textTitle='decision'
            concept='目先の優先的な目標・タスク'
            explanation='先ほど考えた原因に対する対処法を考え，今優先してするべき目先の目標を定めましょう'
            placeholder='●まず，データの整理を行う\n●次に，2時間かけてデータをネットで収集する'
            ref={this.setInput}
            style={styles.container}
          />

        </Content>

        <View style={styles.buttoArea}>
          <Button
            icon={
              <Icon
                name="check"
                size={20}
                color="#fff"
              />
            }
            iconleft
            title="目標設定を完了"
            onPress={this.nextPage}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
          />
        </View>
      </Container>
    );
  }
  nextPage = () => {
    this.props.navigation.navigate('FirstScreen', {
      textDecision: this.setInput.current.refTextValue(),
      stage: 1
    });
  };
}

// async function fetchText() {
//   console.log('fetch');
//   const text = await AsyncStorage.getItem("textreflection");
//   if (text != null) {
//     console.log(text, "FetchText()");
//     return (<View style={{ flex: 1 }}>
//       <Text>前回の課題</Text>
//       <Text>FetchText typeof text:{typeof text}</Text>
//     </View>
//     );
//   }
// }

export const styles = StyleSheet.create({
  base: { backgroundColor: '#E3F2FD' },
  // body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
  main: {
    // padding: 10, backgroundColor: 'white',
    padding: 10,
  },
  floatingHeader: {
    backgroundColor: "#2962FF",
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
  subTextContainer: {
    padding: 3,
    margin: 3,
    // backgroundColor: 'gray',
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
    padding: 5,
    margin: 4,
    // flex: 1,
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
  buttonTitle:{
    color:'white'
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