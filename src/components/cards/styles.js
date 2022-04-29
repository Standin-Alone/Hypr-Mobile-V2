
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

let itemWidth = constants.Dimensions.vw(20)
export const styles = StyleSheet.create({  
    productCardContainer:{        
        flexDirection:'column',        
        backgroundColor:constants.Colors.light,                        
        marginHorizontal:constants.Dimensions.vw(1),        
        marginVertical:constants.Dimensions.vh(1),
        borderRadius:10,        
        width:constants.Dimensions.vw(45),                
        padding:'2%'                       
    },
    title:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:25,
        top:constants.Dimensions.vh(2),
        color:constants.Colors.primary
    },
    productName:{        
        flexWrap: 'wrap',
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:14,
        top:constants.Dimensions.vh(2),        
    },
    productPrice:{
        fontFamily:constants.Fonts.GothamBold,
        fontSize:20,
        color:constants.Colors.dark_tint,
        top:constants.Dimensions.vh(2),        
    },
    productImage:{
        width:constants.Dimensions.vw(50),                
        height:constants.Dimensions.vh(40),
        alignSelf:'center',
        overflow:'hidden'        
    },
    variantInfo:{
        flexDirection:'column'
    },
    variantCardContainer:{                             
        backgroundColor:constants.Colors.light,
        borderRadius: 8,
        width: constants.Dimensions.itemWidth,
        height: constants.Dimensions.vh(150),
        flexDirection:'column',        
        elevation: 1,            
    },
    variantImage:{                         
        alignSelf:'center',       
        width: constants.Dimensions.vw(70),
        height: constants.Dimensions.vh(100),
        bottom: constants.Dimensions.vh(10),
        resizeMode: 'contain',      
    },
    variantName:{                
             
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:25,
        
    },
    variantNameContainer:{
        
        flexDirection:'row',
        left:constants.Dimensions.vw(5),
        justifyContent:'flex-start',
        maxWidth:constants.Dimensions.vw(70),        
        
        
    },
    variantPrice:{
        flexWrap: 'wrap',
        fontFamily:constants.Fonts.GothamBold,
        fontSize:30,
        color:constants.Colors.dark_tint,        
    },
    checkVariant:{
        borderRadius:20,
        padding:'5%',
        left:constants.Dimensions.vw(5),
        borderColor:constants.Colors.primary,
        backgroundColor:constants.Colors.primary,
        
    },
    checkVariantText:{
        fontFamily:constants.Fonts.OpenSansMedium,
        color:constants.Colors.light,
        top:constants.Dimensions.vh(2),   
        fontSize:14,
    },


    addressCardContainer:{                             
        backgroundColor:constants.Colors.light,
        borderRadius: 8,
        width: constants.Dimensions.vw(90),
        height: constants.Dimensions.vh(40),
        flexDirection:'column',        
        elevation: 1,            
        marginVertical:constants.Dimensions.vh(2),
        marginHorizontal:constants.Dimensions.vw(2)
    },
    addressCard:{
        flexDirection:'row',
        justifyContent:'flex-start', 
        flex:1
        
    },
    addressIcon:{
        width:constants.Dimensions.vw(30),
        height:constants.Dimensions.vh(30)
    },
    countryText:{
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.dark,        
        fontSize:20, 
        flexWrap: 'wrap'
    }
});

