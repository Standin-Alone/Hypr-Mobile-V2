
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import constants from '../../../constants';
export const styles = StyleSheet.create({  
allProductsContainer:{

    top:constants.Dimensions.vh(2),
    paddingBottom:constants.Dimensions.vh(30),
    left:20        
},
createPost  :{

    borderBottomColor:constants.Colors.dark_tint,  
    borderBottomWidth:0.5   
},
bottom:{
    bottom:0,
    left:0,
    right:0,
    position:"absolute"
}
  
});

