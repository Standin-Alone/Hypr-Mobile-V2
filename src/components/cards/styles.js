
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({  
    productCardContainer:{                
        backgroundColor:constants.Colors.light,                        
        marginHorizontal:constants.Dimensions.vw(1),        
        marginVertical:constants.Dimensions.vh(1),
        borderRadius:10,        
        width:constants.Dimensions.vw(45),                
        height:constants.Dimensions.vh(70),                
    },
    title:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:25,
        top:constants.Dimensions.vh(2),
        color:constants.Colors.primary
    },
    productName:{
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:14,
        top:constants.Dimensions.vh(2),        
    },
    productPrice:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:20,
        color:constants.Colors.dark_tint,
        top:constants.Dimensions.vh(2),        
    },
    productImage:{
        width:constants.Dimensions.vw(50),                
        height:constants.Dimensions.vh(40),
        alignSelf:'center',
        
    },
    
  
});

