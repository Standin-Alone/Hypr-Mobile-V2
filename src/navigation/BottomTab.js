import React from 'react';
import { StyleSheet } from 'react-native';

import Home from '../screens/BottomTab/Home';
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
            name ={constants.ScreenNames.BottomTab.HOME} 
            component={Home}
            options={({route,navigation})=>({    
                title:'Home',     
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
                title:'Market',     
                tabBarStyle:{display:getTabBarVisibility(route)},          
                tabBarIcon: ({color})=>(
                    <constants.Icons.Ionicons name="cart" size={30} color={color}/>
                )
             })}
        />

        <BottomTab.Screen 
            name ={constants.ScreenNames.BottomTab.USER_PROFILE} 
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