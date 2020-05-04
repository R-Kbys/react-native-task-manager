import React from 'react';
import { Text, View, Alert, TextInput, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from "./styles";

export class StorageExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '0200'
        };
    }

    // componentDidUpdate(prevProps) {
    //     // 典型的な使い方(props を比較することを忘れないでください)
    //     if (this.props.route.params.stage == prevProps.route.params.stage) {
    //         console.log('componentdidupdate() was not excuted', this.props.route.params.stage, prevProps.route.params.stage);
    //         return;
    //     }
    //     console.log('componentdidupdate() was excuted', this.props.route.params.stage, prevProps.route.params.stage);
    //     // this.setState({ textValue: '0001' });
    // }

    nextPage = () => this.props.navigation.navigate('Example', {
        stage: 0
    });
    nextPage2 = () => this.props.navigation.navigate('Example', {
        stage: 1
    });
    nextPage3 = () => this.props.navigation.navigate('Example', {
        stage: 2
    });
    // onChangeText = () => this.setState(textValue => ({textValue:textValue}));
    onChangeText = (textValue) => this.setState({ textValue });

    storeData = async (name) => {
        try {
            await AsyncStorage.setItem('name', name);
        }
        catch (error) {
            console.log(error);
        }
        Alert.alert(name + ': stored');
    };

    store2 = async () => {
        let user = JSON.stringify({
            name: 'Chris',
            age: 30
        });
        try {
            await AsyncStorage.setItem('test', user);
        }
        catch (error) {
            console.log(error);
        }
        Alert.alert(user + ': stored');
    };

    get2 = async () => {
        try {
            const user = await AsyncStorage.getItem('test');
            if (user !== null) {
                console.log(1, user, typeof user);
                console.log(2, JSON.parse(user), typeof JSON.parse(user));
                console.log(3, JSON.parse(user).name, typeof JSON.parse(user).name);
                console.log(4, JSON.parse(user).age, typeof JSON.parse(user).age);
                Alert.alert('We have ' + user);
            }
            else {
                Alert.alert('We have no data');
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            if (value !== null) {
                console.log(5, value, typeof value);
                Alert.alert('We have ' + value);
                return value;
            }
            else {
                Alert.alert('We have no data');
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    // showText = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('name');
    //         if (value !== null) {
    //             return value;
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // };

    render() {
        const text = this.getData();
        const buttonDisablity1 = [false, false, true];
        const stage = this.props.route.params.stage;
        const textValue = this.state.textValue;
        return (
            <View style={styles.container}>
                <Button title='NextPage' onPress={this.nextPage} />
                <Button title='NextPage2' onPress={this.nextPage2} />
                <Button title='NextPage3' onPress={this.nextPage3} />
                <Button title='保存' onPress={() => this.storeData(textValue)} />
                <Button title='保存store2' onPress={() => this.store2()} />
                <Button title='Alert 取得get2' onPress={() => this.get2()} />
                <Button title='Alert 取得' onPress={() => this.getData()} />
                <Text>{this.state.textValue}</Text>
                <Text>{typeof text} </Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Example", {
                        stage: 0
                    })}
                    title="0" disabled={buttonDisablity1[stage]} />
                <TextInput placeholder="Textarea" value={this.state.textValue} onChangeText={this.onChangeText} />
                <Text>{this.props.route.params.stage} </Text>
            </View>);
    }
}
