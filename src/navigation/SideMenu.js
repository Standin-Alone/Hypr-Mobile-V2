import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import constants from '../constants';
import { SocialStackComponent } from './SocialStack';
import { MarketStackComponent } from './MarketStack';
import PrimaryHome from '../screens/PrimaryHome';

import SideProfile from './SideProfile';
import Home from '../screens/BottomTab/Home';

const SideMenu = createDrawerNavigator();


export const SideMenuBar = (props)=>{
    return(
        <SideMenu.Navigator 
            screenOptions={{drawerPosition:"right",headerShown:false}}
            drawerContent={(propsState)=><SideProfile {...propsState}/>}
         >
            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.AppStack.PRIMARY_HOME} 
                    component={PrimaryHome}
                    options={({route,navigation})=>({    
                        title:'Home',     
                        tabBarShowLabel:false,
                        // tabBarStyle:{display:getTabBarVisibility(route)},          
                        tabBarIcon: ({color})=>(
                            <constants.Icons.Ionicons name="home" size={30} color={color}/>
                        )
                    })}
                />
            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Social.SOCIAL} 
                    component={Home}
                    options={({route,navigation})=>({    
                        title:'Home',     
                        tabBarShowLabel:false,
                        // tabBarStyle:{display:getTabBarVisibility(route)},          
                        tabBarIcon: ({color})=>(
                            <constants.Icons.Ionicons name="home" size={30} color={color}/>
                        )
                    })}
            />
        </SideMenu.Navigator>
    )

}