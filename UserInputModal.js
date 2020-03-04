import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Button, Label, Input, Form, Textarea } from 'native-base';
import { Overlay } from 'react-native-elements';

export function UserInputModal(props) {
    // functionコンポーネントとクラスコンポーネントはstateをモテる以外で何が異なるしよう

    return (
        <Overlay
            transparent={false}
            animationType="slide"
            isVisible={props.visible}
            overlayBackgroundColor='white'
            fullScreen={true}
        >
            {/* <View style={styles.text}> 
            // viewで囲むとキーボードが自動で隠れなくて不便
            */}
            {/* <Content></Content> contentで囲むとボタンが下に行ってしまう*/}
            {/* <Content> */}
            {/* <Overlay>の子コンポートを上記のように一つに囲まずにやるとwarningがでるが，うまくいく */}
            <Container >
                <Content contentContainerStyle={styles.inputArea}>
                    <Label style={styles.title}>{props.explanation}</Label>
                    <Form style={styles.message}>
                        <Textarea
                            rowSpan={8}
                            bordered
                            placeholder="Textarea"
                            value={props.textValue}
                            onChangeText={props.onChangeText}
                            returnKeyType='done'
                            autoFocus={true}
                        />
                    </Form>
                </Content>
                {/* 
                        <Input
                            placeholder='Rounded Textbox'
                            value={props.textValue}
                            onChangeText={props.onChangeText}
                            style={styles.message}
                            multiline={true}
                        /> */}
                <Content contentContainerStyle={styles.buttoArea}>
                    <Button block onPress={props.setVisibleModal}>
                        <Text style={styles.text}>閉じる</Text>
                    </Button>
                </Content>
            </Container>
            {/* </Content> */}
            {/* </View> */}
        </Overlay >

    );
}


export const styles = StyleSheet.create({
    inputArea: {
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        flex: 8
    },
    buttoArea: {
        padding: 10,
        margin: 10,
        flex: 2,
    },
    message: {
        padding: 10,
        color: 'black',
        fontSize: 22,
        // height: 40,
    },
    title: {
        fontSize: 22,
        padding: 10,
        fontWeight: '300',
        textDecorationLine: 'underline'
    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        padding: 10,
        flex: 1
    }

})
// render() {
//     return (
//         <Modal
//             visible={ props.visible}
//             transparent={false}
//             animationType="fade">
//             <View style={styles.overlay}>
//                 <View style={styles.modalpanel}>
//                     <Text style={styles.message}>{ props.explanation}めましょう</Text>
//                     <TextInput
//                         placeholder="タスク1"
//                         value={ props.userValue}
//                         onChangeText={ props.onChangeText}
//                         style={styles.message} />
//                 </View>
//                 <Button title="短期目標を決める" onPress={ props.setVisibleModal} />

//             </View>
//         </Modal>
//     );
// }