import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import Home from '../screens/BottomTab/Home';
import Camera from '../screens/Social/Camera';
import CapturedPhoto from '../screens/Social/CapturedPhoto';
import CreatePost from '../screens/Social/CreatePost';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ViewPost from '../screens/Social/ViewPost';
import Comments from '../screens/Social/Comments';
import ViewProfile from '../screens/Social/ViewProfile';
import SocialStories from '../screens/Social/Stories';
import Messenger from '../screens/Social/Messenger';
const SocialStack = createSharedElementStackNavigator();

export const SocialStackComponent= (props) => {
    return (
        <SocialStack.Navigator            
            screenOptions={{
                gestureEnabled: false , headerShown: false,                
            }}
        >       

            <SocialStack.Screen
                {...props}
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

            <SocialStack.Screen
                component={ViewPost}
                name={constants.ScreenNames.Social.VIEW_POST}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}
                sharedElements={(route, otherRoute, showing) => {
                    const parameters = route.params;
                    return [`item.${parameters._id}.photo`];
                }}
            />  

            <SocialStack.Screen
                component={Comments}
                name={constants.ScreenNames.Social.COMMENTS}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}
            />  

            <SocialStack.Screen
                component={ViewProfile}
                name={constants.ScreenNames.Social.VIEW_PROFILE}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}
            />  

            <SocialStack.Screen
                component={SocialStories}
                name={constants.ScreenNames.Social.STORIES}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}
            />         

              <SocialStack.Screen
                component={Messenger}
                name={constants.ScreenNames.Social.MESSENGER}      
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}
            />                                               
            </SocialStack.Navigator>
    )
}