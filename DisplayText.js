import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, Text } from 'react-native';

export function DisplayText() {
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

    const textConent = !!text ? (<View style={{ flex: 1 }}>
        <Text>前回の課題</Text>
        <Text>{text}</Text>
    </View>) : null;

    return (textConent
        // !!text && (
        //     <View style={{ flex: 1 }}>
        //         <Text>前回の課題</Text>
        //         <Text>{text}</Text>
        //     </View>
        // )
    );
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
