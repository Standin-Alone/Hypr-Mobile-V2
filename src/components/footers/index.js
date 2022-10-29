
import React from "react";
import { View,TouchableOpacity,TextInput,Text,ImageBackground } from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image'



export const PrimaryHomeFooter = ({
    goToWishList,
    goToShoppingCart,
    goToSearch,
    cartCount
})=>{

    return(
        <View style={styles.primaryHomeFooter}>   
            <View style={{flexDirection:'row',alignSelf:'center',left:constants.Dimensions.vw(15)}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={goToWishList} >
                    <constants.Icons.Ionicons 
                        name="heart-outline" 
                        size={constants.Dimensions.normalize(20)} 
                        color={constants.Colors.light}
                    />
                </TouchableOpacity>    
            </View>
            <View style={{top:constants.Dimensions.vh(1)}} >
                <TouchableOpacity style={styles.searchButton} onPress={goToSearch}>
                    <constants.Icons.Ionicons 
                        name="search" 
                        size={constants.Dimensions.normalize(10)} 
                        color={constants.Colors.primary}
                        style={{bottom:constants.Dimensions.vh(0.5)}}
                    />
                </TouchableOpacity>
            </View>
            <View style={{top:constants.Dimensions.vh(1)}}>
                <TouchableOpacity  onPress={goToShoppingCart}>
                    <constants.Icons.Fontisto 
                        name="shopping-bag-1" 
                        size={constants.Dimensions.normalize(14)} 
                        color={constants.Colors.light}                                               
                    />
                </TouchableOpacity>

            
                <View style={styles.cartCountNotif}>
                    <Text style={{ fontSize: 12, color: "#fff" }}>{cartCount}</Text>
                </View>
           
                
            </View>
            </View>
        </View>
    )
}
