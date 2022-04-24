
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({  
    primaryContainer:{
        flexDirection:'row',
        backgroundColor:'transparent',
        
    },
    primaryTitle:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:25,
        top:constants.Dimensions.vh(2),
        color:constants.Colors.primary
    }
  
});

