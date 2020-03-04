import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import DateTimerPicker from '@react-native-community/datetimepicker';
import { Container, Header, Content, Text, Button } from 'native-base';


export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: Date.now(),
      isTimerStart: false,
    };
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  // tick() {
  //   this.setState({
  //     elapsed: new Date()
  //   });
  // }

  timeDisplay = (hour, min) => { <Text>推定学習時間 {hour}時{min}</Text> };
  setDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({ currentDate });
    setShow(Platform.OS === 'ios' ? true : false);

  }
  timerStart = () => {
    leftTime = Math.floor((this.state.endDate.getTime() - Date.now()) / 1000);
    hour = leftTime / 3600;
    min = (leftTime - hour) / 60;
    this.timeDisplay(hour, min);
    this.setState({ isTimerStart: !this.state.isTimerStart })
  };

  render() {
    const d = new Date();
    // leftTime;
    // const hour = leftTime / 3600;
    // const min = (leftTime - hour) / 60;

    return (
      <Content>
        <Text>終了時刻を決めよう</Text>
        {/* <DateTimerPicker
          date={this.state.endDate}
          onDateChange={this.setDate}
          mode='time'
          initialDate={this.state.endDate}
        /> */}
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.endDate}
          mode='time'
          is24Hour={true}
          display="default"
          onChange={this.setDate}
        />
        )}
        <Button
          block
          onPress={this.timerStart}
          active={!this.state.isTimerStart}
        >
          <Text>スタート</Text>
        </Button>
        <Text>開始時刻 {d}</Text>

        {/* {
          isTimerStart &&
          <React.Fragment>
            <Text>開始時刻 {d}</Text>
            <Text>推定学習時間 {hour}時{min}</Text>
          </React.Fragment>
        } */}

      </Content>
    );
  }
}