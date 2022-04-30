
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
   container:{
       flexDirection:'column',
       left:constants.Dimensions.vw(5),
       
   },
   buttonContainer:{        
    left:0,        
    bottom:constants.Dimensions.vh(2),
    right:0,        
    position:'absolute',
    justifyContent:'center',
    alignItems:'center'
}
  
});

