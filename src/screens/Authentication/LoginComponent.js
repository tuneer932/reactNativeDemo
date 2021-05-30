import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import Style from './Style';
import AppButton from '../../components/AppButton';
import { validateEmail, validatePassword } from '../../../validator';

const LoginComponent = (props) => {
    const [initializing, setInitializing] = useState(true);
    const [email, setEmail] = useState('tuneer.932@gmail.com');
    const [password, setPassword] = useState('12345678');
    console.log(props);
    useEffect(() => {
        auth().onAuthStateChanged(onAuthStateChanged);
    }, []);

    function onAuthStateChanged(user) {
        if (user) {
            props.navigation.navigate('HomeNavigator')
        }
        if (initializing) setInitializing(false);
    }

    const signIn = async () => {
        console.log(validateEmail(email));
        console.log(validatePassword(password));
        if(validateEmail(email) && validatePassword(password)) {
            try {
                let response = await auth().signInWithEmailAndPassword(email, password)
                if (response && response.user) {
                    props.navigation.navigate('HomeNavigator')
                }
            } catch (e) {
                console.error(e.message)
                Alert.alert(e.message)
            }
        } else {
            Alert.alert('Email or password validation failed.')
        }
        
    }

    return (
        <SafeAreaView>
            <View style={Style.mainView}>
                <View style={Style.subView}>
                    <Text style={Style.textStyle}>Email</Text>
                    <TextInput
                        style={Style.textInputStyle}
                        label={"Email"}
                        value={email}
                        keyboardType="email-address"
                        placeholder="E-mail"
                        onChangeText={text => {
                            setEmail(text)
                        }}
                    ></TextInput>
                </View>
                <View style={Style.subView}>
                    <Text style={Style.textStyle}>Password</Text>
                    <TextInput
                        style={Style.textInputStyle}
                        label={"Password"}
                        value={password}
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={text => setPassword(text)}
                    ></TextInput>
                </View>
                <AppButton onPress={signIn} title={'Login'} />
            </View>
        </SafeAreaView>

    );
};



export default LoginComponent;
