import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View, Linking, Share, Text, TouchableOpacity, PermissionsAndroid, FlatList, Button, Alert } from 'react-native'
import Contacts from 'react-native-contacts';
import ContactSvg from '../../wallet/assets/contact-book-2-svgrepo-com.svg'
import AngleSvg from '../../wallet/assets/angle-right-svgrepo-com.svg'
import PhoneSvg from '../../wallet/assets/phone-svgrepo-com (3).svg'

export default function Invite() {

    const [contacts, setContacts] = useState([]);
    let [search_char, set_search_char] = useState('')

    useEffect(() => {
        requestContactsPermission();
    }, []);

    // Function to request permission on Android
    const requestContactsPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
            title: "Contacts Permission",
            message: "This app would like to view your contacts.",
            buttonPositive: "Allow",
        }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // loadContacts();
        } else {
        console.log("Contacts permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
    };

    // Load contacts
    useEffect(() => {
        Contacts.getAll()
        .then(contacts => {
        setContacts(contacts);
        // console.log(contacts)
        })
        .catch(e => {
        console.log(e);
        });
    }, [])

    
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: 'Download the PayPenz app today and start earning cashback on every transaction! https://www.example.com',
            url: 'https://www.example.com', // Optional URL
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              console.log('Shared with activity type:', result.activityType);
            } else {
              console.log('Shared successfully');
            }
          } else if (result.action === Share.dismissedAction) {
            console.log('Share dismissed');
          }
        } catch (error) {
          Alert.alert('Error', error.message);
        }
    };

    useEffect(() => {
        console.log('search_char: ', search_char)

        if(search_char !== ''){
            let result = contacts.filter(item => item.displayName ? item?.displayName.toLowerCase().indexOf(search_char?.toLowerCase()) > -1 : '')

            // let result = contacts.map(item => console.log(item?.displayName.toLowerCase()))
            setContacts(result)

        }

        
    }, [search_char])
    

  return (
    <>
        <View style={styles.cnt} >
            <Text style={{fontSize: 21, marginLeft: 10, color: '#000', fontWeight: '600', height: 'auto', backgroundColor: '#fff'}}>Invite your friends to start earning</Text>
            <View style={styles.inputCnt}>
                {/* <Text style={styles.label}>Country of residence</Text> */}
                <TextInput style={styles.input} onChangeText={txt=> set_search_char(txt)} placeholder='Search contact here' />
            </View>
            <ScrollView >

                <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.recordID}
                    renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onShare()} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10,  flexDirection: 'row', height: 'auto', width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <ContactSvg width={20} height={20} />
                            </View>
                            <View >
                                <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>{item.displayName}</Text>

                                {item.phoneNumbers.map(phone => (
                                    <View key={phone.id}> 
                                        {/* <View >
                                            <PhoneSvg style={{marginBottom: -12, marginRight: 8}} width={20} height={20} />
                                        </View> */}
                                        <Text>{phone.number}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                         
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                    </TouchableOpacity>
                    )}
                />

                
            </ScrollView>

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
