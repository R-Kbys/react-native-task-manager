import React, { Component } from 'react';
// import { Modal, TextInput, Text, View, Button, StyleSheet } from 'react-native';
import { StyleSheet, View, AsyncStorage } from 'react-native';
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
            textValue: '',
            visible: false,
        }
    };
    async componentDidMount() {
        try {
            const key = 'text' + this.props.textTitle;
            const textValue = await AsyncStorage.getItem(key);
            console.log('# ComponentDidMount()  textContainer:', key,typeof textValue);
            if (textValue != null) {
                this.setState({ textValue });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async componentWillUnmount() {
        try {
            const key = 'text' + this.props.textTitle;
            await AsyncStorage.setItem(key, this.state.textValue);
            console.log('# ComponentWillUnmout textContainer :', key, this.state.textValue);
        }
        catch (error) {
            console.log(error);
        }
    }

    setVisibleModal = () => this.setState({ visible: !this.state.visible })
    doType = textValue => this.setState({ textValue });
    refTextValue = () => this.state.textValue;

    render() {
        return (
            <>
                <View style={this.props.style} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.message}>{this.props.concept} </Text>
                        <Button
                            icon={
                                <Icon
                                    name="edit"
                                    size={24}
                                    color="#2089dc"
                                    style={{ margin: 1, }}
                                />
                            }
                            iconleft
                            title="編集"
                            type="outline"
                            onPress={this.setVisibleModal}
                            style={styles.editButton}
                        />
                        {/* <Icon
                            name="edit"
                            size={28}
                            color="#2089dc"
                            style={{ margin: 4, padding: 4 }}
                            onPress={this.setVisibleModal}
                        /> */}
                    </View>

                    <View style={{ padding: 2 }}>
                        <Text style={styles.textValue}>{this.state.textValue}</Text>
                    </View>
                </View>

                <UserInputModal
                    visible={this.state.visible}
                    explanation={this.props.explanation}
                    setVisibleModal={this.setVisibleModal}
                    textValue={this.state.textValue}
                    placeholder={this.props.placeholder}
                    onChangeText={this.doType}
                />
            </>

        );
    }
}


export const styles = StyleSheet.create({

    modalbase: {
        backgroundColor: '#00000099',
        justifyContent: 'center',
        fontSize: 32,
        flex: 7
    },
    message: {
        padding: 4,
        fontSize: 16,
        // textAlign: 'center',
        // paddingTop:2,
        // paddingBottom:1
        // height: 40,
    },
    textValue: {
        padding: 6,
        color: 'black',
        fontSize: 16,
        // selectable:true,
    },
    editButton: {
        margin: 2,
        // padding: 2,
        fontSize: 4,
    },

})
