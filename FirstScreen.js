import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { ShowStartTime } from './ShowStartTime';
import { TextContainer } from './TextContainer';

export class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false
        }
    };
 
    // componentDidUpdate() {
    //     // 典型的な使い方(props を比較することを忘れないでください)
    //     if (textDecision == 'string') {
    //         // this.setState({ isDisabled: isDisabled });
    //         isDisabled = isTimeInput || !isTimeInput;
    //     }
    // }
    render() {
        console.log('render')
        const text = this.state.text;
        const buttonDisablity1 = [false, false, true];
        const buttonDisablity2 = [true, false, true];
        const stage = this.props.route.params.stage;
        const hour = this.props.route.params.startHour;
        const min = this.props.route.params.startMin;
        const textDecision = this.props.route.params.textDecision;
        const isTimeInput = (typeof hour != 'number') ? true : false;
        const isDisabled = (textDecision != 'string') ? true : !isTimeInput;
        // let isDisabled = (textDecision != 'string') && isTimeInput || !isTimeInput;
        // this.setState({ isDisabled: isDisabled });
        return (
            <View style={styles.base}>
                <TextContainer concept='最終目標' explanation='最終的な到達点を決めましょう' style={{ flex: 1, padding: 4, margin: 4 }} />

                {
                    textDecision &&
                    <View style={{ flex: 1, padding: 6, margin: 4 }}>
                        <Text>目先の短期目標</Text>
                        <Text>{textDecision}</Text>
                    </View>
                }

                <View style={{ flex: 1, padding: 6, margin: 6 }}>
                    <Button 
                    title='目標を設定する' 
                    onPress={this.nextPage} 
                    disabled={buttonDisablity1[stage]}
                    />

                </View>

                <View style={{ flex: 1, padding: 6, margin: 6 }}>
                    <Button
                        onPress={() => this.props.navigation.navigate('MyModal')}
                        title="集中する時間を設定"
                        disabled={buttonDisablity2[stage]}
                    />
                </View>

                <View style={{ flex: 1, padding: 6, margin: 6, justifyContent: 'center' }}>
                    {
                        hour &&
                        <>
                            <Button title='勉強終了' onPress={this.doAction2} disabled={!buttonDisablity1[stage]} />
                            <ShowStartTime hour={hour} min={min} style={styles.timeMessage} />
                        </>
                    }
                </View>

            </View>
        );
    }

    nextPage = () => {
        this.props.navigation.navigate('SecondScreen');
    };
    doAction2 = () => {
        this.props.navigation.navigate('ThirdScreen');
    };
    doType = text => this.setState({ text });
}

export const styles = StyleSheet.create({
    base: { padding: 10, flex: 1, padding: 6, margin: 6, margin: 6 },
    body: { padding: 10, flex: 0.5, backgroundColor: '#0a55aa', },
    main: { padding: 10, flex: 8, backgroundColor: 'white', },
    title: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalbase: {
        backgroundColor: '#00000099',
        justifyContent: 'center',
        fontSize: 32,
        flex: 1, padding: 6, margin: 6
    },
    timeMessage: {
        padding: 6,
        justifyContent: 'center',
        textAlign: 'center'
    },
    message: {
        padding: 10,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        // height: 40,  
    },
    image: {
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: '80%',
    },
    buttoArea: {
        padding: 10,
        margin: 10,
        flex: 1, padding: 6, margin: 6,
    }
})



