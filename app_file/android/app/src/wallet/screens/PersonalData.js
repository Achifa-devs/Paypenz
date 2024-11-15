import React from 'react'
import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'

export default function PersonalData() {
  return (
    <>
        <View style={styles.cnt} >
            <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 60, backgroundColor: '#fff'}}>Tell us about yourself</Text>

            <ScrollView >
                <View style={styles.inputCnt}>
                    <Text style={styles.label}>Country of residence</Text>
                    <TextInput style={styles.input} />
                </View>


                <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: .5, paddingBottom: 10, marginBottom: 10, marginTop: 25}]}>Personal Details</Text>
                <View style={styles.inputCnt}>
                    <Text style={styles.label}>First and Middle Name</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputCnt}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={[styles.label, {marginLeft: 15, marginBottom: -12, margintTop: 10}]}>Date Of Birth</Text>

                    <View style={[styles.dateInputCnt, {padding: 10}]}>
                        <View style={styles.dateInput}>
                            <Text style={styles.label}>Date</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.dateInput}>
                            <Text style={styles.label}>Month</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.dateInput}>
                            <Text style={styles.label}>Year</Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                </View>

                <View style={styles.inputCnt}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput style={styles.input} />
                </View>

                {/* <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: 1}]}>Change phone number</Text> */}


                <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: .5, paddingBottom: 10, marginBottom: 10, marginTop: 25}]}>Address</Text>

                <View style={styles.inputCnt}>
                    <Text style={styles.label}>Home address</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputCnt}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputCnt}>
                    <Text style={styles.label}>Postal code</Text>
                    <TextInput style={styles.input} />
                </View>
            </ScrollView>

            <View style={{height: 80, padding: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{height: 60, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 8}}>
                    <Text>Save</Text>
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
        marginLeft: 5,
        fontWeight: '800'
      }
  });
