// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({

    primaryButton:{
        height:constants.Dimensions.vh(12),
        width:constants.Dimensions.vw(90),
        borderRadius:240,    
        elevation:2
        
    },
    primaryButtonText:{        
        textAlign:'center',
        top:constants.Dimensions.vh(2),
        fontSize:constants.Dimensions.normalize(9),
        fontFamily:constants.Fonts.GothamBold,        
        color:constants.Colors.light
    },
    primaryButtonOutline:{
        height:constants.Dimensions.vh(13),
        width:constants.Dimensions.vw(90),
        borderRadius:240,    
        borderWidth:1,
        borderColor:constants.Colors.primary,
        elevation:2,
        backgroundColor:constants.Colors.light
        
    },
    primaryButtonOutlineText:{        
        textAlign:'center',
        fontSize:constants.Dimensions.normalize(11),
        fontFamily:constants.Fonts.GothamBold,        
        color:constants.Colors.primary
    },


    primaryButtonNoOutline:{
        height:constants.Dimensions.vh(12),
        width:constants.Dimensions.vw(100),  
        backgroundColor:constants.Colors.light,
        borderColor:constants.Colors.dark_tint,        
        borderWidth:0.2,
                
    },
    primaryButtonNoOutlineText:{        
        textAlign:'center',
        fontSize:20,
        fontFamily:constants.Fonts.OpenSansRegular,        
        color:constants.Colors.dark_tint
    },


    changeDeliveryText:{
        textAlign:'center',
        fontSize:14,
        fontFamily:constants.Fonts.GothamBold,        
        top:5,
        color:constants.Colors.gray
    },
    
    buttonWithTopIconText:{
        textAlign:'center',
        fontSize:14,
        fontFamily:constants.Fonts.OpenSansMedium,        
        top:5,
        color:constants.Colors.dark_tint
    },
    myOrderImage:{
        width:constants.Dimensions.vw(20),
        height:constants.Dimensions.vh(20)
    },
    userProfile:{
        width:constants.Dimensions.vw(12),
        height:constants.Dimensions.vh(12),
        borderRadius:200
    },
    primaryButtonWithPicture:{
        height:constants.Dimensions.vh(20),
        width:constants.Dimensions.vw(100),  
        backgroundColor:'transparent',
       
                
    },
    primaryButtonWithPictureText:{        
        textAlign:'center',
        fontSize:constants.Dimensions.normalize(8),
        fontFamily:constants.Fonts.GothamBold,        
        color:constants.Colors.dark
    },
    primaryButtonWithPictureSubTitle:{
 
        fontSize:constants.Dimensions.normalize(6),
        fontFamily:constants.Fonts.PoppinsLight,        
        color:constants.Colors.dark_tint
    },
    reviewButton:{
        width:constants.Dimensions.vw(30),
        height:constants.Dimensions.vh(10)
    },
    reviewText:{
        bottom:constants.Dimensions.vh(2),
        fontSize:constants.Dimensions.normalize(8),
        fontFamily:constants.Fonts.PoppinsRegular,        
        color:constants.Colors.light
    },
    buttonBoxed:{
        backgroundColor:constants.Colors.gray_tint,
        paddingHorizontal:constants.Dimensions.vw(5),
        paddingVertical:constants.Dimensions.vh(5),
        borderRadius:10,
        borderWidth:1,
        borderColor:constants.Dimensions.gray_tint,
        borderStyle: 'dashed',
        
    },
    buttonBoxedIconText:{
        textAlign:'center',
        fontSize:constants.Dimensions.normalize(4),
        fontFamily:constants.Fonts.OpenSansMedium,        
        top:5,
        color:constants.Colors.dark_tint
    },
});