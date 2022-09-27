
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
        top:constants.Dimensions.vh(5),       
        flexDirection:"column",        
        left:constants.Dimensions.vw(5)
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
        fontSize:constants.Dimensions.normalize(7),        
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
        fontSize:constants.Dimensions.normalize(7),
    },
    signUpText:{
        fontFamily:constants.Fonts.OpenSansBold,
        color:constants.Colors.primary,
        fontSize:constants.Dimensions.normalize(7),
    },
    googleButton:{
        height:constants.Dimensions.vh(12),
        width:constants.Dimensions.vw(90),
        borderRadius:240,    
        elevation:1 ,
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

