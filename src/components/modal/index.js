
import React from "react";
import { View,Text,Modal,TouchableOpacity,TextInput, ActivityIndicator} from "react-native";
import { styles } from "./styles";
import constants from "../../constants";



export const PaymentMethodModal = ({
    openModal,
    onCloseModal,
    onPress,
    points
}) => {

    return (
        
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
                onRequestClose={onCloseModal}                
            >
                
                <View style={styles.container}>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                        <Text style={styles.title}>Select Payment Method</Text>                
                        <TouchableOpacity style={styles.title} onPress={onCloseModal} >
                                <constants.Icons.Fontisto 
                                    name="close"
                                    size={20}
                                    color={constants.Colors.fade}
                                />     
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'column',top:constants.Dimensions.vh(10)}}>
                        <TouchableOpacity style={styles.button} onPress={()=>onPress('paypal')}>
                            <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                                <constants.Icons.FontAwesome 
                                    name="cc-paypal"
                                    size={40}
                                    color={constants.Colors.primary}
                                />                            
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={()=>onPress('stripe')}>
                            <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                                <constants.Icons.FontAwesome 
                                    name="cc-stripe"
                                    size={40}
                                    color={constants.Colors.primary}
                                />                            
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={()=>onPress('hypr')}>
                            <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                                    <Text style={styles.hyprPoints}> {points} Hypr Points</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                   
                </View>
            </Modal>
                 
    );
}




export const ShareReferralLinkModal = ({
    openModal,
    onCloseModal,    
    referralLink,
    onCopy
}) => {

    return (
        
            <Modal
                animationType="fade"
                transparent={true}
                visible={openModal}
                onRequestClose={onCloseModal}                
                
            >
                  <View style={styles.referralModal}>
                        <View style={styles.referralContent}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:constants.Dimensions.vw(4)}}>
                                <View style={{top:constants.Dimensions.vw(2),}}>
                                    <Text style={styles.modalHeaderTitle}>Share Referral Link</Text>
                                </View>
                                <View style={{left:constants.Dimensions.vw(2),top:constants.Dimensions.vw(2),}}>
                                    <constants.Icons.Ionicons name="close" size={20} onPress={onCloseModal}/>
                                </View>
                            </View>
                            <View style={styles.primaryContainer}>                              
                                <View>                
                                    <View                                                                                              
                                        style={[styles.shareLinkTextInput,]}                                                                                 
                                    
                                        numberOfLines={1}
                                        >
                                        <Text style={[styles.referralLink]} numberOfLines={1} ellipsizeMode='middle'  >
                                            {referralLink}
                                        </Text>
                                   </View>
                                    
                                </View>                                
                                <TouchableOpacity style={styles.icon}     onPress={onCopy}>
                                    <constants.Icons.Ionicons 
                                            name={'copy'} 
                                            size={30} 
                                            color={ constants.Colors.primary }                                                                        
                                            style={{ top:10 }} 
                                       
                                        />
                                </TouchableOpacity>
                            </View>
                        </View>
                  </View>            
            </Modal>
                 
    );
}




export const ProgressLoadingModal = ({
    openModal,
    onCloseModal,    
    title
}) => {

    return (
        
            <Modal
                animationType="fade"
                transparent={true}
                visible={openModal}
                onRequestClose={onCloseModal}                                
            >
                <View style={{backgroundColor:constants.Colors.transparent_black,flex:1}}> 
                    <View style={styles.dialogContainer}>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:constants.Dimensions.vw(5),top:constants.Dimensions.vh(5),left:constants.Dimensions.vw(15)}}>                            
                            <ActivityIndicator size={constants.Dimensions.normalize(16)} style={{right:constants.Dimensions.vw(20)}} color={constants.Colors.primary}/>
                            <View style={{right:constants.Dimensions.vw(20),top:constants.Dimensions.vh(2)}}>
                                <Text style={styles.processingText}>{title ? title: 'Processing...'}</Text>
                            </View>                            
                        </View>
                    </View>
                </View>       
            </Modal>
                 
    );
}