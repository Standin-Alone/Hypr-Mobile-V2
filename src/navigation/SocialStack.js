import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import Home from '../screens/BottomTab/Home';
import Camera from '../screens/Social/Camera';
import CapturedPhoto from '../screens/Social/CapturedPhoto';
import CreatePost from '../screens/Social/CreatePost';

const SocialStack = createStackNavigator();

export const SocialStackComponent= () => {
    return (
        <SocialStack.Navigator            
            screenOptions={{
                gestureEnabled: false , headerShown: false,                
            }}
        >       

            <SocialStack.Screen
                component={Home}
                name={constants.ScreenNames.Social.SOCIAL}             
            />  

            <SocialStack.Screen
                component={CreatePost}
                name={constants.ScreenNames.Social.CREATE_POST}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}
            />  

            <SocialStack.Screen
                component={Camera}
                name={constants.ScreenNames.Social.CAMERA}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}
            />  

            <SocialStack.Screen
                component={CapturedPhoto}
                name={constants.ScreenNames.Social.CAPTURED_PHOTO}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}
            />  
                                                                   
            </SocialStack.Navigator>
    )
}