import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BalanceValue() {
  return (
    <>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={{fontSize: 15, color: '#fff', width: 'auto', left: 0, bottom: 12}}>
            &#8358; &nbsp;
        </Text>
        <Text style={styles.BalanceValue}>
            0.00
        </Text>
      </View>
    </>
  )
}




const styles = StyleSheet.create({
    BalanceValue: {
      height: '100%',
      width: 'auto',
      fontSize: 55,
    color: '#fff',

        textAlign: 'center',
    },
    
  });
  