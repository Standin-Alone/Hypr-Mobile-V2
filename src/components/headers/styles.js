
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({  
    marketContainer:{        
        flexDirection:'row',                
        justifyContent:'flex-end',        
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
        fontFamily:constants.Fonts.GothamBold,
        fontSize:20,
        top:constants.Dimensions.vh(2),
        color:constants.Colors.primary
    }
  
});

