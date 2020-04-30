import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Body, Left, Right } from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextContainer } from './TextContainer';
import { DisplayText } from './DisplayText';
import { styles } from './styles/Style';

export class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.refText = React.createRef();
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
            concept='現在の状況の観察'
            explanation='まず，最終的な目標と比較して現状の進み具合やまだ解決できていない問題や到達度を再確認しましょう．'
            helpText={
              '「最終的な目標」で決めた長期的な目標と比較して，現在の自分は何ができて，何が足らないのかを改めて確認しましょう．\nここで自分の力量，現状を理解することは後のこれからどのような行動とるかを決める際に役に立ちます．\n\n'
            }
            exampleText={'例1：レポートの課題や宿題の提出を目標としている場合\n●全体的に3割程度進んだ\n●しかし，発表資料の進み具合が遅い\n\n例2： 初めてカレンダーアプリを作る事を目標としている場合\n●デザインやレイアウトの仕方がわからない\n●特に色の使い方，配色の仕方がわからない．'}
            style={styles.container}
          />
          <TextContainer
            textTitle='analysis'
            concept='現在の状況から得られる分析'
            explanation='次に，なぜ今の状況になったのかその原因や理由を見つけて，問題に対する解決法を考えましょう'
            helpText={
              '「現在の状況の観察」で再確認した事をベースとして，なぜやどうしてを問いかけて原因，理由を考えて，その問題をどのようにすれば解決できるかを考えます．\n\n'
            }
            exampleText={'例1：レポートの課題や宿題の提出を目標としている場合\n●レポートや発表資料に必要な統計のデータが不足しているため　\n●また集めたデータが整理されていないため，考察が滞った\n\n例2：初めてカレンダーアプリを作る事を目標としている場合\n●ネット検索で見つけたGoogleの開発者ページを読んでアプリの配色やデザインについて理解する'}
            style={styles.container}
          />
          <TextContainer
            textTitle='decision'
            concept='今取り組むべき短期目標・タスク'
            explanation='対処法をまとめて，今優先して取り組むべき問題の解決を目標に定めましょう．'
            helpText={
              '「現在の状況から得られる分析」で確認した問題の中から今優先して解決すべき問題を決めて，これからするべき行動を決めましょう．\n\n'
            }
            exampleText={'例1：レポートの課題や宿題の提出を目標としている場合\n1．まず，データの整理を行う\n2．2時間かけて不足している統計のデータを収集する\n\n例2：初めてカレンダーアプリを作る事を目標としている場合\n1．開発者ページを読んで配色デザインを理解\n2．実際にアプリに使う色を決める'}
            style={styles.container}
            ref={this.refText}
          />

        </Content>

        <View style={styles.fotterButtonArea}>
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
      textDecision: this.refText.current.refTextValue(),
      stage: 1
    });
  };
}

// {/* <Button
//               icon={
//                 <Icon
//                   name="angle-left"
//                   // size={24}
//                   color="white"
//                 // style={{ margin: 1, }}
//                 />
//               }
//               iconleft
//               title="戻る"
//               type="clear"
//               onPress={() => this.props.navigation.goBack()}
//             /> */}