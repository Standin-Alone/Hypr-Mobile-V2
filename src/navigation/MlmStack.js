import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import Mlm from '../screens/BottomTab/Mlm';




const MlmStack = createStackNavigator();

export const MlmStackComponent= () => {
    return (
        <MlmStack.Navigator            
            screenOptions={{
                gestureEnabled: false , headerShown: false,                
            }}
        >       

            <MlmStack.Screen
                component={Mlm}
                name={constants.ScreenNames.Mlm.MLM}             
            />  

    
                                                                   
            </MlmStack.Navigator>
    )
}