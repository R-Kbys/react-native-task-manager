import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { ShowStartTime } from './ShowStartTime';
import { TextContainer } from './TextContainer';
import { Container, Header, Content, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                <Header style={styles.header}>
                    <Right>
                        <Icon
                            name="question-circle"
                            size={25}
                            color="white"
                        // onPress={{}}
                        // style={{alignSelf:"stretch"}}
                        />
                        <Icon
                            name="trash-o"
                            size={25}
                            color="white"
                            onPress={this.clearStorage}
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
                        placeholder='最終的な目標を決めましょう'
                        style={styles.container}
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
                                <Text style={{ fontSize: 17, padding: 2, margin: 3 }} >目先の短期目標</Text>
                                <Text style={{ fontSize: 15, padding: 3, margin: 2 }}>{textDecision}</Text>
                            </>
                        }

                    </View>

                    <View style={{ flex: 4 }}>
                        <View style={styles.buttonArea}>
                            <Button
                                title='目標を設定する'
                                // raised={true}
                                onPress={this.nextPage}
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
                                onPress={this.doAction2}
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
        }
        catch (error) {
            console(error);
        }
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

// #003bc3　#46ba7a  #2657d2  #26d2a1
// #1841d6　#d6ad18
// #2628d2 #31c998
//#3D5AFE
// #9bcdff #5474e7 
export const styles = StyleSheet.create({
    base: { backgroundColor: '#E3F2FD' },//#e5f3ff 
    body: {
        padding: 10,
        flex: 1,
        padding: 6,
        margin: 6,
        margin: 6,
        // backgroundColor: "#442ee8",  
    },
    main: { padding: 10 },
    header: { backgroundColor: "#80DEEA" }, //#4ba5ff ,2089dc

    container: {
        flex: 2,
        backgroundColor: "#fff",
        margin: 3,
        padding: 3
    },
    // subContainer: {
    //     padding: 3,
    //     margin: 3,
    // },
    timeMessage: {
        padding: 3,
        margin: 4,
        textAlign: 'center'
    },
    buttonArea: {
        flex: 3,
        padding: 2,
        margin: 2,
        // alignItems: "center"
        // flex: 1,
    },
    buttonStyle: {
        backgroundColor: "#35a6ec",// #54dae9 #55cbd9 #39cbd1,03DAC5,03D，2089dc
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    buttonTitle: {
        color: 'white'
    }

})



// <View style={styles.body}>
            //     <TextContainer 
            //     textTitle='aim' 
            //     concept='最終的な到達目標' 
            //     explanation='最終的な到達点を決めましょう' 
            //     placeholder='最終的な目標を決めましょう'
            //     style={{ flex: 3, padding: 2, margin: 2 }}
            //      />
            //     <View style={{ flex: 3, padding: 2, margin: 2 }}>

            //         {
            //            (stage != 0) &&
            //             <>
            //                 <Text>目先の短期目標</Text>
            //                 <Text>{textDecision}</Text>
            //             </>
            //         }
            //     </View>

            //     <View style={{ flex: 2, padding: 6, margin: 6 }}>
            //         <Button
            //             title='目標を設定する'
            //             raised={true}
            //             onPress={this.nextPage}
            //             disabled={buttonDisablity1[stage]}
            //             buttonStyle={!buttonDisablity1[stage] ? styles.buttonStyle :{}}
            //         />
            //     </View>

            //     {/* 2順目の時，1順目と学習時間を変更しないと，「タスクを開始j」を押しても勉強終了にならない */}

            //     <View style={{ flex: 2, padding: 6, margin: 6 }}>
            //         <Button
            //             title="集中する時間を設定"
            //             raised={true}
            //             onPress={() => this.props.navigation.navigate('MyModal')}
            //             disabled={buttonDisablity2[stage]}
            //             buttonStyle={!buttonDisablity2[stage] ? styles.buttonStyle : {}}

            //         />
            //     </View>

            //     <View style={{ flex: 2, padding: 6, margin: 6, }}>
            //         <Button
            //             title='勉強終了'
            //             onPress={this.doAction2}
            //             raised={true}
            //             disabled={!buttonDisablity1[stage]}
            //             buttonStyle={buttonDisablity1[stage] ? styles.buttonStyle :{}}
            //         />
            //         {
            //             isTimeInput &&
            //             <ShowStartTime hour={hour} min={min} style={styles.timeMessage} />
            //         }
            //     </View>
            //     {/* <Button
            //         title='reset'
            //         onPress={this.clearStorage}
            //     /> */}

            // </View>