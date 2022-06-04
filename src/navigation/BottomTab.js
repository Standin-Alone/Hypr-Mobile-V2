import React from 'react';
import { StyleSheet } from 'react-native';

import Home from '../screens/BottomTab/Home';
import UserProfile from '../screens/BottomTab/UserProfile';
import constants from '../constants';
import { MarketStackComponent } from './MarketStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { SocialStackComponent } from './SocialStack';
import { ProfileStackComponent } from './ProfileStack';


const BottomTab = createBottomTabNavigator();

export function getTabBarVisibility(route) {   
    
    const routeName = getFocusedRouteNameFromRoute(route);
        
    if (( routeName != 'Market' && routeName != 'Profile' && routeName != 'Social') && routeName !== undefined) {        
      return 'none';
    }else{
        return 'flex';
    }
    
}

export const BottomTabNavigator = ()=>(

    <BottomTab.Navigator            
        screenOptions={(navigation)=>({
            tabBarActiveBackgroundColor: constants.Colors.primary_tint,
            tabBarInactiveBackgroundColor: constants.Colors.light,
            tabBarActiveTintColor: constants.Colors.primary,
            tabBarInactiveTintColor: constants.Colors.dark_tint,
            tabBarLabelStyle:styles.tabBarLabelStyle,
            tabBarStyle:styles.barStyle,            
            headerShown:false            
        })}

        



     >

        <BottomTab.Screen 
            name ={constants.ScreenNames.BottomTab.SOCIAL_HOME} 
            component={SocialStackComponent}
            options={({route,navigation})=>({    
                // title:'Home',     
                tabBarShowLabel:false,
                tabBarStyle:{display:getTabBarVisibility(route)},          
                tabBarIcon: ({color})=>(
                    <constants.Icons.Ionicons name="home" size={30} color={color}/>
                )
             })}
        />

        <BottomTab.Screen 
            name ={constants.ScreenNames.BottomTab.MARKET_HOME} 
            component={MarketStackComponent}
            options={({route,navigation})=>({    
                // title:'Market',     
                tabBarShowLabel:false,
                tabBarStyle:{display:getTabBarVisibility(route)},                          
                tabBarIcon: ({color})=>(
                    <constants.Icons.Ionicons name="cart" size={30} color={color}/>
                )
             })}
        />

        <BottomTab.Screen 
            name ={constants.ScreenNames.BottomTab.USER_PROFILE} 
            component={ProfileStackComponent}
            options={({route,navigation})=>({    
                // title:"My Profile",
                tabBarShowLabel:false,
                tabBarStyle:{display:getTabBarVisibility(route)}, 
                tabBarIcon: ({color})=>(
                    <constants.Icons.Octicons name="person-fill" size={30} color={color}/>
                )
             })}
        />
    </BottomTab.Navigator>
)



const styles = StyleSheet.create({
    barStyle:{
        height:constants.Dimensions.vh(12),        
    },
    tabBarLabelStyle:{
        fontFamily:constants.Fonts.OpenSansBold,
        fontSize:14
    }

});