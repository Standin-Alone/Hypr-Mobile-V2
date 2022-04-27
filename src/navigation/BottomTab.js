import React from 'react';
import { StyleSheet } from 'react-native';

import Market from '../screens/BottomTab/Market';
import UserProfile from '../screens/BottomTab/UserProfile';
import constants from '../constants';
import { MarketStackComponent } from './MarketStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const BottomTab = createBottomTabNavigator();

export function getTabBarVisibility(route) {   
    
    const routeName = getFocusedRouteNameFromRoute(route);
        
    if (routeName != 'Market' && routeName !== undefined) {        
      return 'none';
    }else{
        return 'flex';
    }
    
}

export const BottomTabNavigator = ()=>(

    <BottomTab.Navigator            
        screenOptions={(navigation)=>({
            tabBarActiveBackgroundColor: constants.Colors.light,
            tabBarInactiveBackgroundColor: constants.Colors.light,
            tabBarActiveTintColor: constants.Colors.primary,
            tabBarInactiveTintColor: constants.Colors.dark_tint,
            tabBarLabelStyle:styles.tabBarLabelStyle,
            tabBarStyle:styles.barStyle,            
            headerShown:false            
        })}



     >
        <BottomTab.Screen 
            name ="MarketHome" 
            component={MarketStackComponent}
            options={({route,navigation})=>({         
                tabBarStyle:{display:getTabBarVisibility(route)},          
                tabBarIcon: ({color})=>(
                    <constants.Icons.Octicons name="home" size={30} color={color}/>
                )
             })}
        />

        <BottomTab.Screen 
            name ="UserProfile" 
            component={UserProfile}
            options={{ 
                title:"My Profile",
                tabBarIcon: ({color})=>(
                    <constants.Icons.Octicons name="person-fill" size={30} color={color}/>
                )
             }}
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