import React, { useState, Component } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
// import { Timer } from "./Timer";
import { Button } from "react-native-elements"
import DateTimePicker from '@react-native-community/datetimepicker';
import { render } from "react-dom";


// export function TimePickerModal(props) {
export class TimePickerModal extends Component {
constructor(props){
  super(props);
  this.state({
    date: 1598051730000,
  });
}
// const[date, setDate] = useState(new Date(1598051730000));

onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
this.setState(date:currentDate)
};
// const onChange = (event, selectedDate) => {
//   const currentDate = selectedDate || date;
//   setDate(currentDate);
// };

// const refSelectedTime = () => date;
 refSelectedTime = () => date;
render() {
  return (
    <Modal
      isVisible={props.isModalVisible}
      onBackdropPress={props.onBackdropPress}
      swipeThreshold={props.swipeThreshold}
      onSwipeComplete={props.onSwipeComplete}
      coverScreen={false}
      swipeDirection='down'
      style={{ marginHorizontal: 0, top: '45%' }}
    >
      {/* FullScreenModal 
            style={{ marginBottom:0,marginTop: 50, marginHorizontal: 0,top:'30%'}} */}
      <View style={{ flex: 1, backgroundColor: '#ffffff', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <View style={{ alignSelf: 'stretch', height: 40, backgroundColor: '#f1f2f6', borderTopLeftRadius: 20, borderTopRightRadius: 20, }} >
          <Button
            type='clear'
            title="完了"
            style={{ alignSelf: 'flex-end' }}
            onPress={props.onBackdropPress}
          />
        </View>
        <View style={{ alignContent: 'center' }}>
          <DateTimePicker
            // testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode='time'
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      </View>
    </Modal>
  );
}
}