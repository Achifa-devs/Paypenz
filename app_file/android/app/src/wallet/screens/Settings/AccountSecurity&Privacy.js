import React, { useState } from 'react'
import { ScrollView, StyleSheet, Linking, Switch, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native'
import FaSvg from '../../../wallet/assets/two-factor-authentication-svgrepo-com.svg'
import DailPadSvg from '../../../wallet/assets/dialpad-svgrepo-com.svg'
import PwdSvg from '../../../wallet/assets/password-svgrepo-com (1).svg'
import EmailSvg from '../../../wallet/assets/email-svgrepo-com (2).svg'
import PhoneSvg from '../../../wallet/assets/phone-svgrepo-com (4).svg'
import LogoutSvg from '../../../wallet/assets/logout-svgrepo-com (1).svg'
import SyncSvg from '../../../wallet/assets/add-contact-svgrepo-com.svg'
import InfoSvg from '../../../wallet/assets/info-circle-svgrepo-com.svg'
import AngleSvg from '../../../wallet/assets/angle-right-svgrepo-com.svg'
import LinkSvg from '../../../wallet/assets/link-square-svgrepo-com (1).svg'
import InAppBrowser from 'react-native-inappbrowser-reborn';
export default function AccountSecurity({navigation}) {

    const openInAppBrowser = async () => {
        const url = 'https://www.example.com';
    
        if (await InAppBrowser.isAvailable()) {
          InAppBrowser.open(url, {
            // Customization options
            dismissButtonStyle: 'cancel',
            preferredBarTintColor: '#6200EE',
            preferredControlTintColor: 'white',
            readerMode: false,
            animated: true,
            modalPresentationStyle: 'fullScreen',
            enableBarCollapsing: true,
          });
        } else {
          // Fallback to Linking if InAppBrowser is unavailable
          Linking.openURL(url);
        }
    };
    

    // State to track switch state (on/off)
  const [isEnabled, setIsEnabled] = useState(false);

  // Toggle the switch
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
    <>
        <View style={styles.cnt}>

            <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 60, backgroundColor: '#fff'}}>Account Security & Privacy</Text>
 
            <ScrollView >
                <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: .5, paddingBottom: 10, marginBottom: 10, marginTop: 25}]}>Security</Text>

                <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <DailPadSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>App security</Text>
                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-email')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <EmailSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Change email</Text>
                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <PhoneSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Change primary phone number</Text>
                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-connected-services')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <LinkSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Connected services</Text>
                         
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-password')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <PwdSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Change password</Text>
                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity>




                {/* <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-verification')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <FaSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>2 step verification</Text>
                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity> */}

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-logout')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <LogoutSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Log out everywhere</Text>
                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity>

                
                <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: .5, paddingBottom: 10, marginBottom: 10, marginTop: 25}]}>Privacy</Text>

                <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <SyncSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Sync your contact</Text>

                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <Switch
                            
                            trackColor={{ false: '#767577', true: '#81b0ff' }} // Customize colors
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}   // Thumb color
                            ios_backgroundColor="#3e3e3e"                    // iOS background color
                            onValueChange={toggleSwitch}                    // Function to call on toggle
                            value={isEnabled}    
                            
                        />
                    
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={openInAppBrowser} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <InfoSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Privacy policy</Text>
                        
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                        <AngleSvg width={35} height={35} />
                    </View>
                    
                </TouchableOpacity>

                
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
    
