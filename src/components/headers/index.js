
import React from "react";
import { View,TouchableOpacity,TextInput,Text } from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const ProfileHeader = ({
    goToProfileSettings
 })=>(   
    <>   
        
        <View style={styles.marketContainer}>     

            <View style={styles.buttonContainer}>                     
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
    showGoback
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
   
})=>(   
   <>  
        <View style={styles.primaryContainer}>
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

        
        </View>             
   </>
);
