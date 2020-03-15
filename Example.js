import React from 'react';
import { Text, View, Alert, TextInput, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from "./styles";

export class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // text:  this.getName() || '初期値'
            text: ''
        };
    }

    async componentDidMount() {
        try {
            const value = await AsyncStorage.getItem("name");
            console.log(value, typeof value);
            this.setState({ text: value || 'value' });
        }
        catch (error) {
            console.log(error);
        }
    }
    getName = async () => {
        try {
            const value = await AsyncStorage.getItem("name");
            console.log(value, typeof value)
            return value;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    storeData = async (name) => {
        try {
            await AsyncStorage.setItem('name', name);
        }
        catch (error) {
            console.log(error);
        }
        Alert.alert(name + ': stored');
    };
    onChangeText = (text) => {
        this.setState({ text });
    }
    // getTest = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('test');
    //         if (value !== null) {
    //             Alert.alert('We have ' + value);
    //         }
    //         else {
    //             Alert.alert('We have no data');
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // };
    render() {
        const text = this.state.text;
        const buttonDisablity1 = [false, false, true];
        const buttonDisablity2 = [true, false, true];
        const stage = this.props.route.params.stage;
        return (<View style={styles.container}>

            <Button title='getName' onPress={() => this.getName()} />
            <Text>押したボタン{stage}</Text>
            <Button
                onPress={() => this.props.navigation.navigate("StorageExample", {
                    stage: 0
                })}
                title="集中する時間を設定0" disabled={buttonDisablity1[stage]} />
            <Button
                onPress={() => this.props.navigation.navigate("StorageExample", {
                    stage: 2
                })}
                title="集中する時間を設定2" disabled={buttonDisablity1[stage]} />
            <Button
                // onPress={() => this.props.navigation.navigate('MyModal')}
                title="常にdisable" disabled={buttonDisablity1[2]} />
            <TextInput placeholder="● ¥n' + ' ●" value={text} onChangeText={this.onChangeText} />
        </View>);
    }
}
