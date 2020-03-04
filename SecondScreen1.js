import React, { Component } from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


export class SScreen extends Component {
    static navigationOptions = {
        title: 'Second Screen',
        headerStyle: { backgroundColor: '#00aa00', },
        headerTintColor: 'white'
    };

    constructor(props) {
        super(props);
        this.state = {
            title: 'Screen 2',
            message: 'this is a  navigation sample 2'
        }
    }
    render() {
        return (
            <View style={styles.base}>
                <View style={styles.body}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.message}>{this.state.message}</Text>
                    <View style={{ padding: 10 }}>
                        <Button title="Go back " onPress={this.doAction1} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Button title="Next Screen" onPress={this.doAction2} />
                    </View>
                    <View style={{ backgroundColor: 'black' }}></View>
                    <Text>HELLO</Text>
                </View>
            </View>
        );
    }
    doAction1 = () => {
        this.props.navigation.goBack();
    }
    doAction2 = () => {
        this.props.navigation.navigate('Last');
    }
}

const styles = StyleSheet.create({
    base: { padding: 0, flex: 1, },
    body: { padding: 10, flex: 1, backgroundColor: '#0a55aa', },
    main: { padding: 10, flex: 2, backgroundColor: 'black', flexDirection: 'row' },
    title: {
        padding: 10,
        color: 'red',
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 'bold'
    },
    message: {
        padding: 10,
        color: 'green',
        fontSize: 24,
        lineHeight: 15,
        textAlign: 'center',
        height: 40,
    },
    containerText: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: '-20%',
    },
    image: {
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: '80%',
    }

});

// export default SScreen;