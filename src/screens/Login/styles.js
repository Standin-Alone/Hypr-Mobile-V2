
// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:constants.Colors.light
        
    },
    bannerContainer:{
        top:constants.Dimensions.vh(3),       
           
    },
    form:{
        top:constants.Dimensions.vh(10),       
        
        alignSelf:'center',
        flexDirection:"column",        
        
    },
    buttonContainer:{
        top:20
    },
    headerContainer:{        
        justifyContent:'center',  
        flexDirection:'column',
        
    },
    headerText:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:25,        
        color:constants.Colors.primary,
        justifyContent:'flex-start'
        
    },
    subtitleText:{
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:20,        
        color:constants.Colors.dark_tint,                
    },
    forgotPassword:{
        color:constants.Colors.primary
    },
    loginCover:{
        alignSelf:'center',
        width:constants.Dimensions.vw(50),
        height:constants.Dimensions.vh(50)
    },
    signUpContainer:{
        top:30,
        alignItems:'center'
    },
    signUpTitle:{
        fontFamily:constants.Fonts.OpenSansRegular,
        fontSize:18,
    },
    signUpText:{
        fontFamily:constants.Fonts.OpenSansBold,
        color:constants.Colors.primary,
        fontSize:18,
    },
    googleButton:{
        height:constants.Dimensions.vh(12),
        width:constants.Dimensions.vw(90),
        borderRadius:240,    
        elevation:2 ,
        marginVertical:constants.Dimensions.vh(2)     
    },
    orText:{
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:14,        
        color:constants.Colors.dark_tint,     
        textAlign:'center',
        marginVertical:constants.Dimensions.vh(2)     
    }
});

