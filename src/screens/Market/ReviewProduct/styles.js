
// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../../constants';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    productImage:{
        width:constants.Dimensions.vw(20),
        height:constants.Dimensions.vh(20),
    },
    productText:{
        fontFamily:constants.Fonts.PoppinsBold,
        color:constants.Colors.dark
    },
    content:{
        borderWidth:1,
        borderColor:constants.Colors.gray,
        borderRadius:10,
        width:constants.Dimensions.vw(90),
        fontSize:constants.Dimensions.normalize(5),
        textAlignVertical: 'top'     
    },
    bottom:{
        position:'absolute',
        left:0,
        bottom:constants.Dimensions.vh(10),
        right:0,
        borderTopWidth:0.5,
        paddingTop:constants.Dimensions.vh(2),
        borderColor:constants.Colors.gray
      },
    video:{
        width:constants.Dimensions.vw(20),
        height:constants.Dimensions.vh(20),
        backgroundColor:'black',
        borderRadius:15
    },
    image:{
        width:constants.Dimensions.vw(20),
        height:constants.Dimensions.vh(20),
        backgroundColor:constants.Colors.dark,
        borderRadius:15     
    },
    removeAttachment:{
        top:constants.Dimensions.vh(1),
        left:constants.Dimensions.vw(16),
        position:'absolute'
    }
});

