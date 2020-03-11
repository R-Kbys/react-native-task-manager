import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Text } from 'native-base';
import { TimerContainer } from './TimerContainer';

export class FirstScreen extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.base}>
                <View style={{ flex: 1 }}>
                    <Text>{this.props.route.params.textDecision}</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Button title='目標を設定する' onPress={this.nextPage} />
                    <Text style={styles.text}>目標を設定する</Text>


                </View>
                <TimerContainer />
                <Button
                    onPress={() => this.props.navigation.navigate('MyModal')}
                    title="Open Modal"
                />
                <Button title='3' onPress={this.doAction2} />
                {this.props.route.params.time && <Text>{this.props.route.params.time.getHours()}</Text>}

            </View>
            // <View style={styles.base}>
            //   <View style={{ padding: 10 }}>
            //     <Button title="Go back " onPress={this.doAction1} />
            //     <Button title="Next Screen" onPress={this.doAction2} />
            //   </View>
            //   <View style={{ flex: 1, backgroundColor: 'darkblue' }}>
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
    handleChange = date => { this.setState({ date }); };
}

export const styles = StyleSheet.create({
    base: { padding: 0, flex: 1, },
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
        flex: 1
    },
    modalpanel: {
        padding: 10,
        margin: 50,
        justifyContent: 'center',
        backgroundColor: 'white',
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
        flex: 1,
    }
})



