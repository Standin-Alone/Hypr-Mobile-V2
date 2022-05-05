


// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../../constants';

export const styles = StyleSheet.create({
   createPostContainer:{
        backgroundColor:constants.Colors.light,
        top:50,        
        paddingHorizontal:constants.Dimensions.vw(1),
        paddingVertical:constants.Dimensions.vh(5),
   },
   createPostInnerContainer:{
        flexDirection:'row'
   },
   profileImage:{
       width:constants.Dimensions.vw(10),
       height:constants.Dimensions.vh(10),       
       borderRadius: 150 / 2,
       overflow:'hidden'
   },
   createPostButton:{
     flexDirection:'column',
     left:constants.Dimensions.vw(2),
     borderWidth:0.5,
     borderColor:constants.Colors.dark_tint,
     borderRadius:20,
     width:constants.Dimensions.vw(80),
   },
   createPostTextContainer:{
     left:constants.Dimensions.vw(2),
     top:constants.Dimensions.vh(2)
   }
});

