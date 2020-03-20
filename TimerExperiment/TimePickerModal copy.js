import React, { Component } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { Timer } from "./Timer";
import { Button } from "react-native-elements"


export function ModalTester () {

    return (
   
        <Modal
          isVisible={this.state.isModalVisible}
          coverScreen={false}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          swipeDirection='down'
          swipeThreshold={50}
          onSwipeComplete={() => this.setState({ isModalVisible: false })}
          style={{ marginHorizontal: 0, top: '50%' }}
        >
          {/* FullScreenModal 
            style={{ marginBottom:0,marginTop: 50, marginHorizontal: 0,top:'30%'}} */}

          <View style={{ flex: 1, marginTop: 10, }}>
            <View style={{ flex: 1, backgroundColor: '#ffffff', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <View style={{ alignSelf: 'stretch', height: 40, backgroundColor: '#f1f2f6', borderTopLeftRadius: 20, borderTopRightRadius: 20, }} >
                <Button
                  type='clear'
                  title="完了"
                  style={{ alignSelf: 'flex-end' }}
                  onPress={toggleModal}
                />
              </View>

              <Timer />

            </View>
          </View>

        </Modal>
    );
  
}