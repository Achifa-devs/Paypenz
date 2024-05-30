
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
import Home from './android/app/src/wallet/screens/Home';
import store from './redux/store';

function App(){

  const Stack = createNativeStackNavigator();

   
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        
        {/* <FlashMessage position="top" backgroundColor="red" />  */}
        <Stack.Navigator>
          <Stack.Screen name={'user-home'} options={{
            title: 'Home',
            headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'serif',
            display: 'flex',
            width: '100%',
            height: 80,
            padding: 0,
            margin: 0,
            
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000',
            backgroundColor: 'green'
            
            },
            
            
            
          }} component={Home} /> 
        </Stack.Navigator>
        

        
      </NavigationContainer>
    </Provider> 
  );
}



export default App;
