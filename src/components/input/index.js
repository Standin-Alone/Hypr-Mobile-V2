
import React from "react";
import { View,TouchableOpacity,TextInput,Text } from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PhoneInput from "react-native-phone-number-input";
export const PrimaryTextInput = ({
    label,
    onChangeText,
    onBlur,
    onFocus,
    isFocus,
    secureTextEntry,
    iconName,
    placeholder,
    isError,
    errorMessage,
    value
    

})=>(   

   <View>
       <View style={styles.primaryContainer}>  
            <View style={styles.icon}>
                <MaterialIcons 
                    name={iconName} 
                    size={40} 
                    color={isError ? constants.Colors.danger :
                                                isFocus ||  value != '' ? 
                                                        constants.Colors.primary                                                                                                           
                                                        :
                                                            constants.Colors.gray
                            } 
                    style={{ top:10 }} />
            </View>

            <View>
                
                <TextInput 
                    placeholder={placeholder}     
                    placeholderTextColor={constants.Colors.gray}            
                    style={[styles.primaryInput,
                                {borderColor:  isError ? constants.Colors.danger :
                                                isFocus ||  value != '' ? 
                                                        constants.Colors.primary                                                                                                           
                                                        :
                                                            constants.Colors.gray
                                }]} 
                    onFocus={onFocus} 
                    onBlur={onBlur} 
                    secureTextEntry={secureTextEntry} 
                    onChangeText={onChangeText}
                    adjustsFontSizeToFit
                    />
                {isError && 
                    <View style={{ flexDirection:'row',width:constants.Dimensions.vw(90) }}>
                        <MaterialIcons 
                            name={'error-outline'} 
                            size={16} 
                            color={constants.Colors.danger}                     
                            />
                            <Text style={styles.primaryErrorMessage} adjustsFontSizeToFit> {errorMessage}</Text>
                    </View>
                }
            </View>
       </View>
       
   </View>
);


export const PrimaryPhoneInput = ({

value,
onChangeText,
onChangeFormattedText,
onChangeCountry,
isError,
errorMessage
})=>{
    return (
        <View>
            <PhoneInput           
                textInputStyle={styles.phoneInput}
                defaultValue={value}
                defaultCode="PH"
                layout="first"
                onChangeText={onChangeText}
                onChangeFormattedText={onChangeFormattedText}          
                onChangeCountry = {onChangeCountry}    
                containerStyle ={styles.phoneInputContainer}                       
            />
             {isError && 
                    <View style={{ flexDirection:'row',width:constants.Dimensions.vw(90) }}>
                        <MaterialIcons 
                            name={'error-outline'} 
                            size={16} 
                            color={constants.Colors.danger}                     
                            />
                            <Text style={styles.primaryErrorMessage} adjustsFontSizeToFit> {errorMessage}</Text>
                    </View>
            }
        </View>
    )
}