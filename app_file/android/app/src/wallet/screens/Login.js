

import { Dimensions, ScrollView, Vibration, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Alert } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUserAuthTo } from "../../../../../redux/reducer/auth";
// GoogleSignInSetup.js
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleSvg from '../assets/google-icon-logo-svgrepo-com.svg';
import CloseSVG from '../../wallet/assets/close-square-svgrepo-com.svg'
import PinKeys from '../components/PinScreen/PinKeys';
import BackSvg from '../assets/back-svgrepo-com (4).svg'
import CookieManager from '@react-native-cookies/cookies';
import { getData, storeData } from "../reusables/AsyncStore.js";
import { set_cookie } from "../../../../../redux/cookie.js";

const Login = ({}) => {

    let navigation = useNavigation();
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    let [userId, setUserId] = useState('');

    let [input, setInput] = useState('email')
    let dispatch = useDispatch() 


    const handleVibrate = (timer) => {Vibration.vibrate(timer)};
    
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [pwd, setPwd] = useState('')

    let [emailErr, setEmailErr] = useState('')
    let [phoneErr, setPhoneErr] = useState('')
    let [pwdErr, setPwdErr] = useState('')

    useEffect(() => {
        async function get_stored_data() {
            let email = await getData('email')
            setEmail(email)
            let phone = await getData('phone')
            setPhone(phone)
        }
        get_stored_data()
    }, [])
    
     
   
    let loginHandler = async() => {
        let response = await validateInput()

        response.map(item => {

            let name = item._j.name;
            let err = item._j.mssg;

            if(name.toLowerCase() === 'email'){
                setEmailErr(err)
            }else if(name.toLowerCase() === 'phone number'){
                setPhoneErr(err)
            }else if(name.toLowerCase() === 'password'){
                setPwdErr(err)
            }
        })

        let data = response.filter((item) => item._j.mssg === '').length > 1 ? true : false;

        if(data){
            let input_data = input === 'email' ? email : phone
            fetch('http://192.168.234.146:2003/system.login', {
                method: 'post',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({input: input,input_data,pwd,provider: 'local'})
            })
            .then(async(result) => {
                let response = await result.json()
                // console.log(result)
                // console.log(response)
                if(response.bool){
                    setUserId(response.id)
                    CookieManager.set('https://paypenz.com', {
                        name: 'jwt_token',
                        value: response.cookie,
                        domain: 'paypenz.com',
                        path: '/',
                        version: '1',
                        secure: true,
                        expires: `'${90 * 24 * 60 * 60}'`
                    })
                    .then((done) => {
                        console.log('Cookie set!', done);
                        storeData('email', response.user.email)
                        storeData('phone', response.user.phone)
                        storeData('user', JSON.stringify(response.user)) 
                        storeData('user_id', response.id)
                        dispatch(set_cookie(true))
                        // openModal()
                    })
                    .catch(err => console.log(err))
                    
                }else{
                    if(response.data === 'duplicate email'){
                        setEmailErr('Email Already Exist')
                    }else if(response.data === 'duplicate phone'){
                        setPhoneErr('Phone Number Already Exist')
                    }
                    // console.log(response.data)

                }

            })
            .catch((err) => {
                // set_server_err(err)
                console.log(err)
                
            })
        }
        
    }

    
    async function validateInput() {

        let data = [  
            {value: phone, name: 'Phone number'},
            {value: email, name: 'Email'},
            {value: pwd, name: 'Password'}
        ];

        let result =  data.map(async(item) => {
            let test = {email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}

            if(item.name.toLowerCase() === 'email'){

                if(item.value.length < 1){
                    return ({bool: false, mssg: `${item.name} cannot be empty`, name: item.name})
                }else if(!item.value.match(test.email)){
                    return ({bool: false, mssg: `${item.name} is invalid`, name: item.name})
                }else{ 
                    return ({bool: true, mssg: ``, name: item.name})
                } 
                
            }else if(item.name.toLowerCase() === 'phone number'){

                if(item.value === ''){
                    return ({bool: false, mssg: `${item.name} cannot be empty`, name: item.name})
                }else if(item.value.length > 0 && item.value.length < 10){
                    return {bool: false, mssg: `${item.name} is invalid`, name: item.name}
                }else{
                    return ({bool: true, mssg: ``, name: item.name})
                }

            }else if(item.name.toLowerCase() === 'password'){

                if(item.value === ''){
                    return ({bool: false, mssg: `${item.name} cannot be empty`, name: item.name})
                }else if(item.value.length > 0 && item.value.length < 6){
                    return {bool: false, mssg: `${item.name} must be at least 6 numbers`, name: item.name}
                }else{
                    return ({bool: true, mssg: ``, name: item.name})
                }

            }
        })

        // console.log('result1: ', result1)

        return [...result];
    } 

    return ( 
        <> 

            <View style={{
                height: 120,
                width: '100%',
                position: 'relative',
                backgroundColor: '#1E90FF',
                color: '#000',
                overflow: 'scroll'
            }}>

            </View>
            <View style={{
                height: screenHeight - 120,
                width: '100%',
                position: 'relative',
                backgroundColor: '#1E90FF',
                color: '#000',
                overflow: 'scroll'
            }}>

                
                <ScrollView contentContainerStyle={{ display: 'flex', alignItems: 'space-between', flexDirection: 'column',  justifyContent: 'center'}} style={{height: '100%', width: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 25, backgroundColor: '#fff'}}>
                    
                    <View style={{marginBottom: 20, borderTopLeftRadius: 20,
                    borderTopRightRadius: 20, padding: 0}}>
                        <View style={{
                            width: '100%',
                            height: 50, 
                            padding: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            borderColor: '#1E90FF',
                            borderWidth: 1,
                            borderRadius: 10,
                            marginBottom: 40,
                            backgroundColor: '#1E90FF',
                            

                        }}>
                            <View style={{
                                width: '20%',
                                height: '100%', 
                                padding: 10
                            }}>
                                <GoogleSvg height="25" width="25" />
                            </View>
                            <View style={{
                                width: '80%',
                                height: '100%', 
                                padding: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'left',
                            }}>
                                <Text style={{color: '#fff'}}>Continue With Google</Text>
                            </View>
                        </View>

                        
                    </View>

                    <View style={{
                        height: 'auto',
                        width: '100%',
                        position: 'relative',
                        backgroundColor: '#fff',
                        color: '#000',
                        overflow: 'scroll',
                        marginBottom: 40
                    }}>
                        <View style={{
                            height: 'auto',
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center', 
                            flexDirection: 'row',
                            borderRadius: 15,
                            backgroundColor: '#efefef',
                            color: '#000',
                            padding: 10,
                            marginBottom: 40,
                            overflow: 'scroll'
                        }}>
                        
                            <TouchableOpacity onPress={e => setInput('email')} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, marginBottom: 3, flexDirection: 'row', color: '#fff', borderRadius: 10, height: 50, width: '48%', backgroundColor: input === 'email' ? '#1E90FF' : '#efefef'}}>
                                <Text  style={{width: 'auto', fontWeight: '700', color: input === 'email' ? '#efefef' : '#1E90FF'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={e => setInput('phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, marginBottom: 3, flexDirection: 'row', color: '#fff', borderRadius: 10, height: 50, width: '48%', backgroundColor: input === 'phone' ? '#1E90FF' : '#efefef'}}>
                                <Text style={{width: 'auto', fontWeight: '700', color: input === 'phone' ? '#efefef' : '#1E90FF'}}>Phone number</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{height: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>

                            
                            {
                                input !== 'phone'
                                ?
                                <>
                                    <View style={{ height: 80, display: 'flex', color: '#000', width: '100%', flexDirection: 'column', marginBottom: 10}}>
                                        <Text style={{width: '100%', color: '#000', marginLeft: 8}}>Email</Text>
                                        <TextInput style={{height: 50, fontFamily: 'Roboto', padding: 10, borderRadius: 10, marginBottom: 2, width: '100%',  backgroundColor: '#efefef'}} defaultValue={email} onChangeText={e => setEmail(e)} name="email"  placeholder="Email"  />
                                        <Text style={{color: '#000', marginBottom: 15, display: emailErr.length > 0 ? 'flex' : 'none', fontSize: 10, paddingLeft: 5, color: 'red'}}>{emailErr}</Text>
                                    </View>
                                </>
                                :
                                <>
                                    <View style={{height: 'auto', width: '100%', display: 'flex', marginBottom: 2,  alignItems: 'flex-start', marginBottom: 19, justifyContent: 'space-between', flexDirection: 'column'}}>
                                        <Text style={{width: '100%', color: '#000', marginLeft: 8}}>Phone number</Text>

                                        <View style={{height: 'auto', width: '100%', display: 'flex', marginBottom: 0,  alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                                            <View style={{display: 'flex', color: '#000', width: '18%', flexDirection: 'column'}}>
                                                <TextInput style={{height: 50, fontFamily: 'Roboto', padding: 10, borderRadius: 10, marginBottom: 2, width: '100%', backgroundColor: '#efefef'}} value="+234"   placeholder="NIG"  />
                                            </View>
                        

                                            <View style={{display: 'flex', color: '#000', width: '80%', flexDirection: 'column'}}>
                                                <TextInput defaultValue={phone} style={{height: 50, fontFamily: 'Roboto', padding: 10, borderRadius: 15, marginBottom: 2, width: '100%', backgroundColor: '#efefef'}} onChangeText={e => setPhone(e)} keyboardType="numeric" name="email"  placeholder="Phone Number"  />
                                            </View>
                                        </View>
                                        <Text style={{color: '#000', marginBottom: 15, display: phoneErr.length > 0 ? 'flex' : 'none', fontSize: 10, paddingLeft: 5, color: 'red'}}>{phoneErr}</Text>

                                    </View>
                                </>
                            }

                            <View style={{ height: 80, display: 'flex', color: '#000', width: '100%', flexDirection: 'column', marginBottom: 10}}>
                                <Text style={{width: '100%', color: '#000', marginLeft: 8}}>Passcode</Text>
                                <TextInput maxLength={6} keyboardType="numeric" style={{height: 50, fontFamily: 'Roboto', padding: 10, borderRadius: 10, marginBottom: 2, width: '100%',  backgroundColor: '#efefef'}} onChangeText={e => setPwd(e)} name="pwd"  placeholder="Passcode"  />
                                <Text style={{color: '#000', marginBottom: 15, display: pwdErr.length > 0 ? 'flex' : 'none', fontSize: 10, paddingLeft: 5, color: 'red'}}>{pwdErr}</Text>
                            </View>

                        </View>
                    </View>

                    
                </ScrollView>

                <View style={{
                    height: 'auto',
                    width: '100%',
                    position: 'relative',
                    backgroundColor: '#fff',
                    color: '#000',
                    padding: 20, 
                    overflow: 'scroll'
                }}>
                    <TouchableOpacity activeOpacity={.6} onPress={e => loginHandler()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, marginBottom: 3, flexDirection: 'row', borderRadius: 15, height: 60, width: '100%', backgroundColor: '#1E90FF'}} >
                        <Text style={{fontWeight: 'bold', borderRadius: 15, color: '#fff', textAlign: 'center', fontSize: 15}}>Login</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={e => navigation.navigate('registration')}  style={{height: 60, width: 'auto', marginTop: 5, marginBottom: 5, display: 'flex', alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'column'}}>
                            
                        <Text style={{height: 'auto', width: 'auto', fontSize: 10, backgroundColor: '#fff', color: '#1E90FF'}}>Don't Have An Account, Register Here</Text>

                    </TouchableOpacity>

                </View>
            </View>
        </>
     );
}
 
export default Login;

const styles = StyleSheet.create({
 
    icon: {
      marginRight: 5,
      
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      fontFamily: 'Roboto',
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },

          overlay: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    modal: {
        height: '100%',
        width: '100%',
        padding: 8,
        backgroundColor: '#fff'
    },

    contactInput: {
        height: 70,
        fontSize: 25,
        backgroundColor: '#fff',
        borderRadius: 2,
        
    },

    input0: {
        width: '85%',
        height: '100%',
        borderWidth: .1, 
        padding: 10,
        fontSize: 20,
        fontWeight: '300',
        position: 'absolute',
        right: 0,
        borderColor: 'rgb(0, 0, 0)'
    },

    input1: {
        width: '70%',
        height: '100%',
        borderWidth: .1, 
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        fontWeight: '300',
        position: 'absolute',
        left: 0,
        borderColor: '#000'
    },

    pay: {
        width: '30%',
        height: '100%',
        position: 'absolute',
        right: 0,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    network: {
        width: '15%',
        height: '100%',
        position: 'absolute',
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    amount: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 5,
        backgroundColor: 'transparent'
    },

    priceTag: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '33%',
        height: 100,
        backgroundColor: '#fff',
    },
    paymentOptions: {
        backgroundColor: '#fff',
        height: 70,
        padding: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 2.5,
        marginVertical: 5,
        marginHorizontal: 10,
        borderColor: '#000',
        borderWidth: 1,
    }
  });