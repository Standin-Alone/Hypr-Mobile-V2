
import React from "react";


import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';


import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Authentication from "../screens/Authentication";
import VerifyOtp from "../screens/VerifyOtp";

const Stack  = createStackNavigator();


const AppStack = () =>(

    <Stack.Navigator initialRouteName="VerifyOtp" screenOptions={{headerShown:false }}>
        <Stack.Screen component={Authentication} name={"Authentication"}/>
        <Stack.Screen component={Login} name={"Login"} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={SignUp} name={"SignUp"} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
        <Stack.Screen component={VerifyOtp} name={"VerifyOtp"} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>    
    </Stack.Navigator>

)



export default Route = ()=>(

    <NavigationContainer>
        <AppStack/>
        <Toast/>
    </NavigationContainer>
)

