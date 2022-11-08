
// STYLESHEET

import React from 'react';
import {StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({
    notifTitle:{
        fontFamily:constants.Fonts.PoppinsExtraBold,
        fontSize:constants.Dimensions.normalize(8),
        color:constants.Colors.dark
    }
});

