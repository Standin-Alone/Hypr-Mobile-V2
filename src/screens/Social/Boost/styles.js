
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
image:{
  width:constants.Dimensions.vw(100),
  height:constants.Dimensions.vh(200),  
  bottom:constants.Dimensions.vh(30)
},
bottom:{
  position:'absolute',
  left:0,
  bottom:constants.Dimensions.vh(10),
  right:0
},
variantName:{
  fontFamily:constants.Fonts.GothamBold,
  fontSize:constants.Dimensions.normalize(10),
  color:constants.Colors.dark
},
variantPrice:{
  fontFamily:constants.Fonts.GothamBold,
  fontSize:constants.Dimensions.normalize(30),
  color:constants.Colors.danger
}

  
});

