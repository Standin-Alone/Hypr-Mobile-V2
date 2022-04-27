
import React from "react";
import { View,TouchableOpacity,TextInput,Text,Image} from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ParallaxImage } from "react-native-snap-carousel";



export const ProductCard = ({
   title,
   onGoBack,
   productImage,
   productName,
   productPrice,
   addToCart
})=>(   
   <>          
      <TouchableOpacity onPress={addToCart} style={styles.productCardContainer}>
         <View style={{ flexDirection:'column'}}>
            <View>
               <Image source={{ uri:productImage}} resizeMode="contain" style={styles.productImage}/>         
            </View>   
            <View>
                  <Text style={styles.productName}>{productName}</Text>
            </View>         
            <View>
                  <Text style={styles.productPrice}> ${productPrice}</Text>
            </View>      
         </View>   
         
            
      </TouchableOpacity>                         
   </>
);



export const VariantCard = ({
   checkVariant,
   data,
   parallaxProps   
})=>{

   console.warn(data);
   
   return (
   <View style={[styles.variantCardContainer]}>  
      <View style={{ flex:1 }}>
         <Image source={{ uri:data.productImage}} style={styles.variantImage} />         

         <View style={styles.variantInfo}>


         
         <View style={styles.variantNameContainer}>
            <Text style={styles.variantName} numberOfLines={3}  adjustsFontSizeToFit>{data.variantName}</Text>         
         </View>

         <View style={{ flexDirection:'row',position:'absolute',top:constants.Dimensions.vh(30),left:0,right:0}}>
               <Text style={styles.variantPrice} adjustsFontSizeToFit > ${data.variantPrice}</Text> 
               <View style={{ flexDirection:'row',justifyContent:'flex-end' }}>
                  <TouchableOpacity onPress={checkVariant}  style={styles.checkVariant}>
                     <View style={{ flexDirection:'row' }}>
                        <MaterialIcons 
                              name="shopping-cart" 
                              size={30} 
                              color={constants.Colors.light}
                        />
                        <Text style={styles.checkVariantText} >Check Variant</Text>
                     </View>                  
                  </TouchableOpacity>     
               </View>      
         </View>   
         </View>
      </View>       
   </View>      

)}