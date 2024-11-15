import React from 'react'
import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'

export default function ChangePhone() {
    return (
        <>
            <View style={styles.cnt} >
                <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 'auto', backgroundColor: '#fff'}}>Change primary phone number</Text>
    
                <ScrollView >

                    <View style={styles.inputCnt}>
                        <Text style={{fontSize: 16, color: '#000', fontWeight: '400', fontFamily: 'Roboto', height: 'auot', backgroundColor: '#fff'}}>We&apos;ll text you another verification code to your new number to confirm it.</Text>
                    </View>
                    <View style={styles.inputCnt}>
                        <Text style={styles.label}>Primary phone Number</Text>
                        <View style={{flexDirection: 'row', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TextInput style={styles.countryCode} placeholder='+___' value='+234' />
                            <TextInput style={styles.input} placeholder='akpulufabian@gmail.com' />
                        </View>
                    </View>


                    

                </ScrollView>
    
                <View style={{height: 80, padding: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{height: 60, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 8}}>
                        <Text>Send code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
    
    
const styles = StyleSheet.create({
    cnt: {
        width: '100%',
        padding: 10,
        // position: 'absolute', 
        backgroundColor: '#fff',
        height: '100%'
            

        },
        dateInputCnt: {
        width: '100%',
        marginTop: 10, 
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
        },
        countryCode: {
        width: '20%',
        marginTop: 10, 
        borderColor: '#000',
        borderWidth: .7,
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 'auto',
        textAlign: 'center'
            

        },

        inputCnt: {
        width: '100%',
        marginTop: 10, 
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 'auto',
        paddingLeft: 5,
        paddingRight: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // flexDirection: 'row'
        

        },
        input: {
        width: '75%',
        padding: 15,
        // position: 'absolute', 
        backgroundColor: '#fff',
        height: 50,
        borderColor: '#000',
        borderWidth: .7,
        borderRadius: 7

        },

        label: {
        fontFamily: 'Roboto',
        fontSize: 12,
        width: '100%',
        marginLeft: 5,
        fontWeight: '900',
        marginBottom: 1
        }
    });
    