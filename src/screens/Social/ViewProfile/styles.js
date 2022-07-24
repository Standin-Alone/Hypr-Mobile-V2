
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
image:{
  width:constants.Dimensions.vw(25),
  height:constants.Dimensions.vh(25),
  borderRadius:400
  
},
textBold:{
  fontFamily:constants.Fonts.PoppinsBold,
  textAlign:'center',
  fontSize:18,
  color:constants.Colors.dark_tint
}

  
});

