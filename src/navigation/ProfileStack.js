import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import UserProfile from '../screens/BottomTab/UserProfile';
import AccountSettings from '../screens/Profile/AccountSettings';
import AddressBook from '../screens/Profile/AddressBook';
import AddressEditForm from '../screens/Profile/AddressEditForm';
import ToVerify from '../screens/Profile/Tracking/ToVerify';
import OrderStatus from '../screens/Market/OrderStatus';
import ToShip from '../screens/Profile/Tracking/ToShip';
import ToReceive from '../screens/Profile/Tracking/ToReceive';
import ViewNewProfilePic from '../screens/Profile/ViewNewProfilePic';
const ProfileStack = createStackNavigator();

export const ProfileStackComponent= () => {
    return (
        <ProfileStack.Navigator            
            screenOptions={{
                gestureEnabled: false , headerShown: false,                
            }}
            initialRouteName={constants.ScreenNames.Profile.PROFILE}
        >       

            <ProfileStack.Screen
                component={UserProfile}
                name={constants.ScreenNames.Profile.PROFILE} 
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}            
            />  

            <ProfileStack.Screen
                component={AccountSettings}
                name={constants.ScreenNames.Profile.ACCOUNT_SETTINGS}             
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}
            />  

             <ProfileStack.Screen
                component={AddressBook}
                name={constants.ScreenNames.Profile.ADDRESS_BOOK}             
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}
            />  

            <ProfileStack.Screen
                component={AddressEditForm}
                name={constants.ScreenNames.Profile.ADDRESS_EDIT_FORM}             
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}
            />  


            <ProfileStack.Screen
                component={ToVerify}
                name={constants.ScreenNames.Profile.tracking.TO_VERIFY}             
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}
            />  

            <ProfileStack.Screen
                component={ToShip}
                name={constants.ScreenNames.Profile.tracking.TO_SHIP}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />           

            <ProfileStack.Screen
                component={ToReceive}
                name={constants.ScreenNames.Profile.tracking.TO_RECEIVE}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />       

            
            <ProfileStack.Screen
                component={OrderStatus}
                name={constants.ScreenNames.Market.ORDER_STATUS}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />      

            
            <ProfileStack.Screen
                component={ViewNewProfilePic}
                name={constants.ScreenNames.Profile.VIEW_NEW_PROFILE_PIC}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />           

 


         

            
                                 
          
            
            </ProfileStack.Navigator>
    )
}