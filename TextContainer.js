import React, { Component } from 'react';
import { Modal, TextInput, Text, View, Button, StyleSheet } from 'react-native';
import { UserInputModal } from './UserInputModal';

export function TextContainer(props) {
// Modalのvisibleのステートはこの関数コンポーネントの親コンポーネントで管理しているが，
// このコンポーネントで管理しても良いのではないか，その場合はクラスコンポーネントにする
// どちらが良いのか．そっちの方がいい説ある
    return (
        <View style={{ flex: 1 }}>
            <View flexDirection='row'>
                <Text>{props.concept}</Text>
                <Button title="編集" onPress={props.setVisibleModal} />
            </View>
            <Text>{props.textInput}</Text>
            <UserInputModal
                visible={props.visible}
                explanation={props.explanation}
                setVisibleModal={props.setVisibleModal}
                textInput={props.textInput}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}

// setVisibleModal = () => {
//     setModalIsOpen = this.state.ModalIsOpen;
//     setModalIsOpen[id] = !setModalIsOpen[id];
//     this.setState({ ModalIsOpen: setModalIsOpen })
// }
// setVisibleReflectionModal = () => this.setState({ isVisible: !this.state.isVisible })


export const styles = StyleSheet.create({

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

})
// render() {
//     return (
//         <Modal
//             visible={ props.visible}
//             transparent={false}
//             animationType="fade">
//             <View style={styles.modalbase}>
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