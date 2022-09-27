
import React from "react";
import { LogBox } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';


import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Authentication from "../screens/Authentication";
import VerifyOtp from "../screens/VerifyOtp";

import {BottomTabNavigator} from "./BottomTab";
import constants from "../constants";
import ForgotPassword from "../screens/ForgotPassword";
import PrimaryHome from "../screens/PrimaryHome";
import WishList from "../screens/Market/WishList";
import Cart from "../screens/Market/Cart";
import Search from "../screens/Market/Search";
import Order from "../screens/Market/Order";
import Payment from "../screens/Market/Payment";
import VariantList from "../screens/Market/VariantList";
import ProductDetail from "../screens/Market/ProductDetail";
import Address from "../screens/Market/Address";
import MarketAddressEditForm from "../screens/Market/MarketAddressEditForm";
import AddressForm from "../screens/Market/AddressForm";
import Mlm from "../screens/BottomTab/Mlm";
import RewardHistory from "../screens/MLM/RewardHistory";
// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
// ]);

// LogBox.ignoreAllLogs();

  
const Stack  = createStackNavigator();


const AppStack = () =>(

        <Stack.Navigator initialRouteName={constants.ScreenNames.AppStack.AUTHENTICATION} screenOptions={{headerShown:false }} >
        <Stack.Screen component={Authentication} name={constants.ScreenNames.AppStack.AUTHENTICATION}/>
        <Stack.Screen component={ForgotPassword} name={constants.ScreenNames.AppStack.FORGOT_PASSWORD} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Login} name={constants.ScreenNames.AppStack.LOGIN} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={SignUp} name={constants.ScreenNames.AppStack.SIGNUP} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={VerifyOtp} name={constants.ScreenNames.AppStack.VERIFY_OTP} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={PrimaryHome} name={constants.ScreenNames.AppStack.PRIMARY_HOME} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        {/* MARKET */}
        <Stack.Screen component={Address} name={constants.ScreenNames.Market.ADDRESS} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={AddressForm} name={constants.ScreenNames.Market.ADDRESS_FORM} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={MarketAddressEditForm} name={constants.ScreenNames.Market.ADDRESS_EDIT_FORM} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ProductDetail} name={constants.ScreenNames.Market.PRODUCT_DETAIL} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={VariantList} name={constants.ScreenNames.Market.VARIANT_LIST} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={WishList} name={constants.ScreenNames.Market.WISH_LIST} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Search} name={constants.ScreenNames.Market.SEARCH} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Cart} name={constants.ScreenNames.Market.CART} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Order} name={constants.ScreenNames.Market.ORDER} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Payment} name={constants.ScreenNames.Market.PAYMENT} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        {/* MLM */}
        <Stack.Screen component={Mlm} name={constants.ScreenNames.Mlm.MLM} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={RewardHistory} name={constants.ScreenNames.Mlm.REWARD_HISTORY} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    



        {/* <Stack.Screen component={BottomTabNavigator} name={constants.ScreenNames.AppStack.HOME} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>     */}

        
    </Stack.Navigator>

)



export default Route = ()=>(

    <NavigationContainer>
        <AppStack/>
        <Toast/>
    </NavigationContainer>
)

