import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Linking, Switch, TextInput, View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import CloseSVG from '../../../wallet/assets/close-square-svgrepo-com.svg'
import ExchangeSvg from '../../../wallet/assets/exchange-2-svgrepo-com.svg'
import currency from '../../currency.json'
import axios from 'axios'
export default function ExchangeAlert() {
    const [url, setUrl] = useState(false);
    const [updatedCurrency, setUpdatedCurrency] = useState([]);

    const [mainCurrencyValue, setMainCurrencyValue] = useState(0);



    const [basecurrencyData, setBasecurrencyData] = useState({value: 0, key: null});
    const [targetcurrencyData, setTargetcurrencyData] = useState({value: 0, key: null});


    
    useEffect(() => {

        axios.get('https://v6.exchangerate-api.com/v6/216986b1f1e78ba902c4d2af/latest/USD')
        .then((result) => {

            let rates = result.data.conversion_rates;
            let arrayFormOfRates = Object.entries(rates).map(([key, value]) => ({ key, value }));

            
            currency.map((currency_data) => {

               arrayFormOfRates.map((rate_data) => {

                    if(currency_data.currency.abbreviation === rate_data.key){
                        setUpdatedCurrency(item => [...item, rate_data])
                    }else{
                        // console.log('cant find currency rates')
                        
                    }
               })
            })
        })
        .catch(err => {
            console.log(err)
        })
       
    }, [])
    
    
    // State to track switch state (on/off)
    const [isEnabled, setIsEnabled] = useState(false);

    // Toggle the switch
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    let [overlay, setOverlay] = useState(false);

    let openModal = (a) => {
        setOverlay(true)
    }
    
    let closeModal = e => {
        setOverlay(false)
    }
    let [currencyId, setCurrencyId] = useState('');


    let [currencySrc, setCurrencySrc] = useState('');
    
    let [baseCurrency, setBaseCurrency] = useState('');
    let [targetCurrency, setTargetCurrency] = useState('');


    useEffect(() => {
        if(currencySrc === 'base'){
            setBaseCurrency(currency.filter(item => item.id === currencyId.id)[0])
        }else{
            setTargetCurrency(currency.filter(item => item.id === currencyId.id)[0])
        }
    }, [currencyId])

    useEffect(() => {
        setBaseCurrency(currency.filter(item => item.id === "1")[0])
        setTargetCurrency(currency.filter(item => item.id === "2")[0])
    }, [])

    useEffect(() => {
        setMainCurrencyValue(updatedCurrency.filter(item => item.key === 'USD')[0]);


    }, [updatedCurrency])

    useEffect(() => {

        if(baseCurrency !== ''){


            if(baseCurrency?.currency?.abbreviation === 'USD'){
                let targetValue = updatedCurrency.filter(item => item.key === targetCurrency?.currency?.abbreviation)[0]?.value;

                setBasecurrencyData({value: 0, key: baseCurrency?.currency?.abbreviation})
                setTargetcurrencyData({value: (targetValue).toFixed(6), key: targetCurrency?.currency?.abbreviation})

            }else{

                let targetValue = updatedCurrency.filter(item => item.key === baseCurrency?.currency?.abbreviation)[0]?.value;

                setBasecurrencyData({value: 0, key: baseCurrency?.currency?.abbreviation})

                setTargetcurrencyData({value: ((1/(targetValue)).toFixed(6)), key: targetCurrency?.currency?.abbreviation})

            }  

           
        }
        // console.log(baseCurrency.currency.abbreviation)
    }, [updatedCurrency,mainCurrencyValue,baseCurrency,targetCurrency]) 
    
    

    
    return (
        <>

            {
                    overlay
                    &&

      
                (
                    <View id='overlay' style={styles.overlay}>
                        <View style={styles.modal}>

                            <View style={{height: 40, width: '100%', paddingLeft: 10, paddingRight: 10, paddingTop: 10}}>
                            <TouchableOpacity onPress={closeModal} style={{width: 50, height: 50}}>
                                <CloseSVG height={25} width={25} />
                            </TouchableOpacity>
                            </View>

                            <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 'auto', backgroundColor: '#fff', padding: 8}}>Choose a currency</Text>
                            
                            <TextInput style={[styles.input, {height: 65, borderRadius: 38, paddingLeft: 25, paddingRight: 25}]} placeholder='Search for a currency / country'/>
                            <Text style={[styles.label, {borderBottomColor: '#000', borderBottomWidth: .5, paddingBottom: 10, marginBottom: 10, marginTop: 25, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}]}>Available currencies</Text>

                            <ScrollView style={{padding: 5}}>
                                


                                {
                                    currency.map((item) => 
                                        <TouchableOpacity onPress={e=> {

                                            currencySrc === 'base'
                                            ?
                                            setCurrencyId({src: 'base', id: item.id})
                                            :
                                            setCurrencyId({src: 'target', id: item.id})

                                            closeModal()
                                        }} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 5, marginBottom: 4, flexDirection: 'row', borderRadius: 10, height: 85, width: '100%', backgroundColor: '#fff'}}>
                                            <View>
                                                <Image src={item.flag_url} style={{width: 50, height: 50, borderRadius: 50, marginRight: 20}} />
                                            </View>
                                            <View>
                                                <Text>{item.currency.abbreviation}</Text>
                                                <Text>{item.currency.name} : {item.country}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }

                                
                            </ScrollView>


                          

                        </View>
                    </View>
                )

            }
            <View style={styles.cnt} >

                <Text style={{fontSize: 30, color: '#000', fontWeight: '600', height: 'auto', backgroundColor: '#fff'}}>Show me the mid-market rate for</Text>
    
                <ScrollView >

                    <View>

                        <View style={styles.inputCnt}>
                            <Text style={styles.label}>Source currency</Text>
                            <TouchableOpacity onPress={e => {
                                setCurrencySrc('base');
                                openModal();
                            }} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 55, width: '100%', backgroundColor: '#fff', borderWidth: 1, borderColor: '#000'}}>
                                {
                                    <>
                                        <View>
                                            <Image src={baseCurrency?.flag_url} style={{width: 35, height: 35, borderRadius: 50, marginRight: 20}} />
                                        </View>
                                        <View>
                                            <Text style={[{color: '#000'}]}> {baseCurrency?.country} - {baseCurrency?.currency?.name}</Text>
                                        </View>
                                    </>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
                            <ExchangeSvg height={35} width={35} />
                        </View>
                        <View style={styles.inputCnt}>
                            <Text style={styles.label}>Target currency</Text>
                            <TouchableOpacity onPress={e => {
                                setCurrencySrc('target');
                                openModal();
                            }} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 55, width: '100%', backgroundColor: '#fff', borderWidth: 1, borderColor: '#000'}}>
                                {
                                    <>
                                        <View>
                                            <Image src={targetCurrency?.flag_url} style={{width: 35, height: 35, borderRadius: 50, marginRight: 20}} />
                                        </View>
                                        <View>
                                            <Text style={[{color: '#000'}]}>{targetCurrency?.country} - {targetCurrency?.currency?.name}</Text>
                                        </View>
                                    </>
                                }
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{height: 390, padding: 8, width: '100%', backgroundColor: '#fff', marginBottom: 10,marginTop: 10}}>
                        <View style={{height: '100%', width: '100%', backgroundColor: '#efefef', borderRadius: 15, display: 'flex', flexDirection: 'column', padding: 22, justifyContent: 'space-between'}}>
                            <View>
                                <Text style={[{color: '#000'}]}> 1 {basecurrencyData.key} = {targetcurrencyData.value} {targetcurrencyData.key}</Text>
                            </View>

                            <View>

                            </View>

                            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#707070', borderTopWidth: 1, paddingTop: 15}}>
                                <Text style={[{color: '#000'}]}>{new Date().toDateString()}</Text>
                                <Text style={[{color: '#000'}]}>Today</Text>
                            </View>

                        </View>

                    </View>

                    

                    <TouchableOpacity onPress={e => navigation.navigate('user-settings-1-phone')} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 0, flexDirection: 'row', borderRadius: 10, height: 75, width: '100%', backgroundColor: '#fff'}}>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{width: '80%'}}> 
                                <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 17, color: '#2e2e2e', fontWeight: '800'}}>Daily updates</Text>
                                <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#6d6d6d'}}>Get daily notification about the USD - NGN exchange rate</Text>
                            </View>
                            
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
                            <View style={{width: '80%'}}> 
                                <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 17, color: '#2e2e2e', fontWeight: '800'}}>Threshold updates</Text>
                                <Text style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: 15, color: '#6d6d6d'}}>Get daily notification when USD - NGN hits a desired threshold.</Text>
                            </View>
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

                <View style={{height: 80, padding: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{height: 60, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 8}}>
                        <Text>Continue</Text>
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
        marginBottom: 5,
        fontWeight: '800'
        },

    overlay: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    modal: {
        height: '100%',
        width: '100%',
        padding: 8,
        backgroundColor: '#fff'
    },

    contactInput: {
        height: 70,
        fontSize: 25,
        backgroundColor: '#fff',
        borderRadius: 2,
        
    },

    input0: {
        width: '85%',
        height: '100%',
        borderWidth: .1, 
        padding: 10,
        fontSize: 20,
        fontWeight: '300',
        position: 'absolute',
        right: 0,
        borderColor: '#000'
    },

    input1: {
        width: '70%',
        height: '100%',
        borderWidth: .1, 
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        fontWeight: '300',
        position: 'absolute',
        left: 0,
        borderColor: '#000'
    },

    pay: {
        width: '30%',
        height: '100%',
        position: 'absolute',
        right: 0,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    network: {
        width: '15%',
        height: '100%',
        position: 'absolute',
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    amount: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 5,
        backgroundColor: 'transparent'
    },

    priceTag: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '33%',
        height: 100,
        backgroundColor: '#fff',
    },

    paymentOptions: {
        backgroundColor: '#fff',
        height: 70,
        padding: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 2.5,
        marginVertical: 5,
        marginHorizontal: 10,
        borderColor: '#000',
        borderWidth: 1,
    }
});
    