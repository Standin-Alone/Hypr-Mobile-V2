


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
    height:constants.Dimensions.vh(25),
    width:constants.Dimensions.vw(25),
    borderRadius:2000,
    borderWidth:1,
    borderColor:'rgba(255,255,255,1)',    

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
   backgroundColor:constants.Colors.light,
   paddingBottom:constants.Dimensions.vh(5),
   elevation:5
 },
 fullName:{
    textAlign:'center',
    fontFamily:constants.Fonts.PoppinsExtraBold,
    fontSize:constants.Dimensions.normalize(7),
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
   height:constants.Dimensions.vh(70),
   bottom:constants.Dimensions.vh(95)
 },
 invitePalsLabel:{
  textAlign:'center',
  fontFamily:constants.Fonts.PoppinsLight,
  fontSize:constants.Dimensions.normalize(10),
  color:constants.Colors.dark
 },
// REFERRAL STYLE
  primaryContainer:{  
    flexDirection:'row',    
    marginVertical:constants.Dimensions.vh(2)
  },
  primaryInput:{
    borderWidth:1,
    width:constants.Dimensions.vw(80),
    borderRadius:10,        
    borderColor:constants.Colors.gray,        
    fontFamily:constants.Fonts.GothamMedium,              
    paddingVertical:   constants.Dimensions.vh(2),        
    fontSize:constants.Dimensions.normalize(7),            
    top:constants.Dimensions.vh(10),
  },
  icon:{    
    top:constants.Dimensions.vh(2),
  },
  shareLinkTextInput:{
    left:constants.Dimensions.vw(8),
    borderWidth:1,
    height:constants.Dimensions.vh(10),
    width:constants.Dimensions.vw(80),
    borderRadius:10,        
    borderColor:constants.Colors.gray,        
    fontFamily:constants.Fonts.GothamMedium,
    paddingLeft:constants.Dimensions.vw(2),                
    paddingVertical:   constants.Dimensions.vh(2),        
    fontSize:constants.Dimensions.normalize(7),            

  },
  referralLink:{
    textAlign:'center',
    fontFamily:constants.Fonts.GothamMedium,    
    fontSize:constants.Dimensions.normalize(7),            
    width:constants.Dimensions.vw(65),
  },
  invitePalsContainer:{
    alignContent:'center',
    backgroundColor:constants.Colors.light,
    marginHorizontal:constants.Dimensions.vw(3),
    borderRadius:20,
    elevation:5
  },
  palsValue:{
    fontFamily:constants.Fonts.PoppinsLight,    
    fontSize:constants.Dimensions.normalize(8), 
    color:constants.Colors.dark,
    textAlign:'center'
  },
  palsLabel:{
    fontFamily:constants.Fonts.GothamMedium,    
    color:constants.Colors.dark,
    fontSize:constants.Dimensions.normalize(8),      
    textAlign:'center'      
  },
  walletText:{
    fontFamily:constants.Fonts.PoppinsBold,    
    fontSize:constants.Dimensions.normalize(8), 
    color:constants.Colors.light,
    textAlign:'center'
  },
  walletContainer:{
    backgroundColor:constants.Colors.primary,
    borderRadius:20,
    paddingVertical:constants.Dimensions.vh(2),
    paddingHorizontal:constants.Dimensions.vh(2)    
  },
  walletLabel:{
    fontFamily:constants.Fonts.PoppinsLight,    
    fontSize:constants.Dimensions.normalize(5), 
    color:constants.Colors.light,
    textAlign:'center'
  }
});

