import React, { useState } from 'react';
import { StyleSheet ,View} from 'react-native';
import { TimePickerModal } from './TimePickerModal';
import { Container, Header, Content, Text } from 'native-base';
import { Button } from 'react-native-elements';


export const TimerContainer = (props) => {
  // const [date, setDate] = useState(new Date(1598051730000));
  const [isModalVisible, toggleModal] = useState(false);
const [isStart,setStart] = useState(false);
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setDate(currentDate);
  // };

  let startTime;

  startStudy = () => {
    const date = new Date();
    return startTime = <Text>学習開始時刻{date.getHours()}:{date.getMinutes()}</Text>
  };

  return (
    <React.Fragment>
      <TimePickerModal
        isModalVisible={isModalVisible}
        onBackdropPress={() => toggleModal(!isModalVisible)}
        onSwipeComplete={() => toggleModal(!isModalVisible)}
        swipeThreshold={50}
        style={{ marginHorizontal: 0, top:'50%'}}
      />

      {/* <Text>{date.getHours()}:{date.getMinutes()}</Text> */}
      {isStart && startTime}

      <Button
        title='始める'
        onPress={() => setStart(true)}
        // active={!startTime}
      />
       
      <Button
        title='時間'
        onPress={() => toggleModal(!isModalVisible)}
        // active={!startTime}
      />
       

    </React.Fragment>
  );
}
