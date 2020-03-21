import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Container } from 'native-base';
import Modal from "react-native-modal";

export function ModalFrame(props) {
    console.log('-----ModalFrame-----');
    return (
        <Modal
            isVisible={props.visible}
            onBackdropPress={props.setVisiblityModal}
            onSwipeComplete={props.setVisiblityModal}
            // coverScreen={false}
            swipeThreshold={100}
            swipeDirection='down'
        >
            <Container>
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <View
                        style={{
                            alignSelf: 'stretch',
                            height: 40, backgroundColor: '#e6e6e6',
                        }}
                    >
                        <Button
                            type='clear'
                            title="完了"
                            style={{ alignSelf: 'flex-end', marginLeft: 6 }}
                            onPress={props.setVisiblityModal}
                        />
                    </View>
                    {props.render()}
                </View>
            </Container>
        </Modal>
    );
}
