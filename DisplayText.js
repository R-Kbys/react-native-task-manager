import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, Text } from 'react-native';

export function DisplayText(props) {
    const [text, setText] = useState(null);

    useEffect(() => {
        async function fetchDate() {
            const result = await AsyncStorage.getItem("textreflection");
            console.log(" console.log :fetch DisplayText:", result);
            if (result != null) {
                setText(result);
            }
        }
        fetchDate();
    }, []);

    const textConent = !!text ? (
        <View style={props.style}>
            <Text style={{ fontSize: 17, padding: 2, margin: 2 }} >前回見えた課題</Text>
            <Text style={{ fontSize: 15, padding: 3, margin: 2 }}>{text}</Text>
        </View>
    ) :
        <>
            <Text>iマークを押して書き方の参考を見る</Text>
            <Text>エンピツマークを押して追記・編集を行う</Text>
        </>
    return (textConent);
}
