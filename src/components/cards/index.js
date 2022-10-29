
import React from "react";
import { View,TouchableOpacity,Text,Image} from "react-native";
import { styles } from "./styles";
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image'
import DraggablePanel from 'react-native-draggable-panel';
import Video from 'react-native-video';
import StarRating from 'react-native-star-rating';
import moment from 'moment';
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
               <FastImage source={{ uri:productImage}} resizeMode={FastImage.resizeMode.center} style={styles.productImage}/>
            </View>   
            <View>
                  <Text style={styles.productName} numberOfLines={2}>{productName}</Text>
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
   parallaxProps,
   showGlow
})=> (
   <View style={[styles.variantCardContainer,{shadowColor:showGlow ? constants.Colors.primary : constants.Colors.dark}]}>  
      <View style={{ flex:1 }}>
         
         <FastImage source={{ uri:data.variantImage}} resizeMode={FastImage.resizeMode.contain} style={styles.variantImage}/>
         <View style={styles.variantInfo}>
         
         <View style={styles.variantNameContainer}>
            <Text style={styles.variantName} numberOfLines={2} >{data.variantName}</Text>         
            
         </View>
         <View style={{flexDirection:'row',left:constants.Dimensions.vw(50),top:constants.Dimensions.vw(5)}}>
            <Text style={styles.variantPrice} adjustsFontSizeToFit > ${data.variantPrice}</Text> 
         </View>
         <View style={{ flexDirection:'row',position:'absolute',top:constants.Dimensions.vh(30),left:constants.Dimensions.vw(5),right:0}}>
               
               <View style={{ flexDirection:'row',justifyContent:'flex-end' }}>
                  <TouchableOpacity onPress={viewProduct}  style={styles.checkVariant}>
                     <View style={{ flexDirection:'row',alignSelf:'center' }}>
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
   onDecreaseQuantity,
   onRemoveItemInCart
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
               <Text style={styles.cartTotalAmount} numberOfLines={1}>${parseFloat(data.total_amount).toFixed(2)}</Text>
            </View>
            <View  style={{flexDirection:'row',top:constants.Dimensions.vh(13),justifyContent:'flex-start',left:constants.Dimensions.vw(40)}}>
               <TouchableOpacity onPress={onRemoveItemInCart}>
                     <constants.Icons.Ionicons name="trash" size={constants.Dimensions.normalize(8)}  color={constants.Colors.primary}/>
               </TouchableOpacity>     
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
   shortName,
   onViewPost,
   mediaType,
   postDate
})=>(
   <View style={styles.socialPostContainer}>
      <TouchableOpacity style={styles.socialPostImage} onPress={onViewPost}>

         {postImage?.split('.')[1] == 'mp4' ? 
                 <Video source={{uri:`${constants.Directories.POSTS_PICTURE_DIRECTORY}/${postImage}`}}  
                        style={styles.video}
                        posterResizeMode={"center"}                 
                        allowsExternalPlayback={false}
                        resizeMode='contain'                 
                  />
            :
            <FastImage source={{ uri:`${constants.Directories.POSTS_PICTURE_DIRECTORY}/${postImage}`}} resizeMode={FastImage.resizeMode.cover} style={styles.socialImage}/>
         }
         
         
         <View style={{flexDirection:'row',position:'absolute',width:constants.Dimensions.vw(100) ,top:constants.Dimensions.vh(2)}}>
            <TouchableOpacity style={{left:constants.Dimensions.vw(1)}} onPress={onViewProfile}>
               <FastImage source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${profilePicture}` }} resizeMode={FastImage.resizeMode.cover} style={styles.profile} />   
            </TouchableOpacity>            
            <View style={{left:constants.Dimensions.vw(4)}}>
               <Text style={styles.username}> 
                     {fullName}
               </Text>
               <Text  style={styles.postDate}> 
                  {moment(postDate).fromNow()}
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
         <Text style={styles.name}>{shortName} -<Text style={styles.postMessage} numberOfLines={1} >{post}</Text></Text>         
      </View> 
   </View>
)



export const SocialPostCardNoMedia = ({
   fullName,
   profilePicture,
   onViewProfile,
   post,
   onComment,
   onHype,
   isHype,
   postDate
})=>(
   <View style={styles.socialPostNoMediaContainer}>
         <View style={{flexDirection:'row',position:'absolute',width:constants.Dimensions.vw(100),paddingTop:constants.Dimensions.vh(2)}}>
            <TouchableOpacity style={{left:constants.Dimensions.vw(1)}} onPress={onViewProfile}>
               <FastImage source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${profilePicture}` }} resizeMode={FastImage.resizeMode.cover} style={styles.profile} />   
            </TouchableOpacity>            
            <View style={{left:constants.Dimensions.vw(4)}}>
               <Text style={styles.usernameNoMedia}> 
                     {fullName}
               </Text>
               <Text style={styles.postDateNoMedia}>
                  {moment(postDate).fromNow()}
               </Text>
            </View>
         </View>     
      
         <View style={{top:constants.Dimensions.vw(20),marginHorizontal:constants.Dimensions.vw(5)}}>
            <Text style={styles.postMessageNoMedia} numberOfLines={5} >{post}</Text>        
         </View> 
         <View style={styles.divider}>                            
         </View>   
         <View style={{flexDirection:'row',top:constants.Dimensions.vh(25),justifyContent:'center'}}>
            
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
   </View>
)



export const UserProfilePicture = ({
profilePicture,
onViewStory,
fullName
})=>(
   <View style={{flexDirection:'column',alignItems:'center',marginHorizontal:constants.Dimensions.vw(2)}}>
      <TouchableOpacity onPress={onViewStory}>
         <FastImage source={{ uri:profilePicture}} resizeMode={FastImage.resizeMode.cover} style={styles.profile} />   
      </TouchableOpacity>            
      <View style={{top:constants.Dimensions.vh(2)}}>
         <Text style={styles.storyUsername} numberOfLines={1} > 
               {fullName}
         </Text>
      </View>
   </View>      
)


export const FriendSuggestionCard = ({
   fullName,
   onAddFriend,
   profilePicture,
   isSent
})=>(
   <View  
      style={styles.friendSuggestionCard}
   >  
      <View style={{flexDirection:'row'}}>         
         <FastImage source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${profilePicture}`}} resizeMode={FastImage.resizeMode.cover} style={styles.suggestionFriendProfile}/>

         <View style={{top:constants.Dimensions.vh(2),left:constants.Dimensions.vw(2)}}>
            <Text style={styles.suggestionFullName}>{fullName}</Text>
            {!isSent ? 
                  <View style={{top:constants.Dimensions.vh(2)}}>
                     <TouchableOpacity onPress={onAddFriend} style={styles.addFriendButton}>
                           <Text style={styles.addFriendText}>Add Friend</Text>
                     </TouchableOpacity>               
                  </View>  

               :
               <View>
                  <Text>Friend Request Sent</Text>
               </View> 
            }
         
         </View>
         

      </View>

      
   </View>
)

export const FriendRequestsCard = ({
   fullName,
   onAcceptFriendRequest,
   profilePicture,
   onDeclineFriendrequest,
   isAdded,
   isDeclined
})=>(
   <View  
      style={styles.friendRequestCard}
   >  
      <View style={{flexDirection:'row'}}>         
         <FastImage source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${profilePicture}`}} resizeMode={FastImage.resizeMode.cover} style={styles.suggestionFriendProfile}/>

         <View style={{top:constants.Dimensions.vh(2),left:constants.Dimensions.vw(2)}}>
            <Text style={styles.acceptFullName}>{fullName} <constants.Icons.AntDesign name="exclamationcircle" size={20} color={constants.Colors.danger}/> {isAdded}</Text>         

            {!isAdded && !isDeclined ?
               <View style={{top:constants.Dimensions.vh(2),flexDirection:'row'}}>
                  <TouchableOpacity onPress={onAcceptFriendRequest} style={styles.acceptFriendButton}>
                        <Text style={styles.acceptFriendText}>Accept </Text>
                  </TouchableOpacity>               
                  <TouchableOpacity onPress={onDeclineFriendrequest} style={styles.declineFriendButton}>
                        <Text style={styles.declineFriendText}>Decline </Text>
                  </TouchableOpacity>               
               </View>  

               : isAdded ? 
               <View>
                  <Text>Friend Request Accepted</Text>
               </View> 
               :  isDeclined &&
               <View>
                  <Text>Friend Request Declined</Text>
               </View> 


                         
            }
            
         </View>
         

     
      </View>

      
   </View>
)



export const MemberCard = ({
   fullName,
   number,
   profilePicture,
   onViewProfile
})=>(
   <View  
      style={styles.friendRequestCard}
   >  
      <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(5)}}>  
         <Text style={styles.countText}>{number}.</Text>  
         <TouchableOpacity onPress={onViewProfile}>
            <FastImage source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${profilePicture}`}} resizeMode={FastImage.resizeMode.cover} style={styles.suggestionFriendProfile}/>
         </TouchableOpacity>     
         <View style={{top:constants.Dimensions.vh(2),left:constants.Dimensions.vw(2)}}>
            <Text style={styles.acceptFullName}>{fullName}</Text>         

            
         </View>

      </View>

      
   </View>
)


export const CommentCard = ({
   fullName,
   onAddFriend,
   profilePicture,
   comment
})=>(
   <View  
      style={styles.friendSuggestionCard}
   >  
      <View style={{flexDirection:'row'}}>         
         <FastImage source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${profilePicture}`}} resizeMode={FastImage.resizeMode.cover} style={styles.suggestionFriendProfile}/>
         <View style={styles.commentContent}>
            <Text style={styles.suggestionFullName}>{fullName}</Text>     
                  <View style={{top:constants.Dimensions.vh(2)}}>
                     <Text>
                        {comment}
                     </Text>   
                  </View>        
         </View>
         

      </View>

      
   </View>
)




export const UploadingSelectionCard = ({
   showPanel,
   onDismiss,
   onPressTakePhoto,
   onPressOpenGallery
   })=>(   
       <DraggablePanel
           visible={showPanel}
           initialHeight={constants.Dimensions.vh(45)}            
           onDismiss={onDismiss}
       >
           <TouchableOpacity style={styles.uploadSelectionButton} onPress={onPressTakePhoto}>
               <View style={{ flexDirection:'row' ,justifyContent:'center'}}>
                   <constants.Icons.MaterialIcons  name="add-a-photo" size={20} color={constants.Colors.primary}/>
                   <Text style={styles.uploadSelectionText} adjustsFontSizeToFit>Take a Photo</Text>
               </View>
           </TouchableOpacity>

           <TouchableOpacity style={styles.uploadSelectionButton}  onPress={onPressOpenGallery}>
               <View style={{ flexDirection:'row',justifyContent:'center'}}>
                   <constants.Icons.MaterialIcons  name="add-photo-alternate" size={20} color={constants.Colors.primary}/>
                   <Text style={styles.uploadSelectionText} adjustsFontSizeToFit>Open Gallery</Text>
               </View>
               
           </TouchableOpacity>
       </DraggablePanel>
   );



   export const RewardHistoryCard = ({
      orderID,
      dateCreated,
      oldReward,
      newReward
   })=>
   (
      <View style={styles.rewardHistoryContainer}>
         <View style={{marginHorizontal:constants.Dimensions.vw(2),paddingVertical:constants.Dimensions.vh(2)}}>
            <View style={{flexDirection:'row'}}>
               <Text style={styles.rHOrderId}>#{orderID}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={styles.rHDateCreated}>{dateCreated}</Text>

               <Text  style={styles.rHOldReward}>{oldReward.toFixed(2)}</Text>
               <constants.Icons.Ionicons
                  name="arrow-forward-sharp"
                  size={constants.Dimensions.normalize(8)}
                  style={{left:constants.Dimensions.vw(10),}}
               />
               <Text style={styles.rHNewReward}>{newReward.toFixed(2)}</Text>
              
            </View>
         </View>

      </View>
   )


   export const ProductReviewCard = ({
      profilePicture,
      fullName,
      review,
      rating,
      attachments
   })=>
   (
      <View style={styles.productReviewContainer}>   
            <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(5),marginVertical:constants.Dimensions.vh(4)}}>
               <View>
                  <FastImage source={{uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${profilePicture}`}} resizeMode={FastImage.resizeMode.contain} style={styles.userProfile}/>
               </View>
               <View style={{left:constants.Dimensions.vw(2)}}>
                  <Text style={styles.reviewUserFullName} numberOfLines={1}>{fullName}</Text>
               </View>
            </View>
            <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(5),marginVertical:constants.Dimensions.vh(4)}}>
               <Text style={styles.reviewText}>{review}</Text>
            </View>
            <View>
               {attachments()}
            </View>
            <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(5),marginVertical:constants.Dimensions.vh(2)}}>
            <StarRating
                  disabled={false}
                  maxStars={5}
                  fullStarColor={constants.Colors.warning}
                  rating={rating}               
                  starSize={constants.Dimensions.normalize(10)}
                  
               />
            </View>
      </View>  
   )
