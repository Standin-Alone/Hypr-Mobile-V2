
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
image:{
    width:constants.Dimensions.vw(100),
    height:constants.Dimensions.vh(300),  
    bottom:constants.Dimensions.vh(100)
},
container:{
  flex:1,
  backgroundColor:'black'
},
footer:{
  position:'absolute',
  bottom:0,
  left:0,
  right:0,
  height:constants.Dimensions.vh(40), 
  backgroundColor:constants.Colors.transparent_black
},
mainInfo:{
  top:constants.Dimensions.vh(2),
  flexDirection:'column',
  left:constants.Dimensions.vw(2)
},
mainInfoTextBold:{
  fontFamily:constants.Fonts.PoppinsMedium,
  fontSize:14,
  color:constants.Colors.light
},
mainInfoText:{
  fontFamily:constants.Fonts.PoppinsRegular,
  fontSize:14,
  color:constants.Colors.light
},
socialMenuIcon:{
  width:constants.Dimensions.vw(10),
  height:constants.Dimensions.vh(10), 
}
  
});

