import React from 'react';
import { Text } from 'native-base';
import { Button } from 'react-native-elements';

export function ShowStartTime(props) {
  const startDate = new Date();
  const hour = props.hour;
  const min = props.min;
  return (
  <>
    <Text style={props.style}>学習開始時刻 {startDate.getHours()}時間:{startDate.getMinutes()}分</Text>
    <Text style={props.style}>予定学習時間 {hour}時間{min}分</Text>
  </>
  );
}
// export function ShowStartTime(props) {
//   const startDate = new Date();
//   const time = props.date;
//   return (<>
//     <Button title='勉強終了' onPress={props.onPress} />
//     <Text>学習開始時刻{startDate.getHours()}:{startDate.getMinutes()}</Text>
//     <Text>予定学習時間{time.getHours()}:{time.getMinutes()}</Text>
//   </>);
// }
