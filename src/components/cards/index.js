
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
   isSelected,
   onSelect
})=>(
   <TouchableOpacity style={[styles.addressCardContainer,{
      borderColor: isSelected ? constants.Colors.primary : constants.Colors.gray,
      borderWidth:1
   }]}
   onPress={onSelect}   
   >
      <View style={styles.addressCard}>
         <View style={{flex:0.5}}>
            <FastImage source={constants.Images.addressIcon} resizeMode={FastImage.resizeMode.contain} style={styles.addressIcon}/>
         </View>    
         <View style={{flex:1,flexDirection:'column',alignSelf:'baseline',top:6}}>
            <Text style={styles.countryText}>{data.country}</Text>
            <Text style={{flexWrap: 'wrap'}}>{data.full_name}</Text>
            <Text  style={{flexWrap: 'wrap'}} numberOfLines={5}> {data.address}</Text>
            <Text style={{flexWrap: 'wrap'}}>{data.city}</Text>
            <Text  style={{flexWrap: 'wrap'}}>{data.zip_code}</Text>                        
         </View>     
         
      </View>
   </TouchableOpacity>
)




export const CartCard = ({
   data,  
   isSelected,
   onSelect,
   quantity,
   onIncreaseQuantity,
   onDecreaseQuantity
})=>(
   <TouchableOpacity style={[styles.cartCardContainer,{
      borderColor: isSelected ? constants.Colors.primary : constants.Colors.gray,
      borderWidth:1
   }]}
   onPress={onSelect}   
   >
      
      <View style={styles.cartFirstColumn}>
         <FastImage source={{uri:data.product_img}} resizeMode={FastImage.resizeMode.contain} style={styles.cartImage}/>
      </View>

      <View style={styles.cartSecondColumn}>
         <View style={{top:constants.Dimensions.vh(10)}}>
            <Text style={styles.cartVariantName} numberOfLines={2}>{data.variant_name}</Text>

            <View style={{flexDirection:'row',top:constants.Dimensions.vh(10),justifyContent:'flex-start'}}>
               <TouchableOpacity onPress={onDecreaseQuantity}>
                  <MaterialIcons name="remove-circle-outline" size={30}  color={constants.Colors.dark_tint}/>
               </TouchableOpacity>            
                  <View>
                     <Text style={styles.quantity}>{quantity}</Text>
                  </View>                           
               <TouchableOpacity onPress={onIncreaseQuantity}>
                  <MaterialIcons name="add-circle-outline" size={30} color={constants.Colors.dark_tint}/>
               </TouchableOpacity>
               <Text style={styles.cartTotalAmount} numberOfLines={2}>${data.total_amount}</Text>
            </View>
            
         </View>
      </View>
       
      
   </TouchableOpacity>
)
