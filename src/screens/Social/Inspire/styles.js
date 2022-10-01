
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
container:{
    flex:1,
},
createPost  :{

    borderBottomColor:constants.Colors.dark_tint,  
    borderBottomWidth:0.5   
},
image:{
    left:constants.Dimensions.vw(2),
    top:constants.Dimensions.vw(2),
    
    height:constants.Dimensions.vh(20),
    width:constants.Dimensions.vw(20),
},
productName:{
    fontFamily:constants.Fonts.GothamMedium
},
bottom:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0
}
  
});

