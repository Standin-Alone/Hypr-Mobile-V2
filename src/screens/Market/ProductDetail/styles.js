
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
    variantContainer:{        
        flexDirection:'column',                        
    },
    deliveryContainer:{
        top:constants.Dimensions.vh(4),
        backgroundColor:constants.Colors.light,             
        height:constants.Dimensions.vh(30),        
        padding:'2%', 
        flexDirection:'column',
        justifyContent:'space-between'
     
    },
    deliveryTitle:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.dark_tint,
        fontSize:constants.Dimensions.normalize(10),          
    },
    deliveryContent:{
        flex:1.6
    },
    deliveryButton:{
        flex:0.5,
        
    },
    deliveryDays:{
        flex:0.5,
        
    },
    deliverySubtitle:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.gray,
        fontSize:constants.Dimensions.normalize(8),  
    },
    changeDeliveryButton:{
        justifyContent:'flex-end'
    },
    deiveryContent:{
        justifyContent:'flex-end'
    },
    deliveryTitleContainer:{
        right:constants.Dimensions.vw(29),
    },  
    variantImage:{
        width:constants.Dimensions.vw(100),
        height:constants.Dimensions.vh(80),
        resizeMode:'contain'
    },
    variantNameContainer:{
        flexDirection:'column', 
        height:constants.Dimensions.vh(30),
        top:constants.Dimensions.vh(2),
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
        fontSize:constants.Dimensions.normalize(10),                               
    },
    variantPrice:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.danger,
        fontSize:constants.Dimensions.normalize(11),                  
    },
    addToCartButton:{
        width:constants.Dimensions.vw(35), 
        marginHorizontal:constants.Dimensions.vw(2)       
    },
    buyNowButton:{
        top:constants.Dimensions.vw(4),
        width:constants.Dimensions.vw(40),
        marginHorizontal:constants.Dimensions.vw(2)
    },
    shareVariantImage:{
        width:constants.Dimensions.vw(100),
        height:constants.Dimensions.vh(80),
        resizeMode:'contain'
    },
    shareProductText:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.dark,
        fontSize:constants.Dimensions.normalize(8),   
        textAlign:'center'
    },
    shareVariantName:{
        fontFamily:constants.Fonts.PoppinsLight,
        color:constants.Colors.dark,
        fontSize:constants.Dimensions.normalize(8),   
    }

  
});

