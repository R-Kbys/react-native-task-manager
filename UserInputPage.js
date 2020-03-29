import React from 'react';
import { Content, Label, Form, Textarea } from 'native-base';
import {styles } from "./styles/subStyle";

export function UserInputPage(props) {

    console.log('-----UserInputPage-----');
    return (
        <Content contentContainerStyle={styles.inputArea} >
            <Label style={styles.title}>{props.explanation}</Label>
            <Form style={styles.message}>
                <Textarea
                    bordered
                    rowSpan={8}
                    placeholder='●ここに箇条書きで入力'
                    value={props.textValue}
                    onChangeText={props.onChangeText}
                    returnKeyType='done'
                    autoFocus={true}
                />
            </Form>
        </Content>
    );
}

