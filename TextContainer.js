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
            console.log('# ComponentDidMount()  textContainer:', key, typeof textValue);
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
                <View
                    style={this.props.style}
                    // style={{backgroundColor:'#fff',margin:3,padding:3}}
                    shadowOffset={{ width: 0,height: 4,}}
                    shadowColor='black'
                    shadowOpacity={0.30}
                    shadowRadius={4.65}
                    elevation={8}>

                    <View style={{flexDirection: 'row',justifyContent: 'space-between',padding:3,margin:2}}>
                        <Text style={styles.message}>{this.props.concept} </Text>
                        {/* <Button
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
                        /> */}
                        <Icon
                            name="edit"
                            size={30}
                            color="#2089dc"
                            // style={{ margin: 3, padding: 1}}
                            onPress={this.setVisibleModal}
                        />
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
        padding: 3,
        fontSize: 18,
        textAlign: 'center',
        // paddingTop:2,
        // paddingBottom:1
        // height: 40,
    },
    textValue: {
        padding: 7,
        margin:3,
        color: 'black',
        fontSize: 15,
        // selectable:true,
    },
    editButton: {
        margin: 2,
        // padding: 2,
        fontSize: 4,
    },

})
