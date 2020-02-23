import React, { Component } from 'react';
import { Modal, TextInput, StyleSheet, Button, Text, View } from 'react-native';


export class ModalInput extends Component {
    modalSwitch = () => this.setState({ modal: !this.state.modal })

    render() {
        return (

            <View style={styles.modalbase}>
                <View style={styles.modalpanel}>
                    <Text style={styles.message}>理解したこと・習得したこと</Text>
                    <TextInput
                        placeholder={this.props.placeholder}
                        value={this.props.textAquired}
                        onChangeText={this.props.doType}
                        style={styles.message} />
                    <Button title="閉じる" onPress={this.props.modalSwitch} />
                </View>
                <View style={styles.modalpanel}>
                    <Text style={styles.message}>今回できなかったこと・次回の課題</Text>
                    <TextInput
                        placeholder='仮'
                        value={this.props.textReflection}
                        onChangeText={this.props.doType}
                        style={styles.message} />
                    <Button title="次に進む" onPress={this.props.modalSwitch} />
                </View>
            </View>

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