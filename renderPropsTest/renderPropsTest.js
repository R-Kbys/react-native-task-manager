import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, StyleSheet } from 'react-native';
import { Header, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ModalFrame } from './ModalFrame';
import { UserInputPage } from './UserInputPage';

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

    doType = textValue => this.setState({ textValue })
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


