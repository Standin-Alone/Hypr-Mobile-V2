
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
image:{
  widht:constants.Dimensions.vw(100),
  height:constants.Dimensions.vh(190),
  
},
bottom:{
  bottom:2,
  left:0,
  right:0,  
  position:"absolute"
}
  
});

