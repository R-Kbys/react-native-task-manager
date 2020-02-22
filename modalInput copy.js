import React ,{Component} from 'react';
import { Modal, TextInput, StyleSheet, Button, Text, View} from 'react-native';


export class ModalInput extends React {
    modalSwitch = () => this.setState({ modal: !this.state.modal })

    render() {
        return (
            <Modal
                visible={this.state.modal}
                transparent={true}
                animationType="fade">
                <View style={styles.modalbase}>
                    <View style={styles.modalpanel}>
                        <Text style={styles.message}>{this.props.target}目標をなすための{this.subTarget}期のタスクを決めましょう</Text>
                        <Text style={styles.message}>タスク{this.state.taskCount}:</Text>
                        <TextInput
                            placeholder="タスク1"
                            value={this.state.text}
                            onChangeText={this.doType}
                            style={styles.message} />
                        <Button title="閉じる" onPress={this.modalSwitch} />
                    </View>
                </View>
            </Modal>
        )
    }
}


const styles = StyleSheet.create({
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
    }
});