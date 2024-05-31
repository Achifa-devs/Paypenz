
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
import Home from './android/app/src/wallet/components/Home/Tab';
import MyTab from './android/app/src/wallet/components/Home/Tab';
import Cards from './android/app/src/wallet/screens/Cards';
import WelcomeScreen from './android/app/src/wallet/screens/WelcomeScreen';
import Registration from './android/app/src/wallet/screens/Registration';

function App(){

  const Stack = createNativeStackNavigator();

   
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        
        {/* <FlashMessage position="top" backgroundColor="red" />  */}

        <Stack.Navigator>
          <Stack.Screen name={'user-registration'} options={{
 
            header: ({navigation}) =>
            (
                <View style={{ height: 100, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#007FFF', alignItems: 'center', justifyContent: 'center'}}>
                  
                
                </View>
            ),
                        
                        
          }} component={Registration} />  
        </Stack.Navigator>

        {/* <MyTab /> */}

        


        
      </NavigationContainer>
    </Provider> 
  );
}



export default App;
