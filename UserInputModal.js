import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Container, Content, Label, Form, Textarea } from 'native-base';
import { Button } from "react-native-elements"
// import { TextContainer } from "./TextContainer";


export function UserInputModal(props) {
console.log('UserInputModal was rendered')
  return (
    <Modal
      isVisible={props.visible}
      onBackdropPress={props.setVisibleModal}
      onSwipeComplete={props.setVisibleModal}
      // coverScreen={false}
      swipeThreshold={100}
      swipeDirection='down' 
      // propagateSwipe={true}
    >
      <Container >
        <View style={{ flex: 1, backgroundColor: '#ffffff' }} >
          <View style={{ alignSelf: 'stretch', height: 40, backgroundColor: '#d2d4d9',}} >
            <Button
              type='clear'
              title="完了"
              style={{ alignSelf: 'flex-end', marginLeft: 6 }}
              onPress={props.setVisibleModal}
            />
          </View>
          <Content contentContainerStyle={styles.inputArea}>
            <Label style={styles.title}>{props.explanation}</Label>
            <Form style={styles.message}>
              <Textarea
                rowSpan={8}
                bordered
                placeholder="ここに箇条書きで入力"
                value={props.textValue}
                onChangeText={props.onChangeText}
                returnKeyType='done'
                autoFocus={true}
              />
            </Form>


          </Content>

          {/* 
          <View style={styles.buttoArea}>
            <Button
              type='outline'
              title="閉じる"
              style={styles.buttoArea}
              onPress={props.setVisibleModal}
            />
          </View > */}

        </View>

      </Container>
      {/* FullScreenModal 
            style={{ marginBottom:0,marginTop: 50, marginHorizontal: 0,top:'30%'}} */}
    </Modal>
  );

}


export const styles = StyleSheet.create({
  inputArea: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  buttoArea: {
    padding: 10,
    margin: 10,
  },
  message: {
    padding: 10,
    color: 'black',
    fontSize: 22,
    // height: 40,
  },
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: '300',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
    flex: 1
  }

})
