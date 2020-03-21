import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TimePickerModal} from './TimerPickerModal';
import { Container, Header, Content, Text, Button } from 'native-base';


export const TimerScreen = () => {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  pageBack = () => {
    this.props.navigation.navigate('FirstScreen', {
      time: date
    });

    return (
      <Content>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='time'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        <Text>{date.getHours()}:{date.getMinutes()}</Text>
        <Button
          block
          onPress={this.pageBack}
        >
          <Text>完了</Text>
        </Button>
      </Content>
    );
  }
}