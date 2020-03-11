import React, { Component } from 'react';
// import { Modal, TextInput, Text, View, Button, StyleSheet } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Header, Content, Text } from 'native-base';
// import { Container, Header, Content, Text, Button } from 'native-base';
import { UserInputModal } from './UserInputModal';
import Icon from 'react-native-vector-icons/FontAwesome';

export class TextContainer extends Component {
    // Modalのvisibleのステートはこの関数コンポーネントの親コンポーネントで管理しているが，
    // このコンポーネントで管理しても良いのではないか，その場合はクラスコンポーネントにする
    // どちらが良いのか．そっちの方がいい説ある
    constructor(props) {
        super(props);
        this.state = {
            textValue: '● ¥n ● ',
            visible: false,
        }
    };

    setVisibleModal = () => this.setState({ visible: !this.state.visible })
    doType = textValue => this.setState({ textValue });
    refTextValue = () => this.state.textValue;

    render() {
        return (
            <>
                <View style={this.props.style} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.message}>{this.props.concept} </Text>
                        <Icon
                            name="edit"
                            size={28}
                            color="#2089dc"
                            style={{ margin: 4, padding: 4 }}
                            onPress={this.setVisibleModal}
                        />
                    </View>

                    <View style={{padding:2}}> 
                        <Text style={styles.textValue}>{this.state.textValue}</Text>
                    </View>
                </View>

                <UserInputModal
                    visible={this.state.visible}
                    explanation={this.props.explanation}
                    setVisibleModal={this.setVisibleModal}
                    textValue={this.state.textValue}
                    onChangeText={this.doType}
                />
            </>

            // <View style={{ flex: 1 }}>
            //     <View flexDirection='row'>
            //         <Text style={styles.message}>{this.props.concept}</Text>
            //         <Button style={styles.message} title="編集" onPress={this.setVisibleModal} />
            //     </View>
            //     <Text>{this.state.textValue}</Text>
            //     <UserInputModal
            //         visible={this.state.visible}
            //         explanation={this.props.explanation}
            //         setVisibleModal={this.setVisibleModal}
            //         textValue={this.state.textValue}
            //         onChangeText={this.doType}
            //     />
            // </View>
        );
    }
}

// {/* <Button rounded info onPress={this.setVisibleModal}>
//                         <Text style={styles.message}>編集</Text>
//                     </Button> */}
// {/* <Button
//                         icon={
//                             <Icon   
//                                 name="edit"
//                                 size={18}
//                                 color="#2089dc"
//                                 style={{margin:4}}
//                             />
//                         }
//                         iconleft
//                         title="編集"
//                         type="outline"
//                         onPress={this.setVisibleModal}
//                         style={styles.editButton}
//                     /> */}

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
        flex: 7
    },
    message: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',

        // paddingTop:2,
        // paddingBottom:1
        // height: 40,
    },
    textValue: {
        padding: 6,
        color: 'black',
        fontSize: 16,
    },
    editButton: {
        margin: 4,
        padding: 4,
        fontSize: 14,
    },

})
