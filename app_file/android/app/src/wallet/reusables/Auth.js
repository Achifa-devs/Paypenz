
import * as React from 'react';
import { 
    Dimensions,
    Image,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View 
} from 'react-native';

import { 
    createBottomTabNavigator 
} from "@react-navigation/bottom-tabs";
import { 
    useDispatch, 
    useSelector 
} from 'react-redux';

import BackSvg from '../assets/back-svgrepo-com (4).svg'
import BellSvg from '../assets/notification-svgrepo-com (1).svg'
import SettingSvg from '../assets/settings-svgrepo-com (8).svg'

import Home from '../screens/Home';
import Me from '../screens/Me';
import Cards from '../screens/Cards';
import Airtime from '../screens/secondary/Airtime';
import Data from '../screens/secondary/Data';
import Electricity from '../screens/secondary/Electricity';
import TV from '../screens/secondary/Tv';
import GiftCard from '../screens/secondary/GiftCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transfer from '../screens/secondary/Transfer';
import Deposit from '../screens/secondary/Deposit';
import Withdraw from '../screens/secondary/Withdraw';
import { useNavigationState } from '@react-navigation/native';
import PersonalData from '../screens/PersonalData';
import Invite from '../screens/Invite';
import Setting from '../screens/Setting';
import AccountSecurity from '../screens/Settings/AccountSecurity&Privacy';
import ChangeEmail from '../screens/Settings/AccountSecurity/ChangeEmail';
import ChangePhone from '../screens/Settings/AccountSecurity/ChangePhone';
import ChangePwd from '../screens/Settings/AccountSecurity/ChangePwd';
import Verification from '../screens/Settings/AccountSecurity/Verification';
import Logout from '../screens/Settings/AccountSecurity/Logout';
import ConnectedServices from '../screens/Settings/AccountSecurity/ConnectedServices';
import Notification from '../screens/Settings/Notification';
import ExchangeAlert from '../screens/Settings/ExchangeAlert';
import Signup from '../screens/Registration';
import Login from '../screens/Login';
// import { ws } from '../../../../utils/socket';
// import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function Auth() {

    const navigationState = useNavigationState(state => state);

    React.useEffect(() => {
        console.log('Current Navigation State:', navigationState);
    }, [navigationState]);

  return (
    <>
        <Tab.Navigator
        
        screenOptions={({ route }) => {
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            }

            const tabBarStyle = {
                display: 'none'
            };
            
           
            // You can return any component that you like here!
            // return <Icon name={iconName} size={size} color={color} />;

            return {
                tabBarStyle,
                headerShown: false,
            }
        }}

        
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        > 
            <Tab.Screen 

                options={{
                    header: ({navigation}) =>
                    (
                        <View style={{ height: 100, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#1E90FF', alignItems: 'center', justifyContent: 'center'}}>
                        
                            <Text style={{fontSize: 30, color: '#fff'}}>
                                Paypenz
                            </Text>
                        </View>
                    )
                }}
                name="registration" 
                component={Signup} />

            <Tab.Screen 

                options={{
                    header: ({navigation}) =>
                    (
                        <View style={{ height: 100, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#1E90FF', alignItems: 'center', justifyContent: 'center'}}>
                        
                            <Text style={{fontSize: 30, color: '#fff'}}>
                                Paypenz
                            </Text>
                        </View>
                    )
                }} 
                name="login" 
                component={Login} />

        </Tab.Navigator>
    </>
  )
}


