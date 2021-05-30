import React, { useEffect, useState } from 'react';
import Styles from './styles';
import { connect, useSelector } from 'react-redux';
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { firestoreService } from '../../utils/firebase';
import CheckBox from '@react-native-community/checkbox';
import { DrawerActions } from '@react-navigation/routers';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

const ItemList = (props) => {

    const { items } = useSelector((state) => ({
        items: state.items.items
    }))
    const [search, setSearch] = useState('');

    useEffect(() => {
        firestoreService.registerEvents();
    }, [])

    useEffect(() => {
        if (items.length > 0) {
            // console.log('items in component ', items);
            items.forEach(documentSnapshot => {
                console.log('Item ID: ', documentSnapshot.id, documentSnapshot.data());
            });
        }
    }, [items]);

    useEffect(() => {

    }, [search])

    return (
        <SafeAreaView style={Styles.homeMainView}>
            <Header navigation={props.navigation} />
            <TextInput
                style={Styles.textInputStyle}
                label={"Search"}
                value={search}
                placeholder="Search"
                onChangeText={text => {
                    setSearch(text)
                }}
            ></TextInput>
            <ScrollView contentContainerStyle={Styles.homeMainView}>
                <View style={Styles.headerView}>
                    <Text style={Styles.headerText}></Text>
                    <Text style={Styles.headerText}>uid</Text>
                    <Text style={Styles.headerText}>title</Text>
                </View>
                {items.filter(item => {
                    if (search != '') {
                        return (item.data().title.toLowerCase().includes(search.toLowerCase()));
                    } else {
                        return item;
                    }
                }).map((item, index) => {
                    return <View key={index} style={Styles.headerView}>
                        <CheckBox
                            key={index}
                            value={item.data().isChecked}
                            style={Styles.headerText}
                            onValueChange={(newValue) => {
                                console.log(newValue)
                                firestoreService.updateItem({ isChecked: newValue, doc: item.id })
                            }}
                        />
                        <Text style={Styles.headerText}>{item.data().uid}</Text>
                        <Text style={Styles.headerText}>{item.data().title}</Text>
                    </View>
                })}
            </ScrollView>
        </SafeAreaView>

    );
};

export default ItemList;