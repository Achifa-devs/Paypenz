import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function Btn({title}) {
  return (
    <>
      <TouchableOpacity style={{
            width: '100%',
            height: 55,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            color: '#fff',
            backgroundColor: '#007FFF',
            marginTop: 20
            
        }}>
        <Text style={{color: '#fff'}}>{title}</Text>
      </TouchableOpacity>
    </>
  )
}
