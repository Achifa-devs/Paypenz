
import React, { 
  useEffect, 
  useState 
} from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { 
  Provider, 
  useSelector 
} from 'react-redux';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import { 
  NavigationContainer 
} from '@react-navigation/native';
import store from './redux/store';
import CookieManager from '@react-native-cookies/cookies';
import MyTab from './android/app/src/wallet/reusables/Tab';
import Auth from './android/app/src/wallet/reusables/Auth';
import Signup from './android/app/src/wallet/screens/Registration';
import Login from './android/app/src/wallet/screens/Login';
import { getData, storeData } from './android/app/src/wallet/reusables/AsyncStore.js';
import axios from 'axios';

function App(){

  

  
   
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        
        {/* <FlashMessage position="top" backgroundColor="red" />  */}

         <NavCnt />
       


      </NavigationContainer>
    </Provider> 
  );
}



export default App;



function NavCnt() {


  let {
    cookie
  }= useSelector(s=> s.cookie)


  let [cookie_, setcookie_] = useState(null)
  useEffect(() => {
    CookieManager.get('https://paypenz.com')
    .then((result) => {
      console.log(result)
      setcookie_(result.jwt_token.value !== null && result.jwt_token.value !=='' ? true : false)
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    async function get_user() {
      let user = await getData('user_id')
      axios.get('http://192.168.234.146:2003/system.user', {params: {user_id: user}})
      .then((result) => {
        let response =   result.data;
        console.log(response)
        storeData('user', JSON.stringify(response)) 
      })  
      .catch(err => console.log(err))
    }    
    get_user() 
  }, [])
  

  let Stack = createNativeStackNavigator()
  
  return(
    <>
       {
          cookie !== true
          ?
            <>
            <Stack.Navigator>
              <Stack.Screen name={'login'} options={{
    
                header: ({navigation}) =>
                (
                  <View style={{ height: 0, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#1E90FF', alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Text style={{fontSize: 30, color: '#fff'}}>
                      Paypenz
                    </Text>
                  </View>
                ),
                            
                            
              }} component={Login} />  
              <Stack.Screen name={'registration'} options={{
    
                header: ({navigation}) =>
                (
                  <View style={{ height: 0, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#1E90FF', alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Text style={{fontSize: 30, color: '#fff'}}>
                      Paypenz
                    </Text>
                  </View>
                ),
                            
                            
              }} component={Signup} />  
            </Stack.Navigator>
            </>
          :
          <MyTab />
        }
    </>
  )
}