import React from 'react';
import { View, Text } from 'react-native';

export const InfoPage = (props) => {
    return (
        <View style={{ justifyContent: 'center', padding: 3, margin: 3 }}>
            <Text style={{
                padding: 3,
                margin: 3,
                fontSize: 18,
                lineHeight: 20,
                letterSpacing: 1,
            }}
            >
                「{props.concept}」を書くヒント
            </Text>
            <Text style={{
                padding: 3,
                margin: 2,
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: 1,
            }}
            >
                {props.helpText}
            </Text>
            <Text style={{
                padding: 3,
                margin: 2,
                fontSize: 16,
                lineHeight: 20,
                letterSpacing: 1,
            }}
            >
                {props.exampleText}
            </Text>
        </View>
    );
}
