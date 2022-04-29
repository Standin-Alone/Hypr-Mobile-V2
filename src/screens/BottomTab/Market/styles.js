


// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../../constants';

export const styles = StyleSheet.create({
    allProductsContainer:{
        alignSelf:'center',
        top:constants.Dimensions.vh(2),
        paddingBottom:constants.Dimensions.vh(30),        
    },
    titleContainer:{
        flexDirection:'row',
        left:constants.Dimensions.vw(2)
    },
    title:{
        fontFamily:constants.Fonts.OpenSansBold,
        color:constants.Colors.dark,        
        fontSize:16, 
    }
});

