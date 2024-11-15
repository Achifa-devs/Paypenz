
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
import BackSvg from '../../assets/back-svgrepo-com (4).svg'
import BellSvg from '../../assets/notification-svgrepo-com (1).svg'
import SettingSvg from '../../assets/settings-svgrepo-com (8).svg'

import Home from '../../screens/Home';
import Me from '../../screens/Me';
import Cards from '../../screens/Cards';
import Airtime from '../../screens/secondary/Airtime';
import Data from '../../screens/secondary/Data';
import Electricity from '../../screens/secondary/Electricity';
import TV from '../../screens/secondary/Tv';
import GiftCard from '../../screens/secondary/GiftCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transfer from '../../screens/secondary/Transfer';
import Deposit from '../../screens/secondary/Deposit';
import Withdraw from '../../screens/secondary/Withdraw';
import { useNavigationState } from '@react-navigation/native';
import PersonalData from '../../screens/PersonalData';
import Invite from '../../screens/Invite';
import Setting from '../../screens/Setting';
// import { ws } from '../../../../../utils/socket';
// import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function MyTab() {

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
                display: 'flex',
            };
            
            if (route.name === 'tab-home') {
                const currentRouteName = navigationState?.routes.find(r => r.name === 'tab-home')?.state?.routes[navigationState.routes.find(r => r.name === 'tab-home')?.state.index].name;
                console.log('Current MessageStack Route:', currentRouteName);

                if (currentRouteName !== 'user-home') {
                    tabBarStyle.display = 'none';
                } 
            }else if(route.name === 'tab-data'){
                const currentRouteName = navigationState?.routes.find(r => r.name === 'tab-home')?.state?.routes[navigationState.routes.find(r => r.name === 'tab-home')?.state.index].name;
                console.log('Current MessageStack Route:', currentRouteName);

                if (currentRouteName !== 'user-profile') {
                    tabBarStyle.display = 'none';
                } 
            }

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
                        <View style={{ height: 55, display: 'none', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#710193', alignItems: 'center', padding: '10px'}}>

                            <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                                <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10}}></View>
                                <Text>&nbsp;</Text>
                                <Text>Akpulu.F</Text>
                            </View>

                            <View>
                                <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                                    <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10}}>

                                    </View>
                                </View>
                            </View>
                            
                        </View>
                    ),
                }}
                name="tab-home" 
                component={HomeStackScreen} />

            <Tab.Screen 

                options={{
                    header: ({navigation}) => 
                        (
                            <View style={{ height: 0, display: 'none', flexDirection: 'row', width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
                            
                            </View>
                        ),
                }} 
                name="tab-card" 
                component={Cards} />

            <Tab.Screen 

                options={{
                    header: ({navigation}) => 
                        (
                            <View style={{ height: 0, display: 'none', flexDirection: 'row', width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
                            
                            </View>
                        ),
                }} 
                name="tab-rewards" 
                component={''} />

            <Tab.Screen 

                options={{
                header: ({navigation}) =>
                    (
                        <View style={{ height: 200, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#007FFF', alignItems: 'center', justifyContent: 'center'}}>
                        
                            
                        </View>
                    ),
                }} 
                name="tab-data" 
                component={MeStackScreen} />

        </Tab.Navigator>
    </>
  )
}


const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen  options={{
                header: ({navigation}) =>
                (
                    <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', padding: '10px'}}>
                        
                        <TouchableOpacity style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                        <View style={{backgroundColor: '#FF4500', height: '100%', width: 40, borderRadius: 10}}></View>
                        <Text>&nbsp;</Text>
                        <Text>Akpulu.F</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('user-notification')}>
                        <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                            <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10, padding: 4}}> 
                                <Text style={{backgroundColor: 'hsl(14.086956521739133, 100%, 54.90196078431373%);', height: 'auto', display: 'flex', flexDirection: 'row',width: 'fit-content', alignItems: 'center' ,justifyContent: 'center', position: 'absolute', color: '#fff', left: -8, top: -2.5, borderRadius: 15, borderRadius: 10, fontSize: 10, padding: 3.5}}>20</Text>
                                <BellSvg width={'100%'} height={'100%'} />
                            </View>
                        </View>   
                        </TouchableOpacity>
                    </View>
                ),
            // headerShown: false, 
        }}  name="user-home" component={Home} />

        <HomeStack.Screen  options={{
                header: ({navigation}) =>
                (
                    <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', padding: '10px'}}>
                        
                        <TouchableOpacity style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                        <View style={{backgroundColor: '#FF4500', height: '100%', width: 40, borderRadius: 10}}></View>
                        <Text>&nbsp;</Text>
                        <Text>Akpulu.F</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('user-notification')}>
                        <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                            <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10, padding: 4}}> 
                                <Text style={{backgroundColor: 'hsl(14.086956521739133, 100%, 54.90196078431373%);', height: 'auto', display: 'flex', flexDirection: 'row',width: 'fit-content', alignItems: 'center' ,justifyContent: 'center', position: 'absolute', color: '#fff', left: -8, top: -2.5, borderRadius: 15, borderRadius: 10, fontSize: 10, padding: 3.5}}>20</Text>
                                <BellSvg width={'100%'} height={'100%'} />
                            </View>
                        </View>   
                        </TouchableOpacity>
                    </View>
                ),
            // headerShown: false, 
        }}  name="user-transfer" component={Transfer} />

        <HomeStack.Screen  options={{
                header: ({navigation}) =>
                (
                    <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', padding: '10px'}}>
                        
                        <TouchableOpacity style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                        <View style={{backgroundColor: '#FF4500', height: '100%', width: 40, borderRadius: 10}}></View>
                        <Text>&nbsp;</Text>
                        <Text>Akpulu.F</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('user-notification')}>
                        <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                            <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10, padding: 4}}> 
                                <Text style={{backgroundColor: 'hsl(14.086956521739133, 100%, 54.90196078431373%);', height: 'auto', display: 'flex', flexDirection: 'row',width: 'fit-content', alignItems: 'center' ,justifyContent: 'center', position: 'absolute', color: '#fff', left: -8, top: -2.5, borderRadius: 15, borderRadius: 10, fontSize: 10, padding: 3.5}}>20</Text>
                                <BellSvg width={'100%'} height={'100%'} />
                            </View>
                        </View>   
                        </TouchableOpacity>
                    </View>
                ),
            // headerShown: false, 
        }}  name="user-withdraw" component={Withdraw} />
 
        <HomeStack.Screen  options={{
                header: ({navigation}) =>
                (
                    <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', padding: '10px'}}>
                        
                        <TouchableOpacity style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                        <View style={{backgroundColor: '#FF4500', height: '100%', width: 40, borderRadius: 10}}></View>
                        <Text>&nbsp;</Text>
                        <Text>Akpulu.F</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('user-notification')}>
                        <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                            <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10, padding: 4}}> 
                                <Text style={{backgroundColor: 'hsl(14.086956521739133, 100%, 54.90196078431373%);', height: 'auto', display: 'flex', flexDirection: 'row',width: 'fit-content', alignItems: 'center' ,justifyContent: 'center', position: 'absolute', color: '#fff', left: -8, top: -2.5, borderRadius: 15, borderRadius: 10, fontSize: 10, padding: 3.5}}>20</Text>
                                <BellSvg width={'100%'} height={'100%'} />
                            </View>
                        </View>   
                        </TouchableOpacity>
                    </View>
                ),
            // headerShown: false, 
        }}  name="user-deposit" component={Deposit} />

        <HomeStack.Screen  options={{
                header: ({navigation}) =>
                (
                    <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', padding: '10px'}}>
                        
                        <TouchableOpacity style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                        <View style={{backgroundColor: '#FF4500', height: '100%', width: 40, borderRadius: 10}}></View>
                        <Text>&nbsp;</Text>
                        <Text>Akpulu.F</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e => navigation.navigate('user-notification')}>
                        <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                            <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10, padding: 4}}> 
                                <Text style={{backgroundColor: 'hsl(14.086956521739133, 100%, 54.90196078431373%);', height: 'auto', display: 'flex', flexDirection: 'row',width: 'fit-content', alignItems: 'center' ,justifyContent: 'center', position: 'absolute', color: '#fff', left: -8, top: -2.5, borderRadius: 15, borderRadius: 10, fontSize: 10, padding: 3.5}}>20</Text>
                                <BellSvg width={'100%'} height={'100%'} />
                            </View>
                        </View>   
                        </TouchableOpacity>
                    </View>
                ),
            // headerShown: false, 
        }}  name="user-history" component={''} />
        
        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'none', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px', margin: '0'}}>

                </View>
            ),
            // headerShown: false, 
        }}  name="user-airtime" component={Airtime} />
        
        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false, 
        }}  name="user-data" component={Data} /> 

        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false,  
        }}  name="user-electricity" component={Electricity} />

        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false,  
        }}  name="user-tv" component={TV} />

        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false,  
        }}  name="user-gift-card" component={GiftCard} />

        {/* <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false,  
        }}  name="user-betting" component={Betting} />

        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false,  
        }}  name="user-cable" component={Cable} />

        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false,  
        }}  name="user-school" component={School} />

        <HomeStack.Screen  options={{
            header: ({navigation}) =>
            (
                <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#fff', alignItems: 'center', padding: '10px'}}>

                </View>
            ), 
            // headerShown: false,  
        }}  name="user-internet" component={Internet} />
 */}

    </HomeStack.Navigator>
  );
}   



const MeStack = createNativeStackNavigator();
function MeStackScreen() {
  return (
    <MeStack.Navigator>
        <MeStack.Screen  options={{
                header: ({navigation}) =>
                (

                    <>
                        <View style={{ height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', paddingLeft: 25, paddingRight: 25}}>
                            <TouchableOpacity onPress={e => navigation.navigate('user-setting')} style={{marginLeft: -18}}>
                                <View style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'auto', padding: 8, alignItems: 'flex-end'}}>
                                    <View style={{backgroundColor: '#fff', height: '100%', width: 40, borderRadius: 10, padding: 4}}> 
                                        <SettingSvg width={'100%'} height={'100%'} />
                                        <Text style={{backgroundColor: 'hsl(14.086956521739133, 100%, 54.90196078431373%);', height: 'auto', display: 'flex', flexDirection: 'row',width: 'fit-content', alignItems: 'center' ,justifyContent: 'center', position: 'absolute', color: '#fff', right: -8, top: -2.5, borderRadius: 15, borderRadius: 10, fontSize: 10, padding: 3.5}}>20</Text>
                                    </View>
                                </View>   
                            </TouchableOpacity>
                            <Text>Profile</Text>
                            <TouchableOpacity>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', padding: 20}}>
                            
                            
                            <View style={{ height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 80, borderRadius: 50, backgroundColor: '#000', alignItems: 'center', padding: 20, marginBottom: 10}}>

                            </View>

                            <View>
                                <Text>Chinedu Fabian</Text>
                                <Text>@achifa2003</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{borderWidth: 2,borderColor: '#efefef', padding: 8, borderRadius: 10, marginTop: 10}}>
                                    <Text>Upgrade to premium</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                ),
            // headerShown: false, 
        }}  name="user-profile" component={Me} />

        
        <MeStack.Screen  options={{
                header: ({navigation}) =>
                (

                    <>
                        <View style={{ height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', paddingLeft: 15, paddingRight: 25}}>
                            <TouchableOpacity style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 5}}>
                                <BackSvg width={22} height={22} />
                            </TouchableOpacity>
                            
                        </View>
                       
                    </>
                ),
            // headerShown: false, 
        }}  name="user-data" component={PersonalData} />

        <MeStack.Screen  options={{
                header: ({navigation}) =>
                (

                    <>
                        <View style={{ height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', paddingLeft: 15, paddingRight: 25}}>
                            <TouchableOpacity style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 5}}>
                                <BackSvg width={22} height={22} />
                            </TouchableOpacity>
                            
                        </View>
                       
                    </>
                ),
            // headerShown: false, 
        }}  name="user-invite" component={Invite} />

        <MeStack.Screen  options={{
                header: ({navigation}) =>
                (

                    <>
                        <View style={{ height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#FFF', alignItems: 'center', paddingLeft: 15, paddingRight: 25}}>
                            <TouchableOpacity style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#efefef', marginRight: 15, borderRadius: 50, padding: 5}}>
                                <BackSvg width={22} height={22} />
                            </TouchableOpacity>
                            
                        </View>
                       
                    </>
                ),
            // headerShown: false, 
        }}  name="user-setting" component={Setting} />


    </MeStack.Navigator>
  );
}   
