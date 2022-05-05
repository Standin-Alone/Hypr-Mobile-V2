// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({

    container:{        
        backgroundColor:constants.Colors.light,
        height:constants.Dimensions.vh(90),
        top:constants.Dimensions.vh(140),
        borderRadius:20,
        
        
    },
    button:{
        marginVertical:constants.Dimensions.vh(2),
        borderWidth:0.5,
        padding:'2%',
        borderColor:constants.Colors.primary,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:constants.Dimensions.vw(5),
        width:constants.Dimensions.vw(90),
    },
    title:{
        
        textAlign:'center',
        top:constants.Dimensions.vh(5),
        fontFamily:constants.Fonts.GothamMedium,
        fontSize:18,
    }
});