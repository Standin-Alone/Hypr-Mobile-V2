
import React from "react";
import 'react-native-gesture-handler';
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
import UserProfile from "../screens/BottomTab/UserProfile";
import AccountSettings from "../screens/Profile/AccountSettings";
import AddressEditForm from '../screens/Profile/AddressEditForm';
import AddressBook from "../screens/Profile/AddressBook";
import ToVerify from "../screens/Profile/Tracking/ToVerify";
import ToShip from "../screens/Profile/Tracking/ToShip";
import ToReceive from "../screens/Profile/Tracking/ToReceive";
import OrderStatus from "../screens/Market/OrderStatus";
import ViewNewProfilePic from "../screens/Profile/ViewNewProfilePic";
import Home from "../screens/BottomTab/Home";
import CreatePost from "../screens/Social/CreatePost";
import Camera from "../screens/Social/Camera";
import CapturedPhoto from "../screens/Social/CapturedPhoto";
import ViewPost from "../screens/Social/ViewPost";
import Comments from "../screens/Social/Comments";
import ViewProfile from "../screens/Social/ViewProfile";
import SocialStories from "../screens/Social/Stories";
import Messenger from "../screens/Social/Messenger";
import Chat from "../screens/Social/Chat";
import ChooseFriendToChat from "../screens/Social/ChooseFriendToChat";
import { SideMenuBar } from "./SideMenu";
import Inspire from "../screens/Social/Inspire";
import Boost from "../screens/Social/Boost";
import Reviews from "../screens/Market/Reviews";
import ToReview from "../screens/Profile/Tracking/ToReview";
import ReviewProduct from "../screens/Market/ReviewProduct";
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
        <Stack.Screen component={Reviews} name={constants.ScreenNames.Market.REVIEWS} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ProductDetail} name={constants.ScreenNames.Market.PRODUCT_DETAIL} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={VariantList} name={constants.ScreenNames.Market.VARIANT_LIST} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={WishList} name={constants.ScreenNames.Market.WISH_LIST} options={{cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}/>    
        <Stack.Screen component={Search} name={constants.ScreenNames.Market.SEARCH} options={{cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid}}/>    
        <Stack.Screen component={Cart} name={constants.ScreenNames.Market.CART} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Order} name={constants.ScreenNames.Market.ORDER} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Payment} name={constants.ScreenNames.Market.PAYMENT} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        {/* MLM */}
        <Stack.Screen component={Mlm} name={constants.ScreenNames.Mlm.MLM} options={{cardStyleInterpolator:CardStyleInterpolators.forScaleFromCenterAndroid}}/>    
        <Stack.Screen component={RewardHistory} name={constants.ScreenNames.Mlm.REWARD_HISTORY} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    

        {/* USER PROFILE */}        
        <Stack.Screen component={AccountSettings} name={constants.ScreenNames.Profile.ACCOUNT_SETTINGS} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={AddressBook} name={constants.ScreenNames.Profile.ADDRESS_BOOK} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={AddressEditForm} name={constants.ScreenNames.Profile.ADDRESS_EDIT_FORM} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ToVerify} name={constants.ScreenNames.Profile.tracking.TO_VERIFY} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ToShip} name={constants.ScreenNames.Profile.tracking.TO_SHIP} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ToReceive} name={constants.ScreenNames.Profile.tracking.TO_RECEIVE} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ToReview} name={constants.ScreenNames.Profile.tracking.TO_REVIEW} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ReviewProduct} name={constants.ScreenNames.Market.REVIEW_PRODUCT} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={OrderStatus} name={constants.ScreenNames.Market.ORDER_STATUS} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ViewNewProfilePic} name={constants.ScreenNames.Profile.VIEW_NEW_PROFILE_PIC} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    

        {/*SOCIAL  */}
        <Stack.Screen component={Home} name={constants.ScreenNames.Social.SOCIAL} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={CreatePost} name={constants.ScreenNames.Social.CREATE_POST} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Camera} name={constants.ScreenNames.Social.CAMERA} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={CapturedPhoto} name={constants.ScreenNames.Social.CAPTURED_PHOTO} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ViewPost} name={constants.ScreenNames.Social.VIEW_POST} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Comments} name={constants.ScreenNames.Social.COMMENTS} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ViewProfile} name={constants.ScreenNames.Social.VIEW_PROFILE} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={SocialStories} name={constants.ScreenNames.Social.STORIES} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Messenger} name={constants.ScreenNames.Social.MESSENGER} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Chat} name={constants.ScreenNames.Social.CHAT} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={ChooseFriendToChat} name={constants.ScreenNames.Social.CHOOSE_FRIEND_TO_CHAT} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Inspire} name={constants.ScreenNames.Social.INSPIRE} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={Boost} name={constants.ScreenNames.Social.BOOST} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    

        <Stack.Screen component={SideMenuBar} name={constants.ScreenNames.AppStack.HOME} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        {/* <Stack.Screen component={BottomTabNavigator} name={constants.ScreenNames.AppStack.HOME} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>     */}
        
    </Stack.Navigator>

)



export default Route = ()=>(

    <NavigationContainer>
        <AppStack/>
        <Toast/>
    </NavigationContainer>
)

