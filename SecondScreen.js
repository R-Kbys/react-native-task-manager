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
            concept='現在の状況'
            explanation='まず，最終的な目標と比較して現状の進み具合や到達度を再確認しましょう'
            helpText={
              '「最終的な目標」で決めた長期的な目標と比較して，現在の自分は何ができて，',
              '何が足らないのかを知ることはとても大切です．\n ここで自分の力量，現状を理解することは後のこれからどのような行動とるかを決める際に役に立ちます'
            }
            exampleText={'例：レポートの課題や宿題の場合　\n ●全体的に3割程度進んだ \n ●しかし，レポートの進み具合が遅い\n',
              '例： \n'}
            style={styles.container}
          />
          {/* ●全体的に3割程度進んだ  ●しかし，レポートの進み具合が遅い'
'
 */}
          <TextContainer
            textTitle='analysis'
            concept='現在の状況から得られる分析'
            explanation='次に，なぜ今の状況になったのかその原因や理由，解決法を考えましょう'
            helpText={
              '「最終的な目標」で決めた長期的な目標と比較して，現在の自分は何ができて，',
              '何が足らないのかを知ることはとても大切です．\nここで自分の力量，現状を理解することは後のこれからどのような行動とるかを決める際に役に立ちます'
            }
            exampleText={'例：レポートの課題や宿題の場合　\n●レポートに必要なデータが不足しているため　\n●また集めたデータが整理されていないため，考察が滞った',
              '例： \n'}
            style={styles.container}
          />
          <TextContainer
            textTitle='decision'
            concept='目先の優先的な目標・タスク'
            explanation='先ほど考えた原因に対する対処法を考え，今優先してするべき目先の目標を定めましょう'
            helpText={
              '「最終的な目標」で決めた長期的な目標と比較して，現在の自分は何ができて，',
              '何が足らないのかを知ることはとても大切です．\nここで自分の力量，現状を理解することは後のこれからどのような行動とるかを決める際に役に立ちます'
            }
            exampleText={'例：レポートの課題や宿題の場合　\n●まず，データの整理を行う\n●次に，2時間かけてデータをネットで収集する\n',
              '例： \n'}
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