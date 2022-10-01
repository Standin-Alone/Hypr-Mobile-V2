
import React from "react";
import { View,TouchableOpacity,Text,Image} from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import Spinner from 'react-native-spinkit';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Foundation from 'react-native-vector-icons/Foundation';
import FastImage from 'react-native-fast-image'

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
    colors={[constants.Colors.gradient.primary, constants.Colors.gradient.secondary,constants.Colors.gradient.tertiary,constants.Colors.gradient.quarternary]}
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
    iconSize,
    moreStyle,
    moreTextStyle
})=>(   

    <View


    style={[styles.primaryButtonOutline,moreStyle]}
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

                <Text style={[styles.primaryButtonOutlineText,moreTextStyle]}>
                    { isLoading ? loadingTitle : title}
                </Text>

            }
            </View>
        </TouchableOpacity>
    </View>
);





export const PrimaryButtonNoOutline = ({
    onPress,
    fontSize,
    title,
    width,
    height,
    isLoading,
    loadingTitle,
    showIcon,
    iconName,
    iconSize,
    iconColor,
    iconPackageName
})=>(   

    <View
   
    style={[styles.primaryButtonNoOutline]}
    >
        <TouchableOpacity  onPress={onPress}  style={{ justifyContent: "flex-start",padding:10}} >
            <View style={{ flexDirection:'row' }}>

            {showIcon &&
                
                iconPackageName == 'Foundation' ?
                <Foundation 
                    name={iconName}
                    size={iconSize} 
                    color={iconColor ? iconColor : constants.Colors.primary}
                />
                :
                <Ionicons 
                    name={iconName}
                    size={iconSize} 
                    color={iconColor ? iconColor : constants.Colors.primary}
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

                <Text style={[styles.primaryButtonNoOutlineText]}>
                    { isLoading ? loadingTitle : title}
                </Text>

            }
            </View>
        </TouchableOpacity>
    </View>
);






export const PrimaryButtonWithPicture = ({
    onPress,
    title,
    picture,
    subTitle

})=>(   

    <View
   
    style={[styles.primaryButtonWithPicture]}
    >
        <TouchableOpacity  onPress={onPress}  style={{ justifyContent: "flex-start",padding:10}} >
            <View style={{ flexDirection:'row' }}>

         
                <Image 
                    source={{uri:picture}}
                    style={styles.userProfile}
                />
          
                <View style={{flexDirection:'column',left:constants.Dimensions.vw(2)}}>
                    <Text style={[styles.primaryButtonWithPictureText]}>
                        { title}
                    </Text>

                    <Text style={[styles.primaryButtonWithPictureSubTitle]}>
                        { subTitle}
                    </Text>
                </View>
                

            </View>
        </TouchableOpacity>
    </View>
);


export const OrderCardButton = ({
    onPress,
    title,
    showIcon,
    image
})=>(   

    <View
   
    style={[styles.primaryButtonNoOutline,{height:constants.Dimensions.vh(30)}]}
    >
        <TouchableOpacity  onPress={onPress}  style={{ justifyContent: "flex-start",padding:10}} >
            <View style={{ flexDirection:'row' ,justifyContent:'space-around'}}>


            
            {showIcon &&

                // <constants.Icons.FontAwesome5 
                //     name={iconName}
                //     size={iconSize} 
                //     color={constants.Colors.primary}
                // />
                <FastImage source={{uri:image}} 
                resizeMode={FastImage.resizeMode.contain}
                style={styles.myOrderImage}/>
            }

            <View style={{flexDirection:'column'}}>                             
                <Text>Order Number:</Text>
                <Text style={[styles.primaryButtonNoOutlineText]}>
                    {title}
                </Text>
                <Text>
                    
                </Text>
            </View>

            </View>
        </TouchableOpacity>
    </View>
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
            <View style={{ flexDirection:'row',justifyContent:'center' }}>
                <MaterialIcons 
                    name="location-on" 
                    size={30} 
                    color={constants.Colors.secondary}
                />
                <Text style={[styles.changeDeliveryText]} numberOfLines={1} ellipsizeMode="tail">
                    { isLoading ? loadingTitle : title}
                </Text>

        
            </View>
        </TouchableOpacity>

);









export const ButtonWithTopIcon = ({
    onPress,
    fontSize,
    title,
    width,
    height,
    isLoading,
    loadingTitle,
    iconName
})=>(   

        <TouchableOpacity  onPress={onPress} >
            <View style={{ flexDirection:'column',justifyContent:'center' }}>
                <constants.Icons.FontAwesome5 
                    name={iconName} 
                    size={20} 
                    color={constants.Colors.secondary}
                    style={{alignSelf:'center'}}
                />
                <Text style={[styles.buttonWithTopIconText]} numberOfLines={1} ellipsizeMode="tail">
                    { isLoading ? loadingTitle : title}
                </Text>

        
            </View>
        </TouchableOpacity>

);