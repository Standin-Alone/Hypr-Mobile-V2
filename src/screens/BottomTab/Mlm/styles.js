
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
pointsCard:{

    marginVertical:constants.Dimensions.vw(2),   
    marginHorizontal:constants.Dimensions.vw(2),
    borderRadius:20,
    backgroundColor:constants.Colors.primary,
    alignContent:'center'
 
},
rewardValueText:{
  fontFamily:constants.Fonts.PoppinsBold,
  color:constants.Colors.light,
  textAlign:'center',
  fontSize:24
},
rewardTitleText:{
  fontFamily:constants.Fonts.PoppinsBold,
  color:constants.Colors.light,
  textAlign:'center',
  fontSize:20
}

  
});

