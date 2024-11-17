import React from 'react';
import { Text, TextInput, View } from 'react-native';
import NaijaFlagSvg from '../../assets/flag-for-flag-nigeria-svgrepo-com.svg';

export default function PhoneInput({updatePhone}) {
  return (
    <>
        <View>

            <Text style={{height: 'auto', width: '100%', backgroundColor: '#fff', marginTop: 10, marginLeft: 6}}>Phone</Text>
            <View style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    height: 60,
                    width: '97%',
                    margin: 'auto',
                    backgroundColor: '#efefef',
                    borderRadius: 10,

                }}>
                <View style={{
                    width: '20%',
                    height: '100%',
                    backgroundColor: '#efefef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,



                }}>
                    {/* <NaijaFlagSvg height={25} width={25} /> */}
                    <Text>+234</Text>
                </View>
                <View style={{
                    width: '80%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left'

                    
                }}>
                    <TextInput style={{
                        width: '100%',
                        height: '100%', 
                        padding: 10
                    }} keyboardType='number-pad' maxLength={10} placeholder='Phone Number' keyboardAppearance='dark' onChangeText={txt=>updatePhone(txt)} />
                </View>
            </View>
        </View>
    </>
  )
}
