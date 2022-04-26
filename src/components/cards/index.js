
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
