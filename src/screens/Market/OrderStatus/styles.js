
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
        borderRadius:15,
        backgroundColor:constants.Colors.light,
        marginHorizontal:constants.Dimensions.vw(2),
        marginVertical:constants.Dimensions.vw(2),
        width:constants.Dimensions.vw(95),
        height:constants.Dimensions.vh(30),

    },
    orderNumLabel:{
        fontFamily:constants.Fonts.PoppinsMedium,
        fontSize:16,
        color:constants.Colors.dark_tint,
      
    },
    orderLabel:{
        fontFamily:constants.Fonts.PoppinsMedium,
        fontSize:16,
        textAlign:'center',

        color:constants.Colors.dark_tint
    },
    orderNumVal:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:16,
        color:constants.Colors.dark_tint
    }
});

