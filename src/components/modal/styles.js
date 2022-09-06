// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({

    container:{        
        backgroundColor:constants.Colors.light,
        height:constants.Dimensions.vh(90),
        top:constants.Dimensions.vh(110),
        borderRadius:20,
        
        
    },
    button:{
        marginVertical:constants.Dimensions.vh(2),
        borderWidth:0.5,
        padding:'2%',
        borderColor:constants.Colors.primary,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:constants.Dimensions.vw(5),
        width:constants.Dimensions.vw(90),
    },
    title:{
        
        textAlign:'center',
        top:constants.Dimensions.vh(5),
        fontFamily:constants.Fonts.GothamMedium,
        fontSize:18,
    },
    referralModal:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    referralContent:{
        alignSelf:'center',
        height:constants.Dimensions.vh(40),
        width:constants.Dimensions.vh(90),
        top:constants.Dimensions.vh(50),
        backgroundColor:constants.Colors.light,        
    },
    modalHeaderTitle:{    
        fontFamily:constants.Fonts.GothamMedium,
        fontSize:18,
    },
    primaryContainer:{  
        flexDirection:'row',    
        marginVertical:constants.Dimensions.vh(2)
    },
    primaryInput:{
        left:constants.Dimensions.vw(5),
        borderWidth:1,
        width:constants.Dimensions.vw(80),
        borderRadius:10,        
        borderColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.GothamMedium,
        paddingLeft:constants.Dimensions.vw(2),                
        paddingVertical:   constants.Dimensions.vh(2),        
        fontSize:14,
        top:constants.Dimensions.vh(10),
    },
    icon:{
        position:'absolute',        
        left:constants.Dimensions.vw(75),
        top:constants.Dimensions.vh(9),
    },
    shareLinkTextInput:{
        left:constants.Dimensions.vw(5),
        borderWidth:1,
        height:constants.Dimensions.vh(10),
        width:constants.Dimensions.vw(80),
        borderRadius:10,        
        borderColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.GothamMedium,
        paddingLeft:constants.Dimensions.vw(2),                
        paddingVertical:   constants.Dimensions.vh(2),        
        fontSize:14,
        top:constants.Dimensions.vh(10),
    },
    referralLink:{
        fontFamily:constants.Fonts.GothamMedium,    
        fontSize:14,            
        width:constants.Dimensions.vw(65),
    },
    hyprPoints:{
        fontFamily:constants.Fonts.PoppinsBold,    
        fontSize:constants.Dimensions.normalize(8),            
        color:constants.Colors.primary
     
    },
    dialogContainer:{
        width:constants.Dimensions.vw(60),
        height:constants.Dimensions.vh(20),
        borderRadius:10,
        top:constants.Dimensions.vh(70),
        left:constants.Dimensions.vw(20),
        marginHorizontal:constants.Dimensions.vw(3),
        backgroundColor:'white'
    },
    processingText: {
        fontFamily:constants.Fonts.PoppinsBold,    
        fontSize:constants.Dimensions.normalize(8),            
        color:constants.Colors.dark,
    }

  
});