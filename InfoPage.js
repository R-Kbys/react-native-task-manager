import React from 'react';
import { View, Text } from 'react-native';

export const InfoPage = (props) => {
   return(
        <View style={{ justifyContent: 'center', padding: 3, margin: 3 }}>
            <Text style={{ padding: 3, margin: 3, fontSize: 16 }}>
                「{props.concept}」を書くヒント
            </Text>
            <Text style={{
                padding: 3,
                margin: 2,
                fontSize: 14,
            }}
            >
                {props.helpText}
            </Text>
            <Text style={{
                padding: 3,
                margin: 2,
                fontSize: 14,
            }}
            >
                {props.exampleText}
            </Text>
        </View>
   );
}
