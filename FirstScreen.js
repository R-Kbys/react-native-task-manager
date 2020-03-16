import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { ShowStartTime } from './ShowStartTime';
import { TextContainer } from './TextContainer';

export class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            stage: 0
        }
    };

    //1. アプリを終了した時の状態を再起動時に再現するため
    //2. 意思決定の文章を示す　 storageから引っ張る

    async componentDidMount() {
        try {
            const value = await AsyncStorage.getItem("stage");
            if (value != null) {
                console.log('ComponentDidMounnt() in the s1 stage', value);
                this.setState({ stage: value });
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async componentDidUpdate(prevProps) {
        // 典型的な使い方(props を比較することを忘れないでください)
        // check textDecision was input and then stage _>1 and save
        if (this.props.route.params.textDecision != prevProps.route.params.textDecision) {
            // save and 
            this.setState({ stage: 1 });
            console.log('ComponentDidUpdate() stage1');
            await AsyncStorage.setItem('stage', '1');
            return;
        }
        // check time was input and then stage=> 2 and save;
        // 予定学習時間はpropsで永続しないから，そもそもstage 2をストレージに記録する必要なき
        if (this.props.route.params.startHour != prevProps.route.params.startHour) {
            this.setState({ stage: 2 });
            console.log('ComponentDidUpdate() stage2');
            // await AsyncStorage.setItem('stage', '2');
            return;
        }
        const value = await AsyncStorage.getItem("stage");
        if (value == "3") {
            this.setState({ stage: 0 });
            console.log('ComponentDidUpdate() stage3');
            await AsyncStorage.setItem('stage', '0');
            return;
        }

    }

    render() {
        console.log('render s1')
        const buttonDisablity1 = [false, false, true];
        const buttonDisablity2 = [true, false, true];
        // navigation を通じてrouteを渡していく場合
        // const stage = this.props.route.params.stage;
        // AsyncStorageを通じて念の為stageを永続し，基本はstateで直接管理
        const stage = this.state.stage;
        const hour = this.props.route.params.startHour;
        const min = this.props.route.params.startMin;
        const textDecision = this.props.route.params.textDecision;
        const isTimeInput = (stage == 2) ? true : false;
        // const isDisabled = (textDecision != 'string') ? true : !isTimeInput;
        // let isDisabled = (textDecision != 'string') && isTimeInput || !isTimeInput;
        // this.setState({ isDisabled: isDisabled });
        return (
            <View style={styles.base}>
                <TextContainer textTitle='aim' concept='最終目標' explanation='最終的な到達点を決めましょう' style={{ flex: 1, padding: 4, margin: 4 }} />
                <View style={{ flex: 1, padding: 6, margin: 4 }}>

                    {
                        textDecision &&
                        <>
                            <Text>目先の短期目標</Text>
                            <Text>{textDecision}</Text>
                        </>
                    }
                </View>

                <View style={{ flex: 1, padding: 6, margin: 6 }}>
                    <Button
                        title='目標を設定する'
                        onPress={this.nextPage}
                        disabled={buttonDisablity1[stage]}
                    />
                </View>

                {/* 2順目の時，1順目と学習時間を変更しないと，「タスクを開始j」を押しても勉強終了にならない */}

                <View style={{ flex: 1, padding: 6, margin: 6 }}>
                    <Button
                        onPress={() => this.props.navigation.navigate('MyModal')}
                        title="集中する時間を設定"
                        disabled={buttonDisablity2[stage]}
                    />
                </View>

                <View style={{ flex: 1, padding: 6, margin: 6, }}>
                    <Button
                        title='勉強終了'
                        onPress={this.doAction2}
                        disabled={!buttonDisablity1[stage]}
                    />
                    {
                        isTimeInput &&
                        <ShowStartTime hour={hour} min={min} style={styles.timeMessage} />
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
    // doAction2 = () => {
    //     this.setState({stage:0});
    //     this.props.navigation.navigate('ThirdScreen');
    // };
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



