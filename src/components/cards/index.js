
import React from "react";
import { View,TouchableOpacity,Text,Image} from "react-native";
import { styles } from "./styles";
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image'



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
   viewProduct,
   data,
   parallaxProps   
})=> (
   <View style={[styles.variantCardContainer]}>  
      <View style={{ flex:1 }}>
         <Image source={{ uri:data.variantImage}} style={styles.variantImage} resizeMode="contain" />         

         <View style={styles.variantInfo}>
         
         <View style={styles.variantNameContainer}>
            <Text style={styles.variantName} numberOfLines={3}  adjustsFontSizeToFit>{data.variantName}</Text>         
         </View>

         <View style={{ flexDirection:'row',position:'absolute',top:constants.Dimensions.vh(30),left:0,right:0}}>
               <Text style={styles.variantPrice} adjustsFontSizeToFit > ${data.variantPrice}</Text> 
               <View style={{ flexDirection:'row',justifyContent:'flex-end' }}>
                  <TouchableOpacity onPress={viewProduct}  style={styles.checkVariant}>
                     <View style={{ flexDirection:'row' }}>
                        <MaterialIcons 
                              name="preview" 
                              size={30} 
                              color={constants.Colors.light}
                        />
                        <Text style={styles.checkVariantText} >View Product </Text>
                     </View>                  
                  </TouchableOpacity>     
               </View>      
         </View>   
         </View>
      </View>       
   </View>      

)


export const AddressCard = ({
   data,  
})=>(
   <View style={styles.addressCardContainer}>
      <View style={styles.addressCard}>
         <Text>{data}</Text>

      </View>
   </View>
)