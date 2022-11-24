import React,{useState,useEffect} from 'react';
import { StyleSheet,View,TouchableOpacity,Image,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import constants from '../constants';
import ShopHome from '../screens/ShopHome';
import Components from '../components';
import SideProfile from './SideProfile';
import Home from '../screens/BottomTab/Home';
import ToVerify from '../screens/Profile/Tracking/ToVerify';
import ToShip from '../screens/Profile/Tracking/ToShip';
import ToReceive from '../screens/Profile/Tracking/ToReceive';
import ToReview from '../screens/Profile/Tracking/ToReview';
import UserProfile from '../screens/BottomTab/UserProfile';
import { getUserInfo } from '../actions/auth';
import Notification from '../screens/Notification';
import MainHome from '../screens/MainHome';

const SideMenu = createDrawerNavigator();



export const SideMenuBar =   (props)=>{
        
    
    const [state,setState] = useState({userInfo:[]});
    useEffect( ()=>{
        getUserInfo(setState)
        return () => {
            console.log("This will be logged on unmount");
          }
    },[])
    return(
        <SideMenu.Navigator 
            screenOptions={{
                drawerPosition:"right",
                drawerActiveBackgroundColor:constants.Colors.primary_tint,
                drawerActiveTintColor:constants.Colors.light,

            }}
            drawerContent={(propsState)=><SideProfile {...propsState}/>}
            
         >

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.AppStack.MAIN_HOME} 
                    component={MainHome}
                    options={({route,navigation})=>({    
                        title:'Market',                
                        // tabBarStyle:{display:getTabBarVisibility(route)},          
                        drawerIcon: ({color})=>(
                            <constants.Icons.Ionicons name="home" size={constants.Dimensions.normalize(10)} color={color}/>
                        ),
                        header:()=>(
                            <Components.PrimaryHomeHeader
                            hyprPoints={state.userInfo?.reward >= 0  ? state.userInfo?.reward.toFixed(2)  : 'Processing' }
                            onPressHyprPoints={()=>navigation.navigate(constants.ScreenNames.Mlm.MLM)}
                            onOpenMenu={()=>{                                    
                               navigation.openDrawer()
                            }}                        
                            openNotification={()=>navigation.navigate(constants.ScreenNames.AppStack.NOTIFICATION)}                     
                         />                           
                        ),
                        
                       
                    })}
            />   

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.AppStack.PRIMARY_HOME} 
                    component={ShopHome}
                    options={({route,navigation})=>({    
                        title:'Market',                
                        // tabBarStyle:{display:getTabBarVisibility(route)},          
                        drawerIcon: ({color})=>(
                            <constants.Icons.Ionicons name="home" size={constants.Dimensions.normalize(10)} color={color}/>
                        ),
                        header:()=>(
                            <Components.PrimaryHomeHeader
                            hyprPoints={state.userInfo?.reward >= 0  ? state.userInfo?.reward.toFixed(2)  : 'Processing' }
                            onPressHyprPoints={()=>navigation.navigate(constants.ScreenNames.Mlm.MLM)}
                            onOpenMenu={()=>{                                    
                               navigation.openDrawer()
                            }}                        
                            openNotification={()=>navigation.navigate(constants.ScreenNames.AppStack.NOTIFICATION)}                     
                         />                           
                        ),
                        unmountOnBlur: true,
                        drawerItemStyle: { display: 'none' },    
                        
                       
                    })}
            />   

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Profile.PROFILE} 
                    component={UserProfile}
                    options={({route,navigation})=>({                            
                        // tabBarStyle:{display:getTabBarVisibility(route)},          
                        drawerIcon: ({color})=>(
                            <constants.Icons.Foundation name="social-500px" size={constants.Dimensions.normalize(10)} color={color}/>
                        ),
                        header:()=>(
                            <Components.PrimaryHomeHeader
                            hyprPoints={state.userInfo?.reward >= 0  ? state.userInfo?.reward.toFixed(2)  : 'Processing' }
                            onPressHyprPoints={()=>navigation.navigate(constants.ScreenNames.Mlm.MLM)}
                            onOpenMenu={()=>{                                    
                               navigation.openDrawer()
                            }}                        
                            openNotification={()=>navigation.navigate(constants.ScreenNames.AppStack.NOTIFICATION)}                     
                         />                           
                        ),
                        unmountOnBlur: true,
                        drawerItemStyle: { display: 'none' }
                    })}
            />   

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Profile.tracking.TO_VERIFY} 
                    component={ToVerify}
                    options={({route,navigation})=>({    
                        title:'To Verify',                      
                        drawerIcon: ({color})=>(
                            <constants.Icons.FontAwesome5 name="user-check" size={constants.Dimensions.normalize(10)} color={color}/>
                        ),
                        unmountOnBlur: true,
                        headerShown:false,
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
                        ),                        
                        unmountOnBlur: true,
                        headerShown:false,
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
                        ),                        
                        unmountOnBlur: true,
                        headerShown:false
                    })}
            />   


            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.Profile.tracking.TO_REVIEW} 
                    component={ToReview}
                    options={({route,navigation})=>({    
                        title:'To Review',                      
                        drawerIcon: ({color})=>(
                            <constants.Icons.MaterialIcons name="rate-review" size={constants.Dimensions.normalize(10)} color={color}/>
                        ),
                        unmountOnBlur: true,
                        headerShown:false
                    })}
            />   

            <SideMenu.Screen 
                 {...props}
                    name ={constants.ScreenNames.AppStack.NOTIFICATION} 
                    component={Notification}
                    options={({route,navigation})=>({    
                        title:'Notification',                      
                        drawerIcon: ({color})=>(
                            <constants.Icons.FontAwesome5 name="shipping-fast" size={constants.Dimensions.normalize(10)} color={color}/>
                        ),
                        header:()=>(
                            <Components.PrimaryHomeHeader
                            hyprPoints={state.userInfo?.reward >= 0  ? state.userInfo?.reward.toFixed(2)  : 'Processing' }
                            onPressHyprPoints={()=>navigation.navigate(constants.ScreenNames.Mlm.MLM)}
                            onOpenMenu={()=>{                                    
                               navigation.openDrawer()
                            }}                  
                            openNotification={()=>navigation.navigate(constants.ScreenNames.AppStack.NOTIFICATION)}             
                         />                           
                        )
                        ,
                        
                        
                        drawerItemStyle: { display: 'none' },                        
                    })}
                    

            />   

        </SideMenu.Navigator>
    )

}