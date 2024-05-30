
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
// import { ws } from '../../../../../utils/socket';
 
const Tab = createBottomTabNavigator();

export default function Tab() {
  return (
    <>
        <Tab.Navigator> 
                <Tab.Screen 

                    options={{
                        header: ({navigation}) =>
                        (
                            <View style={{ height: 60, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'orangered', alignItems: 'center', justifyContent: 'center'}}>
                                
                            </View>
                        ),
                    }}
                    name="user-home" 
                    component={''} />

                <Tab.Screen 

                    options={{
                        header: () =>
                            (
                                <View style={{ height: 60, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
                                
                                </View>
                            ),
                    }} 
                    name="user-card" 
                    component={''} />

                <Tab.Screen 

                    options={{
                    header: ({navigation}) =>
                        (
                            <View style={{ height: 200, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'orangered', alignItems: 'center', justifyContent: 'center'}}>
                            
                              
                            </View>
                        ),
                    }} 
                    name="user-data" 
                    component={''} />

            </Tab.Navigator>
    </>
  )
}
