import React, { useState } from 'react';
import { View ,Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export function Timer(props){
  // const [date, setDate] = useState(new Date(1598051730000));

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setDate(currentDate);
  // };
  

//   const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;

//     setDate(currentDate);
//     // setShow(Platform.OS === 'ios' ? true : false);
//   };

  // const showMode = currentMode => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

//   const showTimepicker = () => {
//     showMode('time');
//   };

  return (
    <View style={{alignContent:'center'}}>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View> */}
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      {/* {show && ( */}
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode='time'
          is24Hour={true}
          display="default"
          onChange={props.onChange}
        />
      {/* )} */}
      {/* <Text style={{}}>{date.getHours()}:{date.getMinutes()}</Text> */}
    </View>
  );
};

