
import React from "react";
import { View,TouchableOpacity,Text } from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import Spinner from 'react-native-spinkit';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const PrimaryButton = ({
    onPress,
    fontSize,
    title,
    width,
    height,
    isLoading,
    loadingTitle,
    moreStyle,
    moreStyleText
})=>(   

    <LinearGradient
    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
    colors={[constants.Colors.primary, constants.Colors.secondary]}
    style={[styles.primaryButton,moreStyle]}
    >
        <TouchableOpacity  onPress={onPress}  style={{ justifyContent: "center",alignItems: "center",padding:'2%'}} >
            <View style={{ flexDirection:'row' }}>
      

            {
                isLoading ?
                <Spinner                     
                    isVisible={isLoading} 
                    size={30} 
                    type={'FadingCircleAlt'} 
                    color={constants.Colors.light}
                    
                />
                :

                <Text style={[styles.primaryButtonText,moreStyleText]}>
                    { isLoading ? loadingTitle : title}
                </Text>

            }
            </View>
        </TouchableOpacity>
    </LinearGradient>
);


export const PrimaryButtonOutline = ({
    onPress,
    fontSize,
    title,
    width,
    height,
    isLoading,
    loadingTitle,
    showIcon,
    iconName,
    iconSize
})=>(   

    <LinearGradient
    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
    colors={[constants.Colors.light,constants.Colors.light]}
    style={[styles.primaryButtonOutline]}
    >
        <TouchableOpacity  onPress={onPress}  style={{ justifyContent: "center",alignItems: "center",padding:10}} >
            <View style={{ flexDirection:'row' }}>

            {showIcon &&

                <MaterialIcons 
                    name={iconName}
                    size={iconSize} 
                    color={constants.Colors.primary}
                />
            }

            {
                isLoading ?
                <Spinner                     
                    isVisible={isLoading} 
                    size={30} 
                    type={'FadingCircleAlt'} 
                    color={constants.Colors.primary}
                    
                />
                :

                <Text style={[styles.primaryButtonOutlineText]}>
                    { isLoading ? loadingTitle : title}
                </Text>

            }
            </View>
        </TouchableOpacity>
    </LinearGradient>
);





export const ChangeDeliveryButton = ({
    onPress,
    fontSize,
    title,
    width,
    height,
    isLoading,
    loadingTitle
})=>(   

        <TouchableOpacity  onPress={onPress} >
            <View style={{ flexDirection:'row' }}>
                <MaterialIcons 
                    name="location-on" 
                    size={30} 
                    color={constants.Colors.secondary}
                />
                <Text style={[styles.changeDeliveryText]}>
                    { isLoading ? loadingTitle : title}
                </Text>

        
            </View>
        </TouchableOpacity>

);
