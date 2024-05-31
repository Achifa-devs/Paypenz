
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
import Home from '../../screens/Home';
import Me from '../../screens/Me';
import Cards from '../../screens/Cards';
// import { ws } from '../../../../../utils/socket';
// import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <>
        <Tab.Navigator
        
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'user-home') {
        //         iconName = focused ? 'home' : 'home-outline';
        //     } else if (route.name === 'home-card') {
        //         iconName = focused ? 'card' : 'card-outline';
        //     }

        //     // You can return any component that you like here!
        //     return <Icon name={iconName} size={size} color={color} />;
        //     },
        // })}
        // tabBarOptions={{
        //     activeTintColor: 'tomato',
        //     inactiveTintColor: 'gray',
        // }}
        > 
            <Tab.Screen 

                options={{
                    header: ({navigation}) =>
                    (
                        <View style={{ height: 55, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#007FFF', alignItems: 'center', padding: '10px'}}>

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
                name="user-home" 
                component={Home} />

            <Tab.Screen 

                options={{
                    header: ({navigation}) => 
                        (
                            <View style={{ height: 60, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
                            
                            </View>
                        ),
                }} 
                name="user-card" 
                component={Cards} />

            <Tab.Screen 

                options={{
                header: ({navigation}) =>
                    (
                        <View style={{ height: 200, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#007FFF', alignItems: 'center', justifyContent: 'center'}}>
                        
                            
                        </View>
                    ),
                }} 
                name="user-data" 
                component={Me} />

        </Tab.Navigator>
    </>
  )
}
