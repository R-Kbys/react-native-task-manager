import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TimePickerModal } from './TimePickerModal';
import { Container, Header, Content, Text } from 'native-base';
import { Button } from 'react-native-elements';

export class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isStart: false,
      date: 1298051730000,
    }
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({ date: currentDate });
  };
  toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });
  setStart = () => this.setState({ isStart: true });

  render() {
    const isStart = this.state.isStart;
    let button;

    if (isStart) {
      button = <ShowStartTime onPress={this.setStart} date={this.state.date} />
        // <>
        //   <Button
        //     title='勉強終了'
        //     onPress={this.setStart}
        //   //終了するとき
        //   />
        //   <ShowStartTime />
        // </>;
    } else {
      button = <Button
        title='勉強始める'
        onPress={this.setStart}
      />;
    }

    return (
      <React.Fragment>
        <TimePickerModal
          isModalVisible={this.state.isModalVisible}
          onSwipeComplete={this.toggleModal}
          onBackdropPress={this.toggleModal}
          swipeThreshold={100}
          style={{ marginHorizontal: 0, top: '60%' }}
          date={this.state.date}
          onChange={this.onChange}
        />

        <Button
          title='集中する時間を設定'
          onPress={this.toggleModal}
          disabled={this.state.isStart}
        />

        {button}

      </React.Fragment>
    );
  }
}

function ShowStartTime(props){
  const startDate = new Date();
  const time = props.date;
  return (
    <>
      <Button
        title='勉強終了'
        onPress={props.onPress}
      />
      <Text>学習開始時刻{startDate.getHours()}:{startDate.getMinutes()}</Text>
      <Text>予定学習時間{time.getHours()}:{time.getMinutes()}</Text>
    </>
  )
}