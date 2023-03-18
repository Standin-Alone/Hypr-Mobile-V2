
// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../../constants';


export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    profileImageContainer:{
        alignContent:'center',
        alignSelf:'center'
    },
    userProfile:{
        marginVertical:constants.Dimensions.vh(4),
        height:constants.Dimensions.vh(40),
        width:constants.Dimensions.vw(40),
        borderRadius:2000,
        borderWidth:8,
        borderColor:'rgba(255,255,255,1)',    
     },
     cameraIcon:{
        alignSelf:'center',
        bottom:constants.Dimensions.vh(10),
        left:constants.Dimensions.vh(10)
      },
      accountInfoContainer:{
        left:constants.Dimensions.vw(5)
      },
      saveButtonContainer:{
        marginVertical:constants.Dimensions.vh(2),
        alignContent:'center',
        alignSelf:'center'
      }
});

