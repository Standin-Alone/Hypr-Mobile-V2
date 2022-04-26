
import React from "react";
import { View,TouchableOpacity,TextInput,Text,Image} from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const ProductCard = ({
   title,
   onGoBack,
   productImage,
   productName,
   productPrice
})=>(   
   <>          
      <TouchableOpacity onPress={onGoBack} style={styles.productCardContainer}>
         <View style={{ flex:1}}>
            <View style={{ top:10 }}>
               <Image source={{ uri:productImage}} resizeMode="contain" style={styles.productImage}/>         
            </View>
            <View style={{left:constants.Dimensions.vw(2),top:constants.Dimensions.vh(2) }}>
                  <Text style={styles.productName}>{productName}</Text>
            </View>
            <View style={{left:constants.Dimensions.vw(1),top:constants.Dimensions.vh(2) }}>
                  <Text style={styles.productPrice}> ${productPrice}</Text>
            </View>
         </View>
         {/* 
         <View>
            <Image source={{ uri:productImage}} resizeMode="contain" style={styles.productImage}/>         
         </View>
         <View style={{ flex:1,flexDirection:'column' }}>
            <View style={{ flexDirection:'row',left:constants.Dimensions.vw(2),flex:1,justifyContent:'center'}}>
               <View style={{justifyContent:'center' }}>
                  <Text style={styles.productName}>{productName}</Text>
               </View>
            </View>
            <View style={{ flexDirection:'row',left:constants.Dimensions.vw(2) ,flex:1}}>
               <View style={{justifyContent:'center' }}>
                  <Text style={styles.productPrice}>${productPrice}</Text>
               </View>
            </View>
         </View> */}
      </TouchableOpacity>                         
   </>
);
