import React, { Component } from 'react';
import { Modal, TextInput, Text, View, Button,StyleSheet } from 'react-native';

export class UserInputModal extends Component {
    constructor(props) {
        super(props);
    }
    // functionコンポーネント化しよう
    render() {
        return (
            <Modal
                visible={this.props.visible}
                transparent={false}
                animationType="fade">
                <View style={styles.modalbase}>
                    <View style={styles.modalpanel}>
                        <Text style={styles.message}>{this.props.explanation}めましょう</Text>
                        <TextInput
                            placeholder="タスク1"
                            value={this.props.userValue}
                            onChangeText={this.props.onChangeText}
                            style={styles.message} />
                    </View>
                    <Button title="短期目標を決める" onPress={this.props.onoff} />

                </View>
            </Modal>
        );
    }
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
//             visible={this.props.visible}
//             transparent={false}
//             animationType="fade">
//             <View style={styles.modalbase}>
//                 <View style={styles.modalpanel}>
//                     <Text style={styles.message}>{this.props.explanation}めましょう</Text>
//                     <TextInput
//                         placeholder="タスク1"
//                         value={this.props.userValue}
//                         onChangeText={this.props.onChangeText}
//                         style={styles.message} />
//                 </View>
//                 <Button title="短期目標を決める" onPress={this.props.onoff} />

//             </View>
//         </Modal>
//     );
// }