import { View, Text, TextInput, StyleSheet, CheckBox, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Toast from 'react-native-toast-message';
// import { useDispatch } from 'react-redux/es/exports';
// import { setUser } from '../../redux/actions/authActions'

import Layout from '../../components/Layout'
import * as colors from '../../themes/Colors'
import { screens } from '../../constants/index'
import { basicAuthenticate } from '../../apis/authAPI';

const SignIn = props => {

    const navigation = useNavigation();
    // const dispatch = useDispatch()

    const [isSelect, setIsSelected] = useState(false)
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [data, setData] = useState({
        email: '',
        emailErr: '',
        password: '',
        passwordErr: '',
        error: '',
    });

    const displayErrorMsg = (errMsg, errObj = null) => {
        Toast.show({
            type: 'error',
            text1: errMsg,
        });
    };

    const validate = () => {
        if (data.email === '' || data.password === '') {
            setData({
                ...data,
                emailErr: data.email === '' ? 'Please Enter User Name' : '',
                passwordErr: data.password === '' ? 'Please enter password' : '',
            });
            if (data.email === '' && data.password === '')
                displayErrorMsg('Please enter email and password');
            else if (data.email === '') displayErrorMsg('Please enter email');
            else displayErrorMsg('Please enter password');
            return false;
        }
        return true;
    };

    const onLoginPress = () => {
        const dataset = {
            email: data.email,
            password: data.password
        }
        if (validate()) {
            // setLoading(true)
            basicAuthenticate(dataset)
                .then(response => {
                    // dispatch(setUser(response.data))
                    navigation.navigate(screens.HOME);
                })
                .catch(error => {
                    Toast.show({
                        type: 'error',
                        text1: error,
                    });
                    console.log(error)
                })
        }
    }



    return (
        <Layout>
            <View style={styles.main}>
                <View style={styles.textBox}>
                    <TextInput
                        keyboardType="email-address"
                        placeholder="Email Address"
                        onChangeText={text =>
                            setData({
                                ...data,
                                email: text,
                            })}
                        value={data.email}
                    />
                </View>
                <View style={styles.textBox}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="PassWord"
                        onChangeText={text =>
                            setData({
                                ...data,
                                password: text,
                            })}
                        value={data.password}
                    />
                </View>
                <View style={styles.checkBoxContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#008"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "#008", borderRadius: 5 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={setIsSelected}
                    />
                    <Text>Terms and Conditions Agree</Text>
                </View>
                <Button onPress={onLoginPress} title={'Log In'} />

            </View>
        </Layout>
    )
}

export default SignIn

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textBox: {
        borderRadius: 10,
        height: 38,
        marginHorizontal: 25,
        marginVertical: 10,
        width: '80%',
        flexDirection: 'row',
        borderColor: colors.Gray,
        borderWidth: 1,
        borderRadius: 5,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        marginVertical: 35,
        alignItems: 'center'
    }
})