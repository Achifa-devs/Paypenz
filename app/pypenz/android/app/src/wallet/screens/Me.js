import React from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function Me() {
  const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <ScrollView style={{
                height: screenHeight - 160,
                width: '100%',
                position: 'relative',
                padding: 10,
                // backgroundColor: '#fff',
                color: '#000',
                overflow: 'scroll',
                backgroundColor: '#efefef'
            }}>

                <View>
                    <View style={{height: 50, width: '100%', fontFamily: 'serif', display: 'flex', fontSize: 18, alignItems: 'center', justifyContent: 'left', paddingLeft: 20, flexDirection: 'row', backgroundColor: '#efefef'}}>
                        <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold', fontFamily: 'serif'}}>My Profile</Text>

                    </View>

                    <View> 
                        <TouchableOpacity onPress={e => navigation.navigate('buyer-history')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, marginBottom: 3, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 500, fontSize: 15, color: '#000'}}>Personal Data</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={e => navigation.navigate('buyer-interest')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, marginBottom: 3, flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 500, fontSize: 15, color: '#000'}}>My Interest</Text>
                            <Image style={styles.icons} source={require('../assets/right-arrow.png')} />
                        </TouchableOpacity> */}

                        <TouchableOpacity onPress={e => navigation.navigate('buyer-savedList')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, marginBottom: 3, flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 500, fontSize: 15, color: '#000'}}>Linked Banks / Cards</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={e => navigation.navigate('buyer-invites')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20,  flexDirection: 'row',  borderBottomLeftRadius: 10, borderBottomRightRadius: 10,  height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 500, fontSize: 15, color: '#000'}}>Invite Friends</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>
                    </View>

                </View>

                <View>

                    <View style={{height: 50, width: '100%', fontFamily: 'serif', display: 'flex', fontSize: 18, alignItems: 'center', justifyContent: 'left', paddingLeft: 20, flexDirection: 'row', backgroundColor: '#f9f9f9'}}>
                        <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold', fontFamily: 'serif'}}>Settings</Text>

                    </View>

                    <View> 
                        <TouchableOpacity onPress={e => navigation.navigate('buyer-preference')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, marginBottom: 3, borderTopLeftRadius: 10, borderTopRightRadius: 10, flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 500, fontSize: 15, color: '#000'}}>Account Limit</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('buyer-account')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, marginBottom: 3, flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 500, fontSize: 15, color: '#000'}}>Verification</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('buyer-account')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, flexDirection: 'row',  borderBottomLeftRadius: 10, borderBottomRightRadius: 10,  height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 500, fontSize: 15, color: '#000'}}>Acccount</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>
                        
                    </View>

                </View>

                <View>
                
                    <View style={{height: 50, width: '100%', fontFamily: 'serif', display: 'flex', fontSize: 18, alignItems: 'center', justifyContent: 'left', paddingLeft: 20, flexDirection: 'row', backgroundColor: '#f9f9f9'}}>
                        <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold', fontFamily: 'serif'}}>Resources</Text>

                    </View>

                    <View> 
                        <TouchableOpacity onPress={e => navigation.navigate('buyer-support')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, marginBottom: 3, borderTopLeftRadius: 10, borderTopRightRadius: 10, flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 400, fontSize: 15, color: '#000'}}>Support</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('buyer-community/legal')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', padding: 20, marginBottom: 3, flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 400, fontSize: 15, color: '#000'}}>Rate Us</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('buyer-community/legal')} style={{display: 'flex', alignItems: 'center', justifyContent: 'left', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 20, marginBottom: 3, flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#fff'}}>
                            <Text style={{fontFamily: 'serif', fontWeight: 400, fontSize: 15, color: '#000'}}>Community and Legal</Text>
                            {/* <Image style={styles.icons} source={require('../../assets/right-arrow.png')} /> */}
                        </TouchableOpacity>
                        
                    </View>

                </View>

                <View style={{height: 50, textAlign: 'center', width: '100%', fontFamily: 'serif', display: 'flex', fontSize: 18, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#f9f9f9'}}>
                    <Text style={{fontSize: 15, color: '#000', color: '#727272', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontFamily: 'serif'}}>V 1.1.0</Text>

                </View>
                <View style={{height: 50, textAlign: 'center', width: '100%', fontFamily: 'serif', display: 'flex', fontSize: 18, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#f9f9f9'}}>

                </View>
                
            </ScrollView>
    </>
  )
}
