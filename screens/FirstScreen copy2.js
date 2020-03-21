import React, { Component } from 'react';
import { View, StyleSheet, TextInputComponent } from 'react-native';
import { Button } from 'react-native-elements';
import { Text } from 'native-base';
// import { TimerContainer } from './TimerContainer';
import { ShowStartTime } from './ShowStartTime';
import { TextContainer } from './TextContainer';

export class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTextInput: false,
            isTimeInput: false
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
                    <Button title='目標を設定する' onPress={this.nextPage} disabled={this.state.isTextInput} />
                </View>

                <View style={{ flex: 1, padding: 6, margin: 6 }}>
                    <Button
                        onPress={() => this.props.navigation.navigate('MyModal')}
                        title="集中する時間を設定"
                        disabled={this.state.isDisabled}
                    />
                </View>

                <View style={{ flex: 1, padding: 6, margin: 6, justifyContent: 'center' }}>
                    {
                        hour &&
                        <>
                            <Button title='勉強終了' onPress={this.doAction2} disabled={!isDisabled} />
                            <ShowStartTime hour={hour} min={min} style={styles.timeMessage} />
                        </>
                    }
                </View>

            </View>
            // <View style={styles.base}>
            //   <View style={{ padding: 10 }}>
            //     <Button title="Go back " onPress={this.doAction1} />
            //     <Button title="Next Screen" onPress={this.doAction2} />
            //   </View>
            //   <View style={{ flex: 1,padding:4,margin:6, backgroundColor: 'darkblue' }}>
            //     <Text style={styles.title}>{this.props.route.params.}</Text>
            //   </View>
            //   <ScrollView>
            //     <TextContainer
            //       concept='理解したこと．習得したこと'
            //       explanation='今回の学習で成長したことを書きましょう'
            //     />
            //     {/* <SafeAreaView style={styles.container}>
            //     <FlatList
            //       data={DATA}
            //       renderItem={({ item }) => <Item title={item.title} />}
            //       keyExtractor={item => item.id}
            //     />
            //   </SafeAreaView> */}
            //   </ScrollView>
            // </View>
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



