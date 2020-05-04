import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { TimePickerModal } from './TimePickerModal';
import { Container, Header, Content } from 'native-base';
import { Button } from 'react-native-elements';
import { ShowStartTime } from '../ShowStartTime';

export const TimerContainer = (props) => {
  const refDate = useRef();
  //  = {
  //   isModalVisible: false,
  //   isStart: false,
  //   date: 1298051730000,
  // }
  const [isModalVisible, toggleModal] = useState(false);
  const [isStart, setStart] = useState(false);

  // onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setState({ date: currentDate });
  // };
  // toggleModal = () => setState({ isModalVisible: !.isModalVisible });
  // setStart = () => setState({ isStart: true });

  // render() {
  // const isStart = .isStart;

  // const startDate = new Date();
  // const timePickerEl = () => {
  //   // `current` points to the mounted text input element
  //   refDate.current.refSelectedTime();
  // };

  // const time = refDate.current.refSelectedTime();
  // let time = timePickerEl();
  let button;

  if (isStart) {
    // button = <ShowStartTime onPress={setStart} time={refDate.current.refSelectedTime} />
    button = <ShowStartTime onPress={setStart}  />
    // button = <>
    //   <Button
    //     title='勉強終了'
    //     onPress={setStart}
    //   />
    //   <Text>学習開始時刻{startDate.getHours()}:{startDate.getMinutes()}</Text>
    //   <Text>予定学習時間{time.getHours()}:{time.getMinutes()}</Text>
    // </>;
    
  } else {
    button = <Button
      title='勉強始める'
      onPress={setStart}
    />;
  }

  return (
    <React.Fragment>
      <TimePickerModal
        isModalVisible={isModalVisible}
        onSwipeComplete={() => toggleModal(!isModalVisible)}
        onBackdropPress={() => toggleModal(!isModalVisible)}
        swipeThreshold={100}
        // ref={refDate}
        // date={date}
        // onChange={onChange}
      />

      <Button
        title='集中する時間を設定'
        onPress={() => toggleModal(!isModalVisible)}
        disabled={isStart}
      />

      {button}
    </React.Fragment>
  );
  // }
}

