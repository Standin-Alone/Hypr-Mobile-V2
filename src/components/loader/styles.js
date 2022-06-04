// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        flex: 1,
        width: constants.Dimensions.vw(100),
        height: constants.Dimensions.vh(200),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    noData:{
        width:constants.Dimensions.vw(100),
        height:constants.Dimensions.vh(100),
        alignSelf:'center',
        resizeMode:'contain'
    }
});