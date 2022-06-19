
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
    
    height:constants.Dimensions.vh(15),
    width:constants.Dimensions.vw(15),
}
  
});

