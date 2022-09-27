
// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
    allProductsContainer:{
        paddingBottom:10
        
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

