import React ,{Component} from 'react';
import { Modal, TextInput, StyleSheet, Button, Text, View} from 'react-native';


export class PromptUserInput extends React {
    modalSwitch = () => this.setState({ modal: !this.state.modal })

    render() {
        return (
            <Modal
                visible={this.state.modal}
                transparent={true}
                animationType="fade">
                <View style={styles.modalbase}>
                    <View style={styles.modalpanel}>
                        <Text style={styles.message}>{this.props.target}</Text>
                        
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