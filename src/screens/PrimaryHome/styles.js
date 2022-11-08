
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
    },
    // sidemenu
    userProfile:{
        marginVertical:constants.Dimensions.vh(4),
        height:constants.Dimensions.vh(40),
        width:constants.Dimensions.vw(40),
        borderRadius:2000,
        borderWidth:5,
        borderColor:'rgba(255,255,255,1)',
        alignSelf:'center',
     },
     fullName:{
        textAlign:'center',
        fontFamily:constants.Fonts.PoppinsExtraBold,
        fontSize:constants.Dimensions.normalize(6),
        color:constants.Colors.dark
     },
     logOut:{
        fontFamily:constants.Fonts.OpenSansBold,
        color:constants.Colors.danger,        
        fontSize:constants.Dimensions.normalize(10), 
    },
    buttonWheelContainer:{
        position:'absolute',
        left:constants.Dimensions.vw(59),
        transform: [{ rotate: '90deg'}],
        bottom:constants.Dimensions.vh(20),
        top:0
    },
    wheelMainButtonIcon:{
        transform: [{ rotate: '270deg'}]
    },
    middleButtonWheel:{
        transform: [{ rotate: '270deg'}],
        textAlign:'center'
    },
    middleButtonWheelText:{
 
        fontFamily:constants.Fonts.PoppinsExtraBold,
        fontSize:constants.Dimensions.normalize(4),
        color:constants.Colors.light
    },
    categoryButton:{
        borderRadius:100,
    
        borderColor:constants.Colors.gray_tint,
        paddingVertical:constants.Dimensions.vh(2),
        paddingHorizontal:constants.Dimensions.vw(2),
        marginHorizontal:constants.Dimensions.vw(2)
    },
    categoryLabelText:{
        fontFamily:constants.Fonts.PoppinsMedium,
        fontSize:constants.Dimensions.normalize(4),
        color:constants.Colors.light
    },
    categorySelectedButton:{
        borderRadius:100,
   
        borderColor:constants.Colors.gray_tint,
        paddingVertical:constants.Dimensions.vh(2),
        paddingHorizontal:constants.Dimensions.vw(2),
        marginHorizontal:constants.Dimensions.vw(2),
        backgroundColor:constants.Colors.transparent_white
    },
    categorySelectedLabelText:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:constants.Dimensions.normalize(4),
        color:constants.Colors.light
    }
});

