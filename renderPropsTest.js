import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Header, Content, Text, Label, Form, Textarea  } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

export class TextContainerParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            visiblityUserInputModal: false,
            visiblityInfoModal: false,
        }
        const { visible, setVisibleModal, ...otherProps } = this.props;
    };

    render() {
        return (
            <>
                {this.props.render(this.state, textTitle, concept, explanation, style)}
            </>
        );
    }
}

export class TextContainerChildren extends Component {
    constructor(props) {
        super(props);
    };
    setVisiblityUserInputModal = () => {
        if (this.state.visiblityUserInputModal == true) {
            this.setState({ visiblityUserInputModal: false })
            // try {
            //     await AsyncStorage.setItem(key, this.state.textValue);
            //     console.log('# ComponentWillUnmout textContainer :', key, this.state.textValue);
            // }
            // catch (error) {
            //     console.log(error);
            // }
        }
        if (this.state.visiblityUserInputModal == false) {
            this.setState({ visiblityUserInputModal: true })
        }
    }
    
    render() {
        return (
            <>
                <View
                    style={this.props.style}
                    shadowOffset={{ width: 0, height: 4, }}
                    shadowColor='black'
                    shadowOpacity={0.30}
                    shadowRadius={4.65}
                    elevation={8}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 3,
                            margin: 2,
                        }}
                    >
                        <Text style={styles.title}>{this.props.concept} </Text>
                        <Icon
                            name="edit"
                            size={30}
                            color="#2089dc" //2089dc 00BCD4
                            onPress={this.setVisibleModal}
                        />
                        <Icon
                            name="edit"
                            size={30}
                            color="#2089dc" //2089dc 00BCD4
                            onPress={this.setVisibleModal}
                        />
                    </View>

                    <View style={{ padding: 2 }}>
                        <Text style={styles.textValue}>{this.state.textValue}</Text>
                    </View>
                </View>
                <ModalFrame
                    visible={this.state.visiblityUserInputModal}
                    setVisibleModal={this.setVisibleModal}
                    // onChangeText={this.doType}
                    // textValue={this.state.textValue}
                    // placeholder={this.props.placeholder}
                    // explanation={this.props.explanation}
                    render={() => (
                        <UserInputPage
                            onChangeText={this.props.onChangeText}
                            explanation={this.props.explanation}
                            {...otherProps}
                        />)
                    }
                />

                {/* <UserInputModal
                    visible={this.state.visible}
                    explanation={this.props.explanation}
                    setVisibleModal={this.setVisibleModal}
                    textValue={this.state.textValue}
                    placeholder={this.props.placeholder}
                    onChangeText={this.doType}
                /> */}
            </>
        );
    }
}

export const UserInputPage = (props) => {
    // const { visible, setVisibleModal, ...otherProps } = props;
    console.log('-----', props.visible, props.setVisibleModal);
    console.log('-----', otherProps, props);
    return (    
            <Content contentContainerStyle={styles.inputArea}>
                <Label style={styles.title}>{props.explanation}</Label>
                <Form style={styles.message}>
                    <Textarea
                        rowSpan={8}
                        bordered
                        placeholder='●ここに箇条書きで入力'
                        value={props.textValue}
                        onChangeText={props.onChangeText}
                        returnKeyType='done'
                        autoFocus={true}
                    />
                </Form>
            </Content>
    )
}

export const ModalFrame = (props) => {
    return (
        <Modal
            isVisible={props.visible}
            onBackdropPress={props.setVisibleModal}
            onSwipeComplete={props.setVisibleModal}
            // coverScreen={false}
            swipeThreshold={100}
            swipeDirection='down'
        // propagateSwipe={true}
        >
            <Container >
                <View style={{ flex: 1, backgroundColor: '#ffffff' }} >
                    <View style={{ alignSelf: 'stretch', height: 40, backgroundColor: '#e6e6e6', }} >
                        {/* d2d4d9 */}
                        <Button
                            type='clear'
                            title="完了"
                            style={{ alignSelf: 'flex-end', marginLeft: 6 }}
                            onPress={props.setVisibleModal}
                        />
                    </View>
                    {props.render()}
                </View>
            </Container>
        </Modal>
    )
}
