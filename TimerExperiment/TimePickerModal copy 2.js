import { View } from "react-native";
import Modal from "react-native-modal";
import { Timer } from "./Timer";
import { Button } from "react-native-elements"


export function TimePickerModal(props) {

    return (
      <Modal
        isVisible={props.isModalVisible}
        onBackdropPress={props.onBackdropPress}
        swipeThreshold={props.swipeThreshold}
        onSwipeComplete={props.onSwipeComplete}
        coverScreen={false}
        swipeDirection='down'
        style={props.style}
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

              <Timer 
              date={props.date}
              onChange={props.onChange}
              />

            </View>
        </Modal>
    );
  
}