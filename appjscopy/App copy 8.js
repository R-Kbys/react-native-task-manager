import React, { Component } from 'react';
import { Modal, TextInput, StyleSheet, Button, Text, View } from 'react-native';


export class ModalInput extends Component {
  
  render() {
    return (
      <Modal
        visible={this.state.modal}
        transparent={true}
        animationType="fade">
        <View style={styles.modalbase}>
          <View style={styles.modalpanel}>
            <Text style={styles.message}>{this.props.stage}</Text>
            <Text style={styles.message}>タスク{this.state.taskCount}:</Text>
            <TextInput
              placeholder={this.props.placeholder}
              value={this.state.text}
              onChangeText={this.props.doType}
              style={styles.message} />
            <Button title="閉じる" onPress={this.props.modalSwitch} />
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