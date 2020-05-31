import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Header, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ShowStartTime } from './ShowStartTime';
import { TextContainer } from './TextContainer';
import { styles } from './styles/Style';
// import Modal from "react-native-modal";


export class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.promptInput = React.createRef();
        this.state = {
            isVisible: false,
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
            console.log('ComponentDidUpdate() stage1 Now stage number is 1');
            await AsyncStorage.setItem('stage', '1');
            return;
        }
        // check time was input and then stage=> 2 and save;
        // 予定学習時間はpropsで永続しないから，そもそもstage 2をストレージに記録する必要なき
        if (this.props.route.params.startHour != prevProps.route.params.startHour) {
            this.setState({ stage: 2 });
            console.log('ComponentDidUpdate() Now stage number is 2');
            // await AsyncStorage.setItem('stage', '2');
            return;
        }
        // S3 でS1に遷移時に空のroute.paramsを渡すことで強引にS1を更新させることで，以下のコードが動作している
        const value = await AsyncStorage.getItem("stage");
        if (value == "3") {
            this.setState({ stage: 0 });
            console.log('ComponentDidUpdate()  Now stage number is 3');
            await AsyncStorage.setItem('stage', '0');
            return;
        }
        console.log('# S1 ComponentDisUpdate was excuted :stage', value);

    }

    render() {
        console.log('-----render s1-----')
        const buttonDisablity1 = [false, false, true];
        const buttonDisablity2 = [true, false, true];
        const stage = this.state.stage;
        const hour = this.props.route.params.startHour;
        const min = this.props.route.params.startMin;
        const textDecision = this.props.route.params.textDecision;
        const isTimeInput = (stage == 2) ? true : false;

        return (
            <Container style={styles.base}>
                <Header style={styles.floatingHeader}>
                    <Right>
                        {/* <Icon
                            name="question-circle"
                            size={25}
                            color="white"
                            onPress={{}}
                            style={{alignSelf:"stretch"}}
                        /> */}
                        <Icon
                            name="trash-o"
                            size={25}
                            color="white"
                            onPress={this.createTwoButtonAlert}
                        // style={{alignSelf:"stretch"}}
                        />
                    </Right>
                </Header>

                {/* <Content> */}
                <View style={styles.body}>
                    <TextContainer
                        textTitle='aim'
                        concept='最終的な到達目標'
                        explanation='最終的な到達点を決めましょう'
                        helpText={
                            '最終的に到達したい目標を掲げましょう．目標が長期になる場合は最終的な目標とは別に，チェックポイントや通過点として中期の目標をいくつか立てるといいかもしれません．\n\n'
                        }
                        exampleText={'例1：レポート課題や宿題を提出の一週間前に終わらせる\n\n例2：初めてカレンダーアプリを作る\n●中期目標1：公式ドキュメントを読見ながら，チュートリアルを行い，簡易のアプリを作る\n●中期目標2：カレンダーを表示させるコードを理解する\n●中期目標3：カレンダーを表示させるコードを中期目標1で作ったアプリに組み込んでみる\n'}
                        style={styles.container}
                        ref={this.promptInput}
                    />
                    <View
                        style={{ backgroundColor: '#fff', flex: 2, padding: 2, margin: 3 }}
                        shadowOffset={{ width: 0, height: 4, }}
                        shadowColor='black'
                        shadowOpacity={0.30}
                        shadowRadius={4.65}
                        elevation={8}>
                        {
                            (stage != 0) &&
                            <>
                                <Text style={{ fontSize: 17, padding: 2, margin: 3 }} >今回取り組むべきこと</Text>
                                <Text style={{ fontSize: 15, padding: 3, margin: 2 }}>{textDecision}</Text>
                            </>
                        }

                    </View>

                    <View style={{ flex: 4 }}>
                        <View style={styles.buttonArea}>
                            <Button
                                title='目標を設定する'
                                // raised={true}
                                onPress={this.navigateToSecond}
                                disabled={buttonDisablity1[stage]}
                                buttonStyle={!buttonDisablity1[stage] ? styles.buttonStyle : {}}
                                titleStyle={styles.buttonTitle}
                            />
                        </View>

                        {/* 2順目の時，1順目と学習時間を変更しないと，「タスクを開始j」を押しても勉強終了にならない */}

                        <View style={styles.buttonArea}>
                            <Button
                                title="集中する時間を設定"
                                // raised={true}
                                onPress={() => this.props.navigation.navigate('MyModal')}
                                disabled={buttonDisablity2[stage]}
                                buttonStyle={!buttonDisablity2[stage] ? styles.buttonStyle : {}}
                                titleStyle={styles.buttonTitle}

                            />
                        </View>

                        <View style={styles.buttonArea}>
                            <Button
                                title='タスク終了'
                                onPress={this.navigateToThird}
                                // raised={true}
                                disabled={!buttonDisablity1[stage]}
                                buttonStyle={buttonDisablity1[stage] ? styles.buttonStyle : {}}
                                titleStyle={styles.buttonTitle}
                            />
                            {/* {
                            isTimeInput &&
                            <ShowStartTime hour={hour} min={min} style={styles.timeMessage} />
                        } */}
                        </View>

                        {/* <View style={{
                            flex: 2,
                            padding: 2,
                            margin: 2,
                            // alignContent :"space-around"
                        }}> */}
                        {
                            isTimeInput &&
                            <ShowStartTime hour={hour} min={min} style={styles.timeMessage} />
                        }
                        {/* </View> */}


                    </View>
                </View>
                {/* </Content> */}
            </Container>

        );
    }

    clearStorage = async () => {
        try {
            await AsyncStorage.clear();
            this.setVisiblityModal();
            Alert.alert('消去しました。');
        }
        catch (error) {
            console(error);
        }
    }
    navigateToSecond = () => {
        this.props.navigation.navigate('SecondScreen');
    };
    navigateToThird = () => {
        this.props.navigation.navigate('ThirdScreen');
    };
    doType = text => this.setState({ text });

    setVisiblityModal = () => {
        this.setState((state) => {
            return { isVisible: !this.state.isVisible };
        });
    }
    createTwoButtonAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        )
    };
}
// #003bc3　#46ba7a  #2657d2  #26d2a1
// #1841d6　#d6ad18
// #2628d2 #31c998
//#3D5AFE
// #9bcdff #5474e7