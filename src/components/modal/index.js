
import React from "react";
import { View,Text,Modal,TouchableOpacity} from "react-native";
import { styles } from "./styles";
import constants from "../../constants";



export const PaymentMethodModal = ({
    openModal,
    onCloseModal,
    onPress
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

                    </View>
                   
                </View>
            </Modal>
                 
    );
}