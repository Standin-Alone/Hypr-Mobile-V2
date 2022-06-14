
import React from "react";
import { View,TouchableOpacity,Text,Image} from "react-native";
import { styles } from "./styles";
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image'



export const ProductCard = ({
   productImage,
   productName,
   productPrice,
   addToCart
})=>(   
   <>          
      <TouchableOpacity onPress={addToCart} style={styles.productCardContainer}>
         <View style={{ flexDirection:'column'}}>
            <View>               
               <FastImage source={{ uri:productImage}} resizeMode={FastImage.resizeMode.contain} style={styles.productImage}/>
            </View>   
            <View>
                  <Text style={styles.productName}>{productName}</Text>
            </View>         
            <View style={{right:constants.Dimensions.vh(1.5)}}>
                  <Text style={styles.productPrice}> ${productPrice}</Text>
            </View>      
         </View>                        
      </TouchableOpacity>                         
   </>
);


export const SearchProductCard = ({
   productImage,
   productName,
   productPrice,
   addToCart,
   showRemoveFromWishList,
   onRemove
   
})=>(   
   <>          
      <TouchableOpacity onPress={addToCart} style={styles.productSearchCardContainer}>
         <View style={{ flexDirection:'row'}}>
            <View >
               <Image source={{ uri:productImage}} resizeMode="contain" style={styles.productSearchImage}/>         
            </View>   
            <View style={{flexDirection:'column',flex:1}}>                  
                  <View>
                        <Text style={styles.productSearchName} adjustsFontSizeToFit numberOfLines={2}>{productName}</Text>
                  </View>         
                  <View style={{justifyContent:'flex-end',flexDirection:'row',top:constants.Dimensions.vh(9),left:constants.Dimensions.vw(showRemoveFromWishList ? 10 : 0)}}>
                        <Text style={styles.productSearchPrice} adjustsFontSizeToFit> ${productPrice}</Text>
                  </View>  
            </View>

            {showRemoveFromWishList &&
            <View style={{flexDirection:'row',flex:0.2, justifyContent:'flex-end'}}>                  
               <TouchableOpacity onPress={onRemove}>
                     <constants.Icons.Ionicons
                           name="trash-outline"
                           size={16}
                           color={constants.Colors.dark_tint}
                     />
               </TouchableOpacity>
            </View>
            }
            
                
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
         
         <FastImage source={{ uri:data.variantImage}} resizeMode={FastImage.resizeMode.contain} style={styles.variantImage}/>
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
   onSelect,
   goToEditAddress
})=>(
   <TouchableOpacity style={[styles.addressCardContainer,{
      borderColor: isSelected ? constants.Colors.primary : constants.Colors.gray,
      borderWidth:1
   }]}
   onPress={onSelect}   
   >
      <View style={styles.addressCard}>
         <View style={{flex:0.4}}>
            <FastImage source={constants.Images.addressIcon} resizeMode={FastImage.resizeMode.contain} style={styles.addressIcon}/>
         </View>    
         <View style={{flex:0.8,flexDirection:'column',alignSelf:'baseline',top:6}}>            
            <Text style={{flexWrap: 'wrap'}}>{data.full_name}</Text>         
            <Text style={styles.countryText}>{data.country}</Text>            
            <Text  style={{flexWrap: 'wrap'}} numberOfLines={5}> {data.address}</Text>
            <Text style={{flexWrap: 'wrap'}}>{data.city}</Text>
            <Text  style={{flexWrap: 'wrap'}}>{data.zip_code}</Text>                        
         </View>    
         <View style={{flex:0.2,flexDirection:'column',alignSelf:'baseline',top:6}}>
            <TouchableOpacity onPress={goToEditAddress}>
               <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
                                
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






export const OrderStatusProductCard = ({
   image,  
   productName,
   quantity,
   productPrice,
   

})=>(
   <View  
   style={styles.orderStatusCardContainer}
   >
      
      <View style={styles.orderStatusFirstColumn}>
         <FastImage source={{uri:image}} resizeMode={FastImage.resizeMode.contain} style={styles.orderStatusCartImage}/>
      </View>

      <View style={styles.orderStatusSecondColumn}>
         <View style={{top:constants.Dimensions.vh(10)}}>
            <Text style={styles.orderStatusVariantName} numberOfLines={2}>{productName}</Text>                     
         </View>  
         
         <View style={{top:constants.Dimensions.vh(10),justifyContent:'flex-end', flexDirection:'row'}}>
            <Text style={styles.orderStatusQuantity} numberOfLines={2}>{quantity} Items</Text>                     
         </View>
         <View style={{top:constants.Dimensions.vh(10),justifyContent:'flex-end', flexDirection:'row'}}>
            <Text style={styles.orderStatusPrice} numberOfLines={2}> ${productPrice}</Text>                     
         </View>
         
      </View>
       
      
   </View>
)




export const SocialPostCard = ({
   onViewProfile,
   onHype,
   onComment,
   post,
   isHype,
   profilePicture,
   postImage,
   hypesCount,
   fullName,
   shortName
})=>(
   <View style={styles.socialPostContainer}>
      <TouchableOpacity style={styles.socialPostImage}>
         <FastImage source={{ uri:postImage}} resizeMode={FastImage.resizeMode.cover} style={styles.socialImage}/>
         
         <View style={{flexDirection:'row',position:'absolute',width:constants.Dimensions.vw(100) ,top:constants.Dimensions.vh(2)}}>
            <TouchableOpacity style={{left:constants.Dimensions.vw(1)}} onPres={onViewProfile}>
               <FastImage source={{ uri:profilePicture}} resizeMode={FastImage.resizeMode.cover} style={styles.profile} />   
            </TouchableOpacity>            
            <View style={{left:constants.Dimensions.vw(4)}}>
               <Text style={styles.username}> 
                     {fullName}
               </Text>
            </View>
         </View>      

         <View style={{flexDirection:'row',bottom:constants.Dimensions.vh(20),justifyContent:'center'}}>
            <View style={styles.socialPostMenu}>
               
               <TouchableOpacity onPress={onComment}>
                  <constants.Icons.Ionicons name="chatbubble-outline" size={35} adjustsFontSizeToFit color={constants.Colors.dark}/>
               </TouchableOpacity>

               
               <TouchableOpacity onPress={onHype}>
                  {isHype ? 
                     <FastImage source={constants.Images.hype} resizeMode={FastImage.resizeMode.cover} style={styles.socialMenuIcon}/>   
                     :
                     <FastImage source={constants.Images.unhype} resizeMode={FastImage.resizeMode.cover} style={styles.socialMenuIcon}/>   
                  }
                  
               </TouchableOpacity>
            </View>
         </View>

      
      </TouchableOpacity>     
      <View style={{bottom:constants.Dimensions.vw(10),left:constants.Dimensions.vw(2)}}>
         <Text style={styles.hypeCount}>{hypesCount ? hypesCount : 0} Hypes</Text>
      </View> 
      <View style={{bottom:constants.Dimensions.vw(10),left:constants.Dimensions.vw(2),flexDirection:'row',width:constants.Dimensions.vw(90)}}>
         <Text style={styles.name}>{shortName} <Text style={styles.postMessage} numberOfLines={1} >{post}</Text></Text>         
      </View> 
   </View>
)


