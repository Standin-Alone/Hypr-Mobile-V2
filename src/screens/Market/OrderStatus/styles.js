
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
        flexDirection:'row',
        backgroundColor:constants.Colors.light,        
        marginVertical:constants.Dimensions.vw(2),   
        height:constants.Dimensions.vh(30),
    },
    orderNumLabel:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:constants.Dimensions.normalize(8),
        color:constants.Colors.secondary,
      
    },
    orderLabel:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:constants.Dimensions.normalize(8),
        textAlign:'center',
        color:constants.Colors.dark_tint,
    },
    orderNumVal:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:constants.Dimensions.normalize(8),
        color:constants.Colors.secondary
    },
    trackingStatusLabel:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:constants.Dimensions.normalize(9),
        color:constants.Colors.dark
    },
    orderReceivedContainer:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    orderReceivedBtn:{
        width:constants.Dimensions.vw(40),
        right:constants.Dimensions.vw(2)
    }
});

