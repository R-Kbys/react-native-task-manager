import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import { styles } from './UserInputModal';

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
            <Text style={{ fontSize: 17, padding: 2, margin: 2 }} >前回の課題</Text>
            <Text style={{ fontSize: 15, padding: 3, margin: 2 }}>{text}</Text>
        </View>
    ) : <Text>悩んだら，ヘルプを見て書き方を参考にしよう</Text>;

    return (textConent);
    // ここのreturnは有効

    // fetchText().then(result => {
    //   console.log("showText method", result);
    //   return (<>
    //     <View style={{ flex: 1 }}>
    //       <Text>前回の課題</Text>
    //       <Text>{result}</Text>
    //     </View>
    //   </>);
    // })
}
