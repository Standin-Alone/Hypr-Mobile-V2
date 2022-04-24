
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({

    primaryButton:{
        height:constants.Dimensions.vh(12),
        width:constants.Dimensions.vw(90),
        borderRadius:240,    
        elevation:2
        
    },
    primaryButtonText:{        
        textAlign:'center',
        fontSize:20,
        fontFamily:constants.Fonts.OpenSansBold,        
        color:constants.Colors.light
    }
});

