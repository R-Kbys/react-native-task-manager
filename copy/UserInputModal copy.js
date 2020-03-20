import React, { Component } from 'react';
import { Modal, TextInput, Text, View, Button,StyleSheet } from 'react-native';

export function UserInputModal(props) {
    // functionコンポーネントとクラスコンポーネントはstateをモテる以外で何が異なるしよう

        const modalId = props.modalId;

        return (
            <Modal
                visible={props.visible}
                transparent={false}
                animationType="fade">
                <View style={styles.modalbase}>

                    <View style={styles.modalpanel}>
                        <Text style={styles.message}>{props.explanation}</Text>
                        <TextInput
                            placeholder="タスク1"
                            value={props.textValue}
                            onChangeText={props.onChangeText}
                            style={styles.message}
                            // multiline={true} 
                            />
                        <Button title="閉じる" onPress={props.setVisibleModal} />

                    </View>

                </View>
            </Modal>
        );
    }


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