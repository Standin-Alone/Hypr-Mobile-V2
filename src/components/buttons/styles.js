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
        top:5,
        fontSize:20,
        fontFamily:constants.Fonts.GothamBold,        
        color:constants.Colors.light
    },
    primaryButtonOutline:{
        height:constants.Dimensions.vh(12),
        width:constants.Dimensions.vw(90),
        borderRadius:240,    
        borderWidth:1,
        borderColor:constants.Colors.primary,
        elevation:2,
        backgroundColor:constants.Colors.light
        
    },
    primaryButtonOutlineText:{        
        textAlign:'center',
        fontSize:20,
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
    }
});