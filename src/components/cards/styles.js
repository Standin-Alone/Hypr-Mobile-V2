
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

let itemWidth = constants.Dimensions.vw(20)
export const styles = StyleSheet.create({  
    productCardContainer:{        
        flexDirection:'column',        
        backgroundColor:constants.Colors.light,                        
        marginHorizontal:constants.Dimensions.vw(2),        
        marginVertical:constants.Dimensions.vh(1),
        borderRadius:10,        
        width:constants.Dimensions.vw(45),                
        paddingVertical: constants.Dimensions.vh(5),
        paddingHorizontal:constants.Dimensions.vw(2),        
    },
    productSearchCardContainer:{        
        flexDirection:'column',        
        backgroundColor:constants.Colors.light,                        
        marginHorizontal:constants.Dimensions.vw(1),        
        marginVertical:constants.Dimensions.vh(1),
        borderRadius:10,        
        width:constants.Dimensions.vw(90),                
        padding:'2%'                       
    },
    productSearchName:{        
        flexWrap: 'wrap',
        fontFamily:constants.Fonts.OpenSansBold,
        fontSize:16,
        top:constants.Dimensions.vh(2),        
    },
    productSearchPrice:{
        fontFamily:constants.Fonts.OpenSansBold,
        fontSize:20,
        color:constants.Colors.dark,
        top:constants.Dimensions.vh(2),        
    },
    productSearchImage:{
        width:constants.Dimensions.vw(20),                
        height:constants.Dimensions.vh(28),
        alignSelf:'center',
        overflow:'hidden'        
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
        color:constants.Colors.dark,
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
        width: constants.Dimensions.vw(95),
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

    cartCardContainer:{                             
        backgroundColor:constants.Colors.light,
        borderRadius: 10,
        width: constants.Dimensions.vw(90),
        height: constants.Dimensions.vh(50),
        flexDirection:'row',        
        elevation: 1,            
        marginVertical:constants.Dimensions.vh(2),
        marginHorizontal:constants.Dimensions.vw(2)
    },
    cartFirstColumn:{        
        flex:1,
        paddingVertical:constants.Dimensions.vh(10),
        paddingHorizontal:constants.Dimensions.vw(2)
    },
    
    cartSecondColumn:{     
        flex:1.5
    },
    cartVariantName:{                             
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:16,
        
    },
    cartImage:{
        
        width:constants.Dimensions.vw(30),
        height:constants.Dimensions.vh(30)
    },
    cartOrderCard:{        
        flexDirection:'row',
        borderWidth:0.5,
        borderRadius:15,
        width:constants.Dimensions.vw(80),
        height:constants.Dimensions.vh(30),
        borderColor:constants.Colors.dark_tint,
        marginVertical:constants.Dimensions.vh(50),
        marginTop:20        
    },
    variantNameText:{
        fontSize:20
    },
    quantity:{
        fontSize:20,
        fontFamily:constants.Fonts.OpenSansMedium
    },
    cartTotalAmount:{
        fontSize:25,
        left:constants.Dimensions.vw(10),
        fontFamily:constants.Fonts.GothamBold,
        color:constants.Colors.danger
    },
    editButtonText:{
        fontSize:14,
        color:constants.Colors.primary
    },



    orderStatusCardContainer:{                             
        backgroundColor:constants.Colors.light,        
        width: constants.Dimensions.vw(80),
        height: constants.Dimensions.vh(50),
        flexDirection:'row',                
        marginVertical:constants.Dimensions.vh(2),
        marginHorizontal:constants.Dimensions.vw(2)
    },

    orderStatusVariantName:{                             
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:12,        
    },
    orderStatusQuantity:{                             
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:12,        
    },
    orderStatusPrice:{                             
        fontFamily:constants.Fonts.GothamBold,
        fontSize:14, 
        color:constants.Colors.danger       
    },
    orderStatusFirstColumn:{        
        flex:1.2,
        paddingVertical:constants.Dimensions.vh(15),
        paddingHorizontal:constants.Dimensions.vw(2)
    },
    
    orderStatusSecondColumn:{     
        flex:3
    },
    orderStatusCartImage:{
        
        width:constants.Dimensions.vw(10),
        height:constants.Dimensions.vh(10)
    },
    socialPostContainer:{
        borderRadius:20,            
        marginVertical:constants.Dimensions.vh(2),
        width:constants.Dimensions.vw(95),
        height:constants.Dimensions.vh(100),     
        flexDirection:'column',
        backgroundColor:'rgba(255,255,255,0.5)'
    },
    socialImage:{
        borderRadius:20,
        width:constants.Dimensions.vw(95),
        height:constants.Dimensions.vh(80),    
    },
    profile:{
        borderRadius:200,
        width:constants.Dimensions.vw(10),
        height:constants.Dimensions.vh(10),    
        borderColor:constants.Colors.secondary,
        borderWidth:0.8
    },
    socialPostMenu:{
        backgroundColor:'rgba(255,255,255,0.3)',
        justifyContent:'space-around',
        borderRadius:20,
        paddingVertical:constants.Dimensions.vh(2),
        paddingHorizontal:constants.Dimensions.vw(4),
        flexDirection:'row'
        
    },
    username:{
        fontFamily:constants.Fonts.OpenSansMedium,
        fontSize:12,  
        color:constants.Colors.light
    },
    socialMenuIcon:{
        width:constants.Dimensions.vw(10),
        height:constants.Dimensions.vh(10), 
    },
    hypeCount:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:12,  
        color:constants.Colors.dark_tint
    },
    postMessage:{
        fontFamily:constants.Fonts.PoppinsMedium,
        fontSize:12,  
        color:constants.Colors.dark_tint
    },
    name:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:12,  
        color:constants.Colors.dark
    },


    friendSuggestionCard:{
          marginVertical:constants.Dimensions.vh(1)
    },
    suggestionFriendProfile:{
        height:constants.Dimensions.vh(20),
        width:constants.Dimensions.vh(20),
        borderRadius:40
    },
    suggestionFullName:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:12,  
        color:constants.Colors.dark
    },
    addFriendText:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:12,  
        color:constants.Colors.light,
        textAlign:'center'
    },
    addFriendButton:{
        backgroundColor:constants.Colors.primary,
        borderRadius:12,
        width:constants.Dimensions.vw(50),
        height:constants.Dimensions.vw(10),
    
        justifyContent: "center",
        alignItems: "center"
        
    },


    friendRequestCard:{
        marginVertical:constants.Dimensions.vh(1)
    },
    acceptFriendProfile:{
        height:constants.Dimensions.vh(20),
        width:constants.Dimensions.vh(20)
    },
    acceptFullName:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:12,  
        color:constants.Colors.dark
    },
    acceptFriendText:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:12,  
        color:constants.Colors.light,
        textAlign:'center'
    },
    acceptFriendButton:{
        backgroundColor:constants.Colors.primary,
        borderRadius:12,
        width:constants.Dimensions.vw(30),
        height:constants.Dimensions.vw(10),
        marginRight:constants.Dimensions.vw(2),
        justifyContent: "center",
        alignItems: "center"
        
    },
    declineFriendText:{
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:12,  
        color:constants.Colors.light,
        textAlign:'center'
    },
    declineFriendButton:{
        backgroundColor:constants.Colors.gray,
        borderRadius:12,
        width:constants.Dimensions.vw(30),
        height:constants.Dimensions.vw(10),
    
        justifyContent: "center",
        alignItems: "center"
        
    },
    commentContent:{
        top:constants.Dimensions.vh(2),
        left:constants.Dimensions.vw(2),
        backgroundColor:constants.Colors.gray_tint,
        width:constants.Dimensions.vw(75),
        borderRadius:20,
        paddingHorizontal:constants.Dimensions.vh(2),
        paddingVertical:constants.Dimensions.vh(2)
    },
    uploadSelectionButton:{
        paddingVertical:constants.Dimensions.vh(5)
    },  
    uploadSelectionText:{        
        fontFamily:constants.Fonts.PoppinsBold,
        fontSize:20, 
        color:constants.Colors.primary,
        paddingHorizontal:constants.Dimensions.vw(2)
    }
});

