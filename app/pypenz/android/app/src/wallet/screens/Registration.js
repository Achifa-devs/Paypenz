import React, { useRef, useState } from 'react'
import Input from '../components/Registration/TextInput'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PhoneInput from '../components/Registration/Phone';
import Btn from '../components/Registration/Btn';
import FbSvg from '../assets/facebook-3-logo-svgrepo-com.svg';
import GoogleSvg from '../assets/google-icon-logo-svgrepo-com.svg';

export default function Registration() {
    const screenHeight = Dimensions.get('window').height;
    
  return (
    <>
        {/* <View style={{borderTopLeftRadius: 20, */}
            {/* borderTopRightRadius: 20}}> */}
            <ScrollView style={[styles.RegistrationBoard, {height: screenHeight - 150}]} contentContainerStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
 
                



                <View style={{marginBottom: 20, orderTopLeftRadius: 20,
                borderTopRightRadius: 20}}>
                    <View style={{
                        width: '100%',
                        height: 50, 
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 10,
                        borderColor: '#34A853',
                        borderWidth: 1,
                        borderRadius: 10,
                        backgroundColor: '#34A853',
                        

                    }}>
                        <View style={{
                            width: '20%',
                            height: '100%', 
                            padding: 10
                        }}>
                            {/* <GoogleSvg height="25" width="25" /> */}
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

                    <View style={{
                        width: '100%',
                        height: 50, 
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderColor: '#1877F2',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginTop: 10,
                        backgroundColor: '#1877F2'

                    }}>
                        <View style={{
                            width: '20%',
                            height: '100%', 
                            padding: 10
                        }}>
                            {/* <FbSvg height="25" width="25" /> */}
                        </View>
                        <View style={{
                            width: '80%',
                            height: '100%', 
                            padding: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'left',
                        }}>
                            <Text style={{color: '#fff'}}>Continue With Facebook</Text>
                        </View>
                    </View>

                    
                </View>

                <View style={{
                        width: '100%',
                        height: 'auto', 
                        padding: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: 10
                    }}>
                    <Text style={{fontSize: 20, color: '#007FFF'}}>OR</Text>
                </View>
    

                <Input name={'fname'} placeHolder={'First Name'} keyboardType={'text'} label={'First Name'} />
                <Input name={'lname'} placeHolder={'Last Name'} keyboardType={'text'} label={'Last Name'} />
                <Input name={'email'} placeHolder={'Email'} keyboardType={'text'} label={'Email'} />
                
                <PhoneInput />



                

                {/* <View></View> */}

                <Btn title={'Register'} />

                
                <View style={{
                    width: '100%',
                    height: 'auto', 
                    padding: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                  }}>
                    <Text style={{color: '#000'}}>Already Have An Account? Login here</Text>
                </View>
            </ScrollView>
            
        {/* </View> */}
    </>
  )
}


 
const styles = StyleSheet.create({
    RegistrationBoard: {
        width: '100%',
        padding: 15,
        // position: 'absolute', 
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
            

      },
  });
