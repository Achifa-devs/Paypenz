import React, { useState } from 'react'
import { ScrollView, StyleSheet, Linking, Switch, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native'
import FaSvg from '../../../wallet/assets/two-factor-authentication-svgrepo-com.svg'
import DailPadSvg from '../../../wallet/assets/dialpad-svgrepo-com.svg'
import PwdSvg from '../../../wallet/assets/password-svgrepo-com (1).svg'
import EmailSvg from '../../../wallet/assets/email-svgrepo-com (2).svg'
import PhoneSvg from '../../../wallet/assets/phone-svgrepo-com (4).svg'
import LogoutSvg from '../../../wallet/assets/logout-svgrepo-com (1).svg'
import SyncSvg from '../../../wallet/assets/add-contact-svgrepo-com.svg'
import BellSvg from '../../../wallet/assets/bell-svgrepo-com (3).svg'
import AngleSvg from '../../../wallet/assets/angle-right-svgrepo-com.svg'
import LinkSvg from '../../../wallet/assets/link-square-svgrepo-com (1).svg'

export default function Notification() {

    
    // State to track switch state (on/off)
  const [isEnabled, setIsEnabled] = useState(false);

  // Toggle the switch
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
        <View style={styles.cnt}>

            <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 60, backgroundColor: '#fff'}}>Notification</Text>
 
            <ScrollView >
                <Text style={[styles.label, {paddingBottom: 10, fontSize: 16, marginBottom: 10, marginTop: 25, color: '#000', fontWeight: '300', lineHeight: 25}]}>Get notified about important updates and spot any suspicious account activity.</Text>

                <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 125, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <BellSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Allow notifications</Text>
                        
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




                <View style={{padding: 10}}>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 17, color: '#000', marginBottom: 10, marginTop: 25, fontWeight: '800'}]}>Your transfer and balances</Text>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 15, color: '#000', marginBottom: 10, marginTop: -5, fontWeight: '300'}]}>Notification about where your money is.</Text>

                </View>
                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-email')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <EmailSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Email</Text>
                        
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

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <PhoneSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Push</Text>
                        
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

                <View style={{padding: 10}}>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 17, color: '#000', marginBottom: 10, marginTop: 25, fontWeight: '800'}]}>Your debit card</Text>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 15, color: '#000', marginBottom: 10, marginTop: -5, fontWeight: '300'}]}>Notification about your card transactions.</Text>

                </View>
                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-email')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <EmailSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Email</Text>
                        
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

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <PhoneSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Push</Text>
                        
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




                <View style={{padding: 10}}>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 17, color: '#000', marginBottom: 10, marginTop: 25, fontWeight: '800'}]}>Currencies and features</Text>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 15, color: '#000', marginBottom: 10, marginTop: -5, fontWeight: '300'}]}>New about our latest and greatest work. Plus tips on using Paypenz.</Text>

                </View>
                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-email')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <EmailSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Email</Text>
                        
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

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <PhoneSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Push</Text>
                        
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


                <View style={{padding: 10}}>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 17, color: '#000', marginBottom: 10, marginTop: 25, fontWeight: '800'}]}>Interviews, Reviews and Surveys</Text>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 15, color: '#000', marginBottom: 10, marginTop: -5, fontWeight: '300'}]}>Invites to test new product and sharre your thoughts.</Text>

                </View>
                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-email')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <EmailSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Email</Text>
                        
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

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <PhoneSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Push</Text>
                        
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


                <View style={{padding: 10}}>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 17, color: '#000', marginBottom: 10, marginTop: 25, fontWeight: '800'}]}>Our campaigns</Text>
                    <Text style={[styles.label, {paddingBottom: 10, fontSize: 15, color: '#000', marginBottom: 10, marginTop: -5, fontWeight: '300'}]}>Updates about causes we care about. Chances to get involved.</Text>

                </View>
                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-email')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <EmailSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Email</Text>
                        
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

                <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                            <PhoneSvg width={25} height={25} />
                        </View>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Push</Text>
                        
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