
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({  
    primaryHomeFooter:{      
        position:'absolute',  
        bottom:0,
        left:0,
        right:0,
        backgroundColor:constants.Colors.primary,
        flexDirection:'row'
    },
    searchButton:{
        width:constants.Dimensions.vw(75),
        backgroundColor:constants.Colors.light,
        borderRadius:20,
        marginHorizontal:constants.Dimensions.vw(2),      
        paddingTop:constants.Dimensions.vh(2),
        paddingHorizontal:constants.Dimensions.vw(2)
    }
    
});

