import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Style from './style';

const AppButton = (props) => {

    return (
        <TouchableHighlight style={Style.buttonView} onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableHighlight>
    );
};

export default AppButton;
