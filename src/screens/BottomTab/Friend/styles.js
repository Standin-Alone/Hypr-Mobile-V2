
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
image:{
  widht:constants.Dimensions.vw(100),
  height:constants.Dimensions.vh(190),
  
},
headerText1:{
  fontFamily:constants.Fonts.PoppinsBold,
  fontSize:14,  
  color:constants.Colors.dark,
},
divider:{
  borderBottomWidth:0.5,
  width:constants.Dimensions.vw(95),
  left:constants.Dimensions.vw(2),
  borderColor:constants.Colors.dark_tint
}

  
});

