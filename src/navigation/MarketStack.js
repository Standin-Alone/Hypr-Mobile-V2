import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import Market from '../screens/BottomTab/Market';
import Address from '../screens/Market/Address';
import AddressForm from '../screens/Market/AddressForm';
import ProductDetail from '../screens/Market/ProductDetail';
import VariantList from '../screens/Market/VariantList';
import Cart from '../screens/Market/Cart';
import Search from '../screens/Market/Search';
import WishList from '../screens/Market/WishList';
import Order from '../screens/Market/Order';
import Payment from '../screens/Market/Payment';
import MarketAddressEditForm from '../screens/Market/MarketAddressEditForm';
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
                name={constants.ScreenNames.Market.MARKET}
                options={{ }}                
            />  

            
           <MarketStack.Screen
                component={VariantList}
                name={constants.ScreenNames.Market.VARIANT_LIST}
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}                
            />      
                 
            <MarketStack.Screen
                component={WishList}
                name={constants.ScreenNames.Market.WISH_LIST}
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}                
            />      

            <MarketStack.Screen
                component={Search}
                name={constants.ScreenNames.Market.SEARCH}
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}                
            />           

            <MarketStack.Screen
                component={ProductDetail}
                name={constants.ScreenNames.Market.PRODUCT_DETAIL}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />     

            <MarketStack.Screen
                component={Address}
                name={constants.ScreenNames.Market.ADDRESS}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />           

        <MarketStack.Screen
                component={MarketAddressEditForm}
                name={constants.ScreenNames.Market.ADDRESS_EDIT_FORM}             
                options={{ gestureEnabled: false , headerShown: false, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}
            />  

            <MarketStack.Screen
                component={AddressForm}
                name={constants.ScreenNames.Market.ADDRESS_FORM}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />   


            <MarketStack.Screen
                component={Cart}
                name={constants.ScreenNames.Market.CART}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />   

             <MarketStack.Screen
                component={Order}
                name={constants.ScreenNames.Market.ORDER}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />         
            <MarketStack.Screen
                component={Payment}
                name={constants.ScreenNames.Market.PAYMENT}
                options={{ gestureEnabled: false , headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}                
            />          

             

                  
          
            
            </MarketStack.Navigator>
    )
}