import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Content, Text, Header, Left, Right, Body } from 'native-base';
import { TextContainer } from './TextContainer';
import { styles } from './styles/Style';

export class ThirdScreen extends Component {
  constructor(props) {
    super(props);
  }

  navigateAndStore = async () => {
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
        </Header>

        <Content contentContainerStyle={styles.main}>

          <TextContainer
            textTitle='acquition'
            concept='理解・習得したこと'
            explanation='得た成果，や学んだ事を書きましょう'
            helpText={
              'タスク開始前に決めた今回取り組むべきことと比べて，実際に予定通り実行できたか，また得られた成果や，インプットしたこと，アウトプットしたことを書きます．\n\n'
            }
            exampleText={'例1：レポートの課題や宿題の提出を目標としている場合　\n●今回の目標通り，最低限必要なデータを集められた．\n\n例2：初めてアプリ（カレンダーアプリ）を作る事を目標としている場合 \n●配色，デザインを理解した．マテリアルデザインというボタンやウインドウが背景に対して，浮いて見えるデザインの特徴などを理解．．．\n\n'}
            style={styles.container}
          />

          <TextContainer
            textTitle='reflection'
            concept='新しく見えた課題'
            explanation='今回，見えた課題やできなかったことを書きましょう'
            helpText={
              'タスク開始前に決めた今回の目標と比べて，予定通りにいかなかった場合，何ができなかったか．また，新たに現れた問題や課題を書きましょう\n●ここで書いたことが次回取り組むべき課題・タスクのひとつとして挙げられます.\n\n'}
            exampleText={'例1：レポートの課題や宿題の提出を目標としている場合　\n●今回，途中で考えついた考察をより確かにしたい．\n\n例2：初めてアプリ（カレンダーアプリ）を作る事を目標としている場合\n●新しく学んだデザインを実際に試すΩ．\n\n'}
            style={styles.container}
          />

        </Content>

        <View style={styles.fotterButtonArea}>
          <Button
            title="完了"
            onPress={this.navigateAndStore}
            buttonStyle={styles.buttonStyle} 
            />
        </View>

      </Container>

    );
  }

}