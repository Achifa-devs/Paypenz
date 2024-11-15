import React from 'react'
import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'

export default function ChangePwd() {
    return (
        <>
            <View style={styles.cnt} >
                <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 60, backgroundColor: '#fff'}}>Change password</Text>
    
                <ScrollView >

                    <View style={[styles.inputCnt, {backgroundColor: '#f7f7f7', paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20, borderRadius: 10}]}>
                        <Text style={{fontSize: 16, color: '#000', fontWeight: '400', fontFamily: 'Roboto', height: 'auto'}}>We will never send you a temporary password by phone, email or text message. When changing your password, always use something that&apos;s only known to you.</Text>
                        <Text style={{fontSize: 16, marginTop: 10, color: '#000', fontWeight: '400', fontFamily: 'Roboto', height: 'auto', textDecorationLine: 'underline'}}>Learn to keep your account safe.</Text>
                    </View>
                    <View style={styles.inputCnt}>
                        <Text style={styles.label}>Current password</Text>
                        <TextInput style={styles.input} placeholder='Current Password' />
                    </View>

                    <View style={styles.inputCnt}>
                        <Text style={styles.label}>New password</Text>
                        <TextInput style={styles.input} placeholder='New Password' />
                    </View>

                    

                </ScrollView>
    
                <View style={{height: 80, padding: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{height: 60, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 8}}>
                        <Text>Change password</Text>
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
        dateInput: {
        width: '30%',
        marginTop: 10, 
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 'auto'
            

        },

        inputCnt: {
        width: '100%',
        marginTop: 10, 
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 'auto',
        paddingLeft: 8,
        paddingRight: 8,
        

        },
        input: {
        width: '100%',
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
        marginLeft: 3.5,
        fontWeight: '800',
        marginBottom: 5
        }
    });
    