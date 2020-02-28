import React, { Component } from 'react';
import { Modal, TextInput, Text, View, Button, StyleSheet } from 'react-native';
import { UserInputModal } from './UserInputModal';

export class TextContainer extends Component {
    // Modalのvisibleのステートはこの関数コンポーネントの親コンポーネントで管理しているが，
    // このコンポーネントで管理しても良いのではないか，その場合はクラスコンポーネントにする
    // どちらが良いのか．そっちの方がいい説ある
    constructor(props) {
        super(props);
        this.state = {
            textValue: '●　　●',
            visible: false,
        }
    };

    setVisibleModal = () => this.setState({ visible: !this.state.visible })
    doType = textValue => this.setState({ textValue });

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View flexDirection='row'>
                    <Text style={styles.message}>{this.props.concept}</Text>
                    <Button style={styles.message} title="編集" onPress={this.setVisibleModal} />
                </View>
                <Text>{this.state.textValue}</Text>
                <UserInputModal
                    visible={this.state.visible}
                    explanation={this.props.explanation}
                    setVisibleModal={this.setVisibleModal}
                    textValue={this.state.textValue}
                    onChangeText={this.doType}
                />
            </View>
        );
    }
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
        fontSize: 16,
        textAlign: 'center',
        // height: 40,
    },

})
