import React from 'react'
import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import BellSvg from '../../wallet/assets/bell-svgrepo-com (3).svg'
import CloseSvg from '../../wallet/assets/close-circle-svgrepo-com.svg'
import RateSvg from '../../wallet/assets/exchange-diagonal-svgrepo-com.svg'
import LinkSvg from '../../wallet/assets/link-square-svgrepo-com (1).svg'
import ShieldSvg from '../../wallet/assets/shield-minimalistic-svgrepo-com.svg'
import BookSvg from '../../wallet/assets/book-svgrepo-com (1).svg'
import ApperanceSvg from '../../wallet/assets/contrast-907-svgrepo-com.svg'
import AngleSvg from '../../wallet/assets/angle-right-svgrepo-com.svg'
import RatingSvg from '../../wallet/assets/star-rating-svgrepo-com (1).svg'

export default function Setting({navigation}) {
    return (
        <>
            <View style={styles.cnt} >
                <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 60, backgroundColor: '#fff'}}>Settings</Text>
    
                <ScrollView >
                    <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: .5, paddingBottom: 10, marginBottom: 10, marginTop: 25}]}>General</Text>

                    <TouchableOpacity onPress={e => navigation.navigate('user-settings-1')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <ShieldSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Account security & privacy</Text>
                            
                        </View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                       
                    </TouchableOpacity>

                    <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <BellSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Notification</Text>
                            
                        </View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                       
                    </TouchableOpacity>

                    <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <RateSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Exchange rates alert</Text>
                            
                        </View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                       
                    </TouchableOpacity>

                    <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <LinkSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Connected accounts</Text>
                            
                        </View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                       
                    </TouchableOpacity>

                    <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <ApperanceSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Appearance</Text>
                            
                        </View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                       
                    </TouchableOpacity>




                    <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <CloseSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Close account</Text>
                            
                        </View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                       
                    </TouchableOpacity>

                    
                    <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: .5, paddingBottom: 10, marginBottom: 10, marginTop: 25}]}>More</Text>

                    <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <RatingSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>Rate Us</Text>
                            
                        </View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff', borderRadius: 50, padding: 5}}>
                            <AngleSvg width={35} height={35} />
                        </View>
                       
                    </TouchableOpacity>

                    <TouchableOpacity onPress={e => navigation.navigate('user-data')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 10}}>
                                <BookSvg width={25} height={25} />
                            </View>
                            <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#000'}}>About Us</Text>
                            
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
    
