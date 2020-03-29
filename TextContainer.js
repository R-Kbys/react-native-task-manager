import React, { Component } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ModalFrame } from './ModalFrame';
import { UserInputPage } from './UserInputPage';
import { InfoPage } from './InfoPage';
import { styles } from './styles/subStyle';

export class TextContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue:'',
            visiblityUserInputModal: false,
            visiblityInfoModal: false,
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
    // async componentWillUnmount() {
    //     try {
    //         const key = 'text' + this.props.textTitle;
    //         await AsyncStorage.setItem(key, this.state.textValue);
    //         console.log('# ComponentWillUnmout textContainer :', key, this.state.textValue);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    setVisiblityUserInputModal = async () => {
        if (this.state.visiblityUserInputModal == true) {
            try {
                const key = 'text' + this.props.textTitle;
                await AsyncStorage.setItem(key, this.state.textValue);
                console.log('# textContainer :', key, this.state.textValue);
            }
            catch (error) {
                console.log(error);
            }
        }
        this.setState(state => ({ visiblityUserInputModal: !state.visiblityUserInputModal }));
    }

    setVisiblityInfoModal = () => this.setState({ visiblityInfoModal: !this.state.visiblityInfoModal })
    doType = textValue => this.setState({ textValue });
    refTextValue = () => this.state.textValue;

    render() {
        console.log('-----TextContainer---')
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
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                            <Icon
                                name="info-circle"
                                size={30}
                                color="#00BCD4" //2089dc 00BCD4 #bf152c #b00020
                                style={{ margin: 3, padding: 2, }}
                                onPress={this.setVisiblityInfoModal}
                            /> 
                            <Icon
                                name="edit"
                                size={30}
                                color="#2962FF" // skyblue 2089dc  26C6DA cyn 00BCD4
                                style={{ margin: 3, padding: 2 }}
                                onPress={this.setVisiblityUserInputModal}
                            />
                        </View>
                    </View>

                    <View style={{ padding: 2 }}>
                        <Text style={styles.textValue}>{this.state.textValue}</Text>
                    </View>
                </View>

                <ModalFrame
                    visible={this.state.visiblityUserInputModal}
                    setVisiblityModal={this.setVisiblityUserInputModal}
                    render={() => (
                        <UserInputPage
                            onChangeText={this.doType}
                            explanation={this.props.explanation}
                            textValue={this.state.textValue}
                        />)
                    }
                />
                <ModalFrame
                    visible={this.state.visiblityInfoModal}
                    setVisiblityModal={this.setVisiblityInfoModal}
                    render={() => (
                        <InfoPage
                            concept={this.props.concept}
                            helpText={this.props.helpText}
                            exampleText={this.props.exampleText}
                        />)
                    }
                />
            </>

        );
    }
}
// {/* <Button
// icon={
//     <Icon
//         name="edit"
//         size={24}
//         color="#2089dc"
//         style={{ margin: 1, }}
//     />
// }
// iconleft
// title="編集"
// type="outline"
// onPress={this.setVisiblityModal}
// style={styles.editButton}
//  /> */}

