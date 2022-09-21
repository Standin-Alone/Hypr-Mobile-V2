
import React from "react";
import { View,TouchableOpacity,TextInput,Text } from "react-native";
import { styles } from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import constants from "../../constants";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PhoneInput from "react-native-phone-number-input";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker from 'react-native-country-picker-modal';
import MultiSelect from 'react-native-multiple-select';

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
    value,
    openDatePicker,
    onPressIn,
    onChangeDate,
    multiline,
    showSecureTextEntry,
    onShowPassword

})=>(   

   <View>
       <View style={styles.primaryContainer}>  
            <View style={styles.icon}>
                <MaterialIcons 
                    name={iconName} 
                    size={constants.Dimensions.normalize(14)} 
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
                    multiline={multiline}
                    onPressIn={onPressIn}
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
                    value={value}
                    adjustsFontSizeToFit
                    />

                {
                    openDatePicker &&
                    <RNDateTimePicker            
                        onChange={onChangeDate}    
                        
                        display={'spinner'}                 
                        value={new Date(1999,4,20)} 
                    />
                }

                
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

            {
                showSecureTextEntry &&
                <View  style={styles.secureTextEntry}>
                    <TouchableOpacity onPress={onShowPassword}>
                        { secureTextEntry ? 
                         <constants.Icons.Ionicons
                              name="eye"
                               size={constants.Dimensions.normalize(14)}
                                color={constants.Colors.primary}
                            />
                            :
                            <constants.Icons.Ionicons
                                name="eye-off"
                                size={constants.Dimensions.normalize(14)}
                                color={constants.Colors.primary}
                            />
                        }
                        
                    </TouchableOpacity>
                </View>

            }
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
                defaultCode="IT"
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




export const PrimaryCountrySelect = ({
    
    onSelectCountry,
    iconName,
    isError,
    errorMessage,
    value,
    onOpen,
    onClose,
    isFocus,
    
   
    })=>{
        return (
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
                                <CountryPicker
                                  withFlag
                                  withFilter
                                  onSelect={onSelectCountry}
                                  containerButtonStyle={[styles.country, {borderColor:  isError ? constants.Colors.danger :
                                                                                    isFocus ||  value != '' ? 
                                                                                            constants.Colors.primary                                                                                                           
                                                                                            :
                                                                                                constants.Colors.gray
                                                        }]}
                                  countryCode={value}
                                  withCountryNameButton
                                  onOpen={onOpen}
                                  onClose={onClose}
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
        )
}
    
    


export const PrimaryCitySelect = ({
    
    onSelect,
    iconName,
    isError,
    value,    
    isFocus,
    items,
    errorMessage
   
    })=>{
        return (
            
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

        <MultiSelect
          hideTags
          items={items}
          uniqueKey="state_name"          
          onSelectedItemsChange={onSelect}
          fixedHeight={constants.Dimensions.vh(10)}
          selectedItems={[value]}
          styleMainWrapper={styles.citySelect}
          styleDropdownMenu={{ backgroundColor:'transparent' }}
          selectText="Select City"
          searchInputPlaceholderText="Search city..."          
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor={constants.Colors.dark}
          selectedItemIconColor={constants.Colors.dark}
          itemTextColor="#000"
          displayKey="state_name"
          searchInputStyle={{ color: constants.Colors.dark_tint }}
          styleTextDropdown={{ backgroundColor:'transparent' }}           
          styleInputGroup={{ backgroundColor:'transparent'  }}           
          styleDropdownMenuSubsection={{ backgroundColor:'transparent' }}
          noItemsText={"No Cities"}          
          submitButtonText="Submit"          
          single={true}
        
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
        )
}







export const PrimaryStateSelect = ({
    
    onSelect,
    iconName,
    isError,
    value,    
    isFocus,
    items,
    errorMessage
   
    })=>{
        return (
            
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

        <MultiSelect
          hideTags
          items={items}
          uniqueKey="state_name"          
          onSelectedItemsChange={onSelect}
          fixedHeight={constants.Dimensions.vh(10)}
          selectedItems={[value]}
          styleMainWrapper={styles.citySelect}
          styleDropdownMenu={{ backgroundColor:'transparent' }}
          selectText="Select State"
          searchInputPlaceholderText="Search state..."          
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor={constants.Colors.dark}
          selectedItemIconColor={constants.Colors.dark}
          itemTextColor="#000"
          displayKey="state_name"
          searchInputStyle={{ color: constants.Colors.dark_tint ,fontFamily:constants.Fonts.GothamMedium}}
          styleTextDropdown={{ backgroundColor:'transparent' ,fontFamily:constants.Fonts.GothamMedium}}           
          styleTextDropdownSelected={{fontFamily:constants.Fonts.GothamMedium}}
          styleInputGroup={{ backgroundColor:'transparent',fontFamily:constants.Fonts.GothamMedium  }}           
          styleDropdownMenuSubsection={{ backgroundColor:'transparent' }}
          noItemsText={"No States"}                    
          submitButtonText="Submit"     
               
          single={true}
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
        )
}





export const PrimaryInputNoBorder = ({
    onChangeText,
    value,
    placeholder
    })=>{
        return (
            
        <View>
            <TextInput
              onChangeText={onChangeText}
              value={value}
              placeholder={placeholder}
              style={styles.primaryInputNoBorder}
              numberOfLines={5}
              multiline
            />
        </View>
        )
}



export const CommentInput = ({
    onChangeText,
    value,
    placeholder,
    onFocus,
    onBlur
    })=>{
        return (
            
        <View>
            <View style={{marginVertical:constants.Dimensions.vh(4),marginHorizontal:constants.Dimensions.vw(2)}}>
            
            <TextInput
              onChangeText={onChangeText}
              value={value}
              placeholder={placeholder}
              style={styles.commentInput}
              numberOfLines={5}
              onFocus={onFocus}
              onBlur={onBlur}              
              multiline
              
            />
            </View>
        </View>
        )
}


export const SearchInput =  ({
    onChangeText,
    value,
    placeholder,
    onFocus,
    onBlur
})=>{
    return(

        <View style={{marginVertical:constants.Dimensions.vh(10),marginHorizontal:constants.Dimensions.vw(2)}}>
            <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>    

            <View  style={styles.searchInputIcon}  >     
                <constants.Icons.Ionicons
                name="ios-search-outline"  
                size={constants.Dimensions.normalize(10)} 
                
                color={constants.Colors.gray_tint}
                />
            </View>
     
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                style={styles.searchInput}     
                onFocus={onFocus}
                onBlur={onBlur}              
            />
            
            </View>
        </View>
     
    )
}