
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({

    primaryContainer:{
        flexDirection:'row',    
        marginVertical:constants.Dimensions.vh(1)
    },
    primaryInput:{
        borderWidth:1,
        width:constants.Dimensions.vw(90),
        borderRadius:10,        
        borderColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.GothamMedium,
        paddingLeft:constants.Dimensions.vw(12),                
        paddingVertical:   constants.Dimensions.vh(4),        
        fontSize:constants.Dimensions.normalize(6)
    },
    primaryErrorMessage:{
        color:constants.Colors.danger,
        fontFamily:constants.Fonts.GothamRegular
    },
    icon:{
        position:'absolute',
        top:constants.Dimensions.vh(1),
        left:5
    },
    phoneInput:{
        
        width:constants.Dimensions.vw(90),        
        borderColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.GothamMedium,        
        paddingVertical:   constants.Dimensions.vh(1),        
        fontSize:constants.Dimensions.normalize(6)
    },
    phoneInputContainer:{        
        height:constants.Dimensions.vh(15),        
        width:constants.Dimensions.vw(90),        
    },
    country:{
        borderWidth:1,
        width:constants.Dimensions.vw(90),
        borderRadius:10,        
        borderColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.GothamMedium,
        paddingLeft:constants.Dimensions.vw(12),                
        paddingVertical:   constants.Dimensions.vh(4),        
        fontSize:constants.Dimensions.normalize(6)
    },
    citySelect:{
        backgroundColor:'transparent',
        borderWidth:1,
        width:constants.Dimensions.vw(90),
        borderRadius:10,        
        borderColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.GothamMedium,
        paddingLeft:constants.Dimensions.vw(12),                
        paddingVertical:   constants.Dimensions.vh(4),        
        fontSize:constants.Dimensions.normalize(6)
    },
    primaryInputNoBorder:{
        borderWidth:0,
        width:constants.Dimensions.vw(95),
        fontFamily:constants.Fonts.PoppinsMedasium,
        fontSize:constants.Dimensions.normalize(8),        
    },
    commentInput:{
        borderWidth:0.5,
        borderRadius:20,
        height:constants.Dimensions.vh(12),
        width:constants.Dimensions.vw(95),     
        fontFamily:constants.Fonts.PoppinsMedium,
        fontSize:constants.Dimensions.normalize(9)
    },
    secureTextEntry:{
        position:'absolute',
        top:constants.Dimensions.vh(5),
        right:50
    },
    searchInput:{
        backgroundColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.PoppinsMedium,
        fontSize:constants.Dimensions.normalize(8),
        borderRadius:20,
        height:constants.Dimensions.vh(10),
        paddingHorizontal:constants.Dimensions.vw(10),
        paddingVertical:constants.Dimensions.vh(1),
        flex: 1,

    },
    searchInputIcon:{
   
        position: "absolute",
        zIndex: 1,
        left: 10,
  
    
           

    }
  
});

