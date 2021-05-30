import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/routers';

const Header = (props) => {

    return (
        <TouchableOpacity
              onPress={() => {
                props.navigation.dispatch(DrawerActions.openDrawer())
              }}>
              <Icon
                name="bars"
                color='black'
                size={30}
                style={Style.headerIcon}
              />
            </TouchableOpacity>
    );
};

export default Header;
