
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
    variantContainer:{        
        flexDirection:'column',                        
    },
    deliveryContainer:{
        top:constants.Dimensions.vh(2),
        backgroundColor:constants.Colors.light,
        height:constants.Dimensions.vh(30),
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    deliveryTitle:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.dark_tint,
        fontSize:20,          
    },
    changeDeliveryButton:{
        
    },
    deliveryTitleContainer:{
        right:constants.Dimensions.vw(29),
    },  
    variantImage:{
        width:constants.Dimensions.vw(100),
        height:constants.Dimensions.vh(100),
        resizeMode:'contain'
    },
    variantNameContainer:{
        flexDirection:'column', 
        height:constants.Dimensions.vh(30)  ,
        backgroundColor:constants.Colors.light
    },
    variantPriceContainer:{
      top:constants.Dimensions.vh(8),      
      right:constants.Dimensions.vw(5),
      flexDirection:'row',
      justifyContent:'flex-end'
    },
    variantName:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.dark,
        marginHorizontal:constants.Dimensions.vw(2),
        fontSize:20,                        
    },
    variantPrice:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.danger,
        fontSize:25,          
    },
    addToCartButton:{
        width:constants.Dimensions.vw(35), 
        marginHorizontal:constants.Dimensions.vw(2)       
    },
    buyNowButton:{
        width:constants.Dimensions.vw(35),
        marginHorizontal:constants.Dimensions.vw(2)
    }

  
});
