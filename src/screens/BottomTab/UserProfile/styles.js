


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
    height:constants.Dimensions.vh(55),
    width:constants.Dimensions.vw(55),
    borderRadius:2000,
    borderWidth:10,
    borderColor:'rgba(255,255,255,1)',
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
   top:constants.Dimensions.vh(10),
   marginVertical:constants.Dimensions.vw(2),   
   marginHorizontal:constants.Dimensions.vw(2),
   borderRadius:20,

 },
 fullName:{
    textAlign:'center',
    fontFamily:constants.Fonts.PoppinsExtraBold,
    fontSize:14,
    color:constants.Colors.dark
 },
 edit:{
   alignSelf:'center',
   bottom:constants.Dimensions.vh(10),
   left:constants.Dimensions.vh(10)
 },
 cover_pic:{
   borderRadius:20,
   position:'absolute',
   left:constants.Dimensions.vw(2),
   width:constants.Dimensions.vw(95),
   height:constants.Dimensions.vh(60),
   bottom:constants.Dimensions.vh(95)
 }
});

