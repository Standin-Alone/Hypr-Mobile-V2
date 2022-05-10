


// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../../constants';

export const styles = StyleSheet.create({
 myOrdersContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical:constants.Dimensions.vh(20), 
    
 },
 container:{    
    flex:1,    
    top:constants.Dimensions.vh(1),    
    justifyContent:'flex-start',
    
 },
 userProfile:{
    marginVertical:constants.Dimensions.vh(4),
    height:constants.Dimensions.vh(35),
    width:constants.Dimensions.vw(35),
    borderRadius:900,
    alignSelf:'center',
 },
 orderTitleText:{
   top:constants.Dimensions.vh(15),  
   left:constants.Dimensions.vh(5),  
   fontFamily:constants.Fonts.PoppinsMedium,
   fontSize:16,
   color:constants.Colors.dark_tint
 },
 profileContainer:{
   marginVertical:constants.Dimensions.vw(2),   
   marginHorizontal:constants.Dimensions.vw(2),
   borderRadius:20,
   backgroundColor:constants.Colors.light
 },
 fullName:{
    textAlign:'center',
    fontFamily:constants.Fonts.PoppinsExtraBold,
    fontSize:14,
    color:constants.Colors.dark
 }
});

