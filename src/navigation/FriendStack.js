import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import Friend from '../screens/BottomTab/Friend';




const FriendStack = createStackNavigator();

export const FriendStackComponent= () => {
    return (
        <FriendStack.Navigator            
            screenOptions={{
                gestureEnabled: false , headerShown: false,                
            }}
        >       

            <FriendStack.Screen
                component={Friend}
                name={constants.ScreenNames.Friend.FRIEND}             
            />  

    
                                                                   
            </FriendStack.Navigator>
    )
}