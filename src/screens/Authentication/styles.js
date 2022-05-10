
// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../constants';


export const styles = StyleSheet.create({
    container:{
        backgroundColor:constants.Colors.light,
        flex:1
    },
    hyprLogo:{
        top:constants.Dimensions.vw(50),
        alignSelf:'center',
        width:constants.Dimensions.vw(70),
        height:constants.Dimensions.vh(70),
    },
    loadingText:{
        top:constants.Dimensions.vw(5),
        fontFamily:constants.Fonts.PoppinsRegular,
        fontSize:14,
        textAlign:'center'
    }
   
});
