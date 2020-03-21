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
              '「最終的な目標」で決めた長期的な目標と比較して，現在の自分は何ができて，',
              '何が足らないのかを知ることはとても大切です．\nここで自分の力量，現状を理解することは後のこれからどのような行動とるかを決める際に役に立ちます'
            }
            exampleText={'例：レポートの課題や宿題の場合　\n●レポートに必要なデータが不足しているため　\n●また集めたデータが整理されていないため，考察が滞った',
              '例： \n'}
            style={styles.container}
          />

          <TextContainer
            textTitle='reflection'
            concept='課題'
            explanation='今回，見えた課題やできなかったことを書きましょう'
            helpText={
              '「最終的な目標」で決めた長期的な目標と比較して，現在の自分は何ができて，',
              '何が足らないのかを知ることはとても大切です．\nここで自分の力量，現状を理解することは後のこれからどのような行動とるかを決める際に役に立ちます'
            }
            exampleText={'例：レポートの課題や宿題の場合　\n●レポートに必要なデータが不足しているため　\n●また集めたデータが整理されていないため，考察が滞った',
              '例： \n'}
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