import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Market from '../screens/BottomTab/Market';
import VariantList from '../screens/Market/VariantList';
const MarketStack = createStackNavigator();

export const MarketStackComponent= () => {
    return (
        <MarketStack.Navigator            
            screenOptions={{
                gestureEnabled: false , headerShown: false,
                
            }}
        >       

            <MarketStack.Screen
                component={Market}
                name={'Market'}
                options={{ }}                
            />  

            
           <MarketStack.Screen
                component={VariantList}
                name={'VariantList'}
                options={{ gestureEnabled: false , headerShown: false, }}                
            />           

                  
          
            
            </MarketStack.Navigator>
    )
}