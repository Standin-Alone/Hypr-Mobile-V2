
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
    bottom:constants.Dimensions.vh(1),
    paddingTop:constants.Dimensions.vh(4),
    borderTopWidth:0.2,
    borderTopColor:constants.Colors.dark_tint,
    backgroundColor:constants.Colors.light,
    right:0,        
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
},
emptyCartText:{
    fontFamily:constants.Fonts.GothamBold,
    fontSize:40,
    textAlign:'center'    
},
countryText:{
    fontFamily:constants.Fonts.GothamBold,
    color:constants.Colors.dark,
    fontSize:20,        
},
countryContainer:{
  left:constants.Dimensions.vw(2)
},
divider:{
        borderBottomColor:constants.Colors.dark_tint,
        borderBottomWidth: 1,
        height:1,
        width:constants.Dimensions.vw(95)
},
subTotalText:{
    fontFamily:constants.Fonts.OpenSansMedium,
    fontSize:16,
},
subTotalValue:{
    fontFamily:constants.Fonts.OpenSansMedium,
    fontSize:16,
},
subTotalContainer:{    
    paddingVertical:constants.Dimensions.vh(2),
    top:constants.Dimensions.vh(-5),
    backgroundColor:constants.Colors.light,
    flexDirection:'column',
},
totalContainer:{    
    paddingVertical:constants.Dimensions.vh(2),
    top:constants.Dimensions.vh(-4),
    backgroundColor:constants.Colors.light,
    flexDirection:'column',
},
paymentMethodContainer:{    
    paddingVertical:constants.Dimensions.vh(5),
    top:constants.Dimensions.vh(-3),
    backgroundColor:constants.Colors.light,
    flexDirection:'column',
},
itemCountContainer:{    
    left:constants.Dimensions.vw(4),    
},
itemCountText:{
    fontFamily:constants.Fonts.OpenSansMedium,
    fontSize:16,
},
hyprPoints:{
    fontFamily:constants.Fonts.PoppinsBold,    
    fontSize:constants.Dimensions.normalize(6),            
    color:constants.Colors.primary
 
}
  
});

