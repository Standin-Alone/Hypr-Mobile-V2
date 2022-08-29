
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
   container:{
       flexDirection:'column',
       left:constants.Dimensions.vw(5),
       
   },
    orderStatusHeader:{

        backgroundColor:constants.Colors.light,
        
        marginVertical:constants.Dimensions.vw(2),
   
        height:constants.Dimensions.vh(30),

    },
    orderNumLabel:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:14,
        color:constants.Colors.secondary,
      
    },
    orderLabel:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:14,
        textAlign:'center',
        color:constants.Colors.dark_tint,
    },
    orderNumVal:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:14,
        color:constants.Colors.secondary
    }
});

