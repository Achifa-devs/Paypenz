import React from 'react'
import { Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Input({name,setValue,placeHolder,keyboardType,label}) {
  return (
    <>
      <View style={{
                display: 'flex',
                flexDirection: 'column',
                height: 80,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'left',
                backgroundColor: '#fff',
                marginBottom: 5,
                
                padding: 10,
                position: 'relative'

            }}>
        <Text style={{height: 'auto', width: '100%', backgroundColor: '#fff'}}> {label}</Text>

        <View style={{height: 55, width: '100%',}}> 
            <TextInput style={{height: '100%', width: '100%', padding: 20, backgroundColor: '#efefef', borderRadius: 10,}} name={name} placeHolder={placeHolder} keyboardType={keyboardType} onChangeText={text => setValue(text)}></TextInput>
        </View>
      </View>
    </>
  )
}
