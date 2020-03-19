import React, { useState } from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

export function ModalScreen(props) {

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const startHour = date.getHours();
    const startMin = date.getMinutes();

    return (

        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='time'
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
            <View style={{  padding: 6, margin: 6, }}>

                <Button
                    title="タスクを始める"
                    onPress={() => props.navigation.navigate('Main', {
                        screen: 'FirstScreen',
                        params: {
                            stage: 2,
                            startHour: startHour,
                            startMin: startMin
                        }
                    })}
                    // raised={true}
                    buttonStyle={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 6,
                    }}
                />

            </View>
        </View>

    );
}
