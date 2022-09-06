import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import Mlm from '../screens/BottomTab/Mlm';
import RewardHistory from '../screens/MLM/RewardHistory';




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

    
            <MlmStack.Screen
                component={RewardHistory}
                name={constants.ScreenNames.Mlm.REWARD_HISTORY}             
            />  

                                                                   
            </MlmStack.Navigator>
    )
}