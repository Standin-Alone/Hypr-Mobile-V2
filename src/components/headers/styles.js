
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({  
    marketContainer:{        
        flexDirection:'row',                
        justifyContent:'flex-end',        
        backgroundColor:'transparent'
    },
    hyprLogo:{
        width:constants.Dimensions.vw(15),
        height:constants.Dimensions.vh(15),
    },
    buttonContainer:{
        justifyContent:'flex-end',
        flexDirection:'row',                
    },
    primaryContainer:{
        flexDirection:'row',
        backgroundColor:'transparent',        
    },
    searchButton:{
        height:constants.Dimensions.vh(10),
        top:constants.Dimensions.vh(3),
        borderWidth:1,
        borderColor:constants.Colors.primary,
        padding:'1%',
        borderRadius:20,
        width:constants.Dimensions.vw(65)      
    },  
    searchText:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:13,
        alignSelf:'center',        
        color:constants.Colors.primary
    },
    searchTextInput:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:16,       
        borderWidth:1,
        top:constants.Dimensions.vh(2),
        height:constants.Dimensions.vh(10),
        width:constants.Dimensions.vw(80),        
        paddingLeft:constants.Dimensions.vw(8),        
        borderRadius:20,
        color:constants.Colors.primary
    },
    searchIcon:{
        left:constants.Dimensions.vw(8),
    },
    primaryTitle:{
        fontFamily:constants.Fonts.GothamMedium,
        fontSize:constants.Dimensions.normalize(10),
        top:constants.Dimensions.vh(2),
        color:constants.Colors.primary
    },
    notification:{
        position: "absolute",
        left: constants.Dimensions.vw(10),
        bottom: constants.Dimensions.vh(9),
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: constants.Colors.danger
    },
    logo:{
        height:constants.Dimensions.vh(15),
        width:constants.Dimensions.vw(20),  
   
    },
    socialContainer:{
        flexDirection:'row',
        justifyContent:"flex-start",
        backgroundColor:constants.Colors.primary
    },
    postButtonContainer:{

    },
    postText:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:12,
        alignSelf:'center',        
        color:constants.Colors.light
    },
    saveText:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:14,
        alignSelf:'center',        
        color:constants.Colors.primary
    },

    commentHypes:{
        height:constants.Dimensions.vh(10),
        width:constants.Dimensions.vw(10),  
    },

    // PRIMARY HOME
    primaryHomeContainer:{
        flexDirection:'row',
        backgroundColor:constants.Colors.gradient.secondary,        
    },

    hyprPoints:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:constants.Dimensions.normalize(6),
        alignSelf:'center',        
        color:constants.Colors.light
    },
    hyprPointsBtn:{
        borderWidth:1,
        borderColor:constants.Colors.light,
        paddingHorizontal:constants.Dimensions.vw(2)
    },
    rewardHistoryText:{
        left:constants.Dimensions.vw(2),
        fontFamily:constants.Fonts.PoppinsMedium,
        fontSize:constants.Dimensions.normalize(6),
        color:constants.Colors.primary
    },
    mlmContainer:{
        flexDirection:'row',
        justifyContent:"flex-start",
        backgroundColor:constants.Colors.light
    },
  
});

