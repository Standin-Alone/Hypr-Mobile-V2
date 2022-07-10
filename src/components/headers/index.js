
import React from "react";
import { View,TouchableOpacity,TextInput,Text,ImageBackground } from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image'



export const FriendHeader = ({
    goToProfileSettings,
    onCreatePost
 })=>(   
    <>   
        
            <View style={styles.socialContainer}>     
                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}} blurRadius={2}>
                    <View style={{flexDirection:'row'}}>                    
                        <View >
                            <FastImage source={constants.Images.hyprLogoNew} resizeMode={FastImage.resizeMode.contain} style={styles.logo}/>
                        </View>    
                        <View style={[styles.buttonContainer,{left:constants.Dimensions.vw(65)}]}>                                        
                        
                        </View>                   
                    </View>
                </ImageBackground>               
            </View>    
        
    </>
);


export const CommentHeader = ({
    hypesCount
 })=>(   
    <>           
            <View style={styles.socialContainer}>     
                <View style={{flexDirection:'row'}}>
                        <View >
                            <FastImage source={constants.Images.hype} resizeMode={FastImage.resizeMode.contain} style={styles.commentHypes}/>                            
                        </View> 
                        <View style={{flexDirection:'row',top:constants.Dimensions.vh(2)}}>
                                <Text style={{ fontSize: 16, color: constants.Colors.dark_tint}}>{hypesCount}</Text>
                                <constants.Icons.Ionicons 
                                        name="md-chevron-forward" 
                                        size={18} 
                                        color={constants.Colors.secondary}
                                    />
                        </View>


                        <View>
                            <View  style={{left:constants.Dimensions.vw(70)}}>
                                <FastImage source={constants.Images.unhype} resizeMode={FastImage.resizeMode.contain} style={styles.commentHypes}/>                            
                            </View>
                        </View>
 
                                
                
                </View>     
            </View>    
        
    </>
);


export const SocialHeader = ({
    goToProfileSettings,
    onCreatePost
 })=>(   
    <>   
        
            <View style={styles.socialContainer}>     
                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}} blurRadius={2}>
                    <View style={{flexDirection:'row'}}>                    
                        <View >
                            <FastImage source={constants.Images.hyprLogoNew} resizeMode={FastImage.resizeMode.contain} style={styles.logo}/>
                        </View>    
                        <View style={[styles.buttonContainer,{left:constants.Dimensions.vw(65)}]}>        
                            <TouchableOpacity onPress={onCreatePost}  style={{ padding:15 }}>
                                    <constants.Icons.Ionicons 
                                        name="camera" 
                                        size={30} 
                                        color={constants.Colors.secondary}
                                    />
                            </TouchableOpacity>                
                            {/* <TouchableOpacity onPress={goToProfileSettings}  style={{ padding:15 }}>
                                <constants.Icons.Ionicons 
                                    name="chatbubble-ellipses" 
                                    size={30} 
                                    color={constants.Colors.secondary}
                                />
                            </TouchableOpacity>                        */}
                        </View>                   
                    </View>
                </ImageBackground>               
            </View>    
        
    </>
);



export const ProfileHeader = ({
    goToProfileSettings,
    onShareReferralLink
 })=>(   
    <>   
        
        <View style={styles.marketContainer}>     

            <View style={styles.buttonContainer}>        
                <TouchableOpacity onPress={onShareReferralLink}  style={{ padding:15 }}>
                        <MaterialCommunityIcons 
                            name="share" 
                            size={30} 
                            color={constants.Colors.primary}
                        />
                </TouchableOpacity>                
                <TouchableOpacity onPress={goToProfileSettings}  style={{ padding:15 }}>
                    <MaterialCommunityIcons 
                        name="cog" 
                        size={30} 
                        color={constants.Colors.primary}
                    />
                </TouchableOpacity>                       
            </View>                       
         </View>    
    </>
);




export const MarketHeader = ({
    title,
    onGoBack,
    onGoToShoppingCart,
    goToWishList,
    goToShoppingCart,
    goToSearch,
    showSearch,
    showGoback,
    isNotificationCount,
    notificationCount
 })=>(   
    <>   
        
        <View style={styles.marketContainer}>     
        {showGoback &&       
           <View style={{justifyContent:'flex-start',flexDirection:'row', right:constants.Dimensions.vw(60) }}>
                <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
                    <MaterialIcons 
                        name="chevron-left" 
                        size={45} 
                        color={constants.Colors.primary}
                    />
                </TouchableOpacity>
            </View>
            }
            {showSearch &&
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goToSearch} style={styles.searchButton}>
                    <View style={{ flexDirection:'row' }}>                    
                        <View style={{ flexDirection:'row',justifyContent:'flex-start' }}>
                            <MaterialIcons 
                                name="search" 
                                size={30} 
                                color={constants.Colors.primary}
                            />
                        </View>
                        <View style={{ flexDirection:'row',justifyContent:'center' }}>
                            <Text style={styles.searchText}>Search</Text>
                        </View>           
                    </View>         
                </TouchableOpacity>
            </View>
            }
            <View style={styles.buttonContainer}>                     
                <TouchableOpacity onPress={goToShoppingCart} style={{ padding:15 }}>
                    <MaterialIcons 
                        name="shopping-cart" 
                        size={30} 
                        color={constants.Colors.primary}
                    />
                </TouchableOpacity>                       
                {
                    isNotificationCount &&
                    <View
                        style={styles.notification}
                    >
                        <Text style={{ fontSize: 12, color: "#fff" }}>{notificationCount}</Text>
                    </View>
                }
            </View>  
            <View style={styles.buttonContainer}>                     
                <TouchableOpacity onPress={goToWishList}  style={{ padding:15 }}>
                    <MaterialCommunityIcons 
                        name="cards-heart" 
                        size={30} 
                        color={constants.Colors.primary}
                    />
                </TouchableOpacity>                       
            </View>                       
         </View>    
    </>
 );



 

export const PrimaryHeader = ({
   title,
   onGoBack,
   goToWishList,
   goToShoppingCart,    
   showMarketButtons,
   showSearchText,
   onChangeSearchText,
   onSearchSubmit,


   onBlur,
   onFocus,
   isFocus,
   value,
   customStyle,

// CREATE POST FUNCTIONS
   showPostButton,
   onCreatePost,
// NEXT FUNCTION
showNextButton,
onNext
})=>(   
   <>  
        <View style={[styles.primaryContainer,customStyle]}>
            <TouchableOpacity onPress={onGoBack}>
                <MaterialIcons 
                    name="chevron-left" 
                    size={40} 
                    color={constants.Colors.primary}
                />
            </TouchableOpacity>

            <View>
                <Text style={styles.primaryTitle}>
                    {title}
                </Text>
            </View>


            {showSearchText &&
                <View style={{  justifyContent:'flex-end',flexDirection:'row',}}>

                    <View style={{flexDirection:'row'}}>
                        <View style={{top:constants.Dimensions.vh(4)}}>
                            <MaterialIcons 
                                name="search" 
                                size={20} 
                                color={constants.Colors.primary}
                                style={styles.searchIcon}
                            />
                        </View>
                        <View>
                            <TextInput
                                onChangeText={onChangeSearchText}
                                style={[styles.searchTextInput, {borderColor: isFocus ||  value != '' ? 
                                                        constants.Colors.primary                                                                                                           
                                                        :
                                                        constants.Colors.gray
                                    }]}
                                autoFocus={true}
                                placeholder={'What are you looking for?'}
                                onBlur={onBlur}
                                onFocus={onFocus}
                                value={value}                                
                                onSubmitEditing={onSearchSubmit}
                            />
                        </View>
                    </View>
                    
                </View>
            }


            {showMarketButtons &&            
            <View style={{  justifyContent:'flex-end',
            flexDirection:'row',
             }}>
            
                <View style={styles.buttonContainer}>                     
                    <TouchableOpacity onPress={goToShoppingCart} style={{ padding:15 }}>
                        <MaterialIcons 
                            name="shopping-cart" 
                            size={30} 
                            color={constants.Colors.primary}
                        />
                    </TouchableOpacity>                       
                </View>  
                <View style={styles.buttonContainer}>                     
                    <TouchableOpacity onPress={goToWishList}  style={{ padding:15 }}>
                        <MaterialCommunityIcons 
                            name="cards-heart" 
                            size={30} 
                            color={constants.Colors.primary}
                        />
                    </TouchableOpacity>                       
                </View>   
            </View>
            }

            
            {showPostButton &&

                <View style={{  justifyContent:'flex-end',
                    flexDirection:'row',
                    left:constants.Dimensions.vw(40)
                }}>
            
                    <View style={styles.postButtonContainer}>                     
                        <TouchableOpacity onPress={onCreatePost} style={{ paddingVertical:constants.Dimensions.vh(2),flexDirection:'row' }} >
                            <constants.Icons.SimpleLineIcons 
                                name="note" 
                                size={25} 
                                color={constants.Colors.secondary}
                            />
                            <View style={{top:constants.Dimensions.vh(1.5) }}>                        
                                <Text style={styles.postText}>
                                    POST
                                </Text>
                            </View>
                        </TouchableOpacity>                       
                    </View>               
                </View>
            }

            {showNextButton &&

                <View style={{  justifyContent:'flex-end',
                    flexDirection:'row',
                    left:constants.Dimensions.vw(80)
                }}>
            
                    <TouchableOpacity onPress={onNext}>
                        <MaterialIcons 
                            name="chevron-right" 
                            size={40} 
                            color={constants.Colors.secondary}
                        />
                    </TouchableOpacity>              
                </View>
            }
        </View>             
   </>
);
