import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container, Header, Title, Content, Left, Right, Body, Icon } from 'native-base';

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
            <Button onPress={() => props.navigation.navigate('Main', {
                screen: 'FirstScreen',
                params: {
                    startHour: startHour,
                    startMin: startMin
                }
            })} title="完了" />
        </View>

    );
}
