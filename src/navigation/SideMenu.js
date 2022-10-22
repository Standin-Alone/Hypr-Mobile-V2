import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import constants from '../constants';
import { SocialStackComponent } from './SocialStack';
import { MarketStackComponent } from './MarketStack';
import PrimaryHome from '../screens/PrimaryHome';

import SideProfile from './SideProfile';
import Home from '../screens/BottomTab/Home';
import ToVerify from '../screens/Profile/Tracking/ToVerify';
import ToShip from '../screens/Profile/Tracking/ToShip';
import ToReceive from '../screens/Profile/Tracking/ToReceive';

const SideMenu = createDrawerNavigator();


export const SideMenuBar = (props)=>{
    return(
        <SideMenu.Navigator 
            screenOptions={{
                drawerPosition:"right",headerShown:false,
                drawerActiveBackgroundColor:constants.Colors.primary_tint,
                drawerActiveTintColor:constants.Colors.light
            }}
            drawerContent={(propsState)=><SideProfile {...propsState}/>}
         >
            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.AppStack.PRIMARY_HOME} 
                    component={PrimaryHome}
                    options={({route,navigation})=>({    
                        title:'Market',                
                        // tabBarStyle:{display:getTabBarVisibility(route)},          
                        drawerIcon: ({color})=>(
                            <constants.Icons.Ionicons name="home" size={constants.Dimensions.normalize(10)} color={color}/>
                        )
                    })}
            />   

            {/* <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Social.SOCIAL} 
                    component={Home}
                    options={({route,navigation})=>({    
                        title:'Social',                
                        // tabBarStyle:{display:getTabBarVisibility(route)},          
                        drawerIcon: ({color})=>(
                            <constants.Icons.Foundation name="social-500px" size={constants.Dimensions.normalize(10)} color={color}/>
                        )
                    })}
            />    */}

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Profile.tracking.TO_VERIFY} 
                    component={ToVerify}
                    options={({route,navigation})=>({    
                        title:'To Verify',                      
                        drawerIcon: ({color})=>(
                            <constants.Icons.FontAwesome5 name="user-check" size={constants.Dimensions.normalize(10)} color={color}/>
                        )
                    })}
            />   

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Profile.tracking.TO_SHIP} 
                    component={ToShip}
                    options={({route,navigation})=>({    
                        title:'To Ship',                      
                        drawerIcon: ({color})=>(
                            <constants.Icons.FontAwesome5 name="ship" size={constants.Dimensions.normalize(10)} color={color}/>
                        )
                    })}
            />   

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Profile.tracking.TO_RECEIVE} 
                    component={ToReceive}
                    options={({route,navigation})=>({    
                        title:'To Receive',                      
                        drawerIcon: ({color})=>(
                            <constants.Icons.FontAwesome5 name="shipping-fast" size={constants.Dimensions.normalize(10)} color={color}/>
                        )
                    })}
            />   

        </SideMenu.Navigator>
    )

}