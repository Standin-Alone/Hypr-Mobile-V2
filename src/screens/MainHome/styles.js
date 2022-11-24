
// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
    partnerButton:{        
        backgroundColor:constants.Colors.light,
        borderWidth:0.5,
        borderColor:constants.Colors.dark_tint,
        marginHorizontal:constants.Dimensions.vw(2),
        borderRadius:20,
        flexDirection:'column',
        justifyContent:'center',
        marginVertical:constants.Dimensions.vh(2)        
    },
    partnerButtonLabel:{
        textAlign:'center'
    },
    partnerButtonContent:{
        marginVertical:constants.Dimensions.vh(2)
    },
    partnerButtonImage:{
        alignSelf:'center',
        width:constants.Dimensions.vw(10),
        height:constants.Dimensions.vh(10),
        borderRadius:200,
    },
    partnerTitle:{
        fontSize:constants.Dimensions.normalize(9),
        fontFamily:constants.Fonts.OpenSansBold,
        color:constants.Colors.dark
    }
});

