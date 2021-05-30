import React, { useLayoutEffect, useState } from 'react';
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import { firestoreService } from '../../utils/firebase';
import Style from './styles';
import { v4 as uuidv4 } from 'uuid';
import AppButton from '../../components/AppButton';
import Header from '../../components/Header';

const AddItem = (props) => {
    
    const [title, setTitle] = useState('');

    const addItem = () => {
        if(title != '') {
            firestoreService.addItem({
                title: title,
                uid: uuidv4(),
                isChecked: false
            });
        }
        setTitle('');
    }

    return (
        <SafeAreaView>
            <Header navigation={props.navigation} />
            <View style={Style.mainView}>
                <View style={Style.subView}>
                    <Text style={Style.textStyle}>Title</Text>
                    <TextInput
                        style={Style.textInputStyle}
                        label={"Title"}
                        value={title}
                        placeholder="Title"
                        onChangeText={text => {
                            setTitle(text)
                        }}
                    ></TextInput>
                </View>
                <AppButton onPress={addItem} title={'Create'} />
            </View>
        </SafeAreaView>

    );
};

export default AddItem;
