import React from 'react';

import { View,Text,ScrollView,InteractionManager, FlatList} from 'react-native';

import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { increaseQuantity,decreaseQuantity } from '../../../actions/market';

import { computeCart } from "../../../utils/functions";
import { pay} from '../../../actions/order';
import Toast from 'react-native-toast-message';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GET_SESSION } from '../../../utils/async_storage';
import { getUserInfo } from '../../../actions/auth';

export default class Order extends React.Component {
    constructor(props) {
      super(props);
      this.state = {     
          userInfo:[], 
          isReadyToRender:false,    
          cart:this.props.route.params.cart,
          orderId:this.props.route.params.orderId,           
          selectedPaymentMethod:'',
          openPaymentMethodModal:false,
          isProgress:false
      };
    }

     
    setMyState = (value)=>this.setState(value)


    componentDidMount(){          
        
        getUserInfo(this.setMyState);
        console.warn(this.props.route.params.cart)
       
       InteractionManager.runAfterInteractions(()=>{
         this.setState({isReadyToRender:true})
       })
 
    }   




    handleDecreaseQuantity = (item)=>{

        let payload = {
            item:item
        }

        return decreaseQuantity(payload,this.setMyState,this.props)
    }

    handleIncreaseQuantity = (item)=>{
        let payload = {
            item:item
        }
        return increaseQuantity(payload,this.setMyState,this.props)
    }

    renderCart  = ({item,index})=>{        
        return(
            <>
                <Components.CartCard
                    data={item}                    
                    onDecreaseQuantity={()=>this.handleDecreaseQuantity(item)}
                    onIncreaseQuantity={()=>this.handleIncreaseQuantity(item)}                    
                    quantity={item.quantity}               
                />
            </>
        )
    }

  

   
    renderEmptyComponent = ()=>(
        <View style={{alignContent:'center',alignSelf:'center'}}>
            <MaterialIcons 
                name={'remove-shopping-cart'}
                size={400} 
                color={constants.Colors.fade}
            />
            <Text style={styles.emptyCartText} adjustsFontSizeToFit>Oops!</Text>
            <Text style={styles.emptyCartText} adjustsFontSizeToFit>Your cart is empty.</Text>
        </View>
    )

    
    handleOpenPaymentModal(){
        this.setState({openPaymentMethodModal:true})
    }


    // HANDLE PAY BUTTON
    handlePay = async () =>{
        let payload ={
            cart:this.state.cart,
            paymentMethod:this.state.selectedPaymentMethod,
            orderId:this.state.orderId,
            userId: await GET_SESSION('USER_ID'),
            points:this.state.userInfo?.reward,
            lineItemsPayload:[] // for stripe only.
        }
        this.setState({isProgress:true});
        if(this.state.selectedPaymentMethod != ''){
            return pay(payload,this.setMyState,this.props)
        }else{
            Toast.show({
                type:'error',
                text1: 'Error',
                text2:'Please select payment method first'
            });
            this.setState({isProgress:false});
        }
    }
    
    
    handleSelectPaymentMethod = (paymentMethod)=>{
        this.setState({selectedPaymentMethod:paymentMethod,openPaymentMethodModal:false})
    }

    render(){
     
        return this.state.isReadyToRender ? (
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'My Orders'}
                />             
            <Components.ProgressLoadingModal
                    openModal={this.state.isProgress}
                />

            <Components.PaymentMethodModal
                openModal={this.state.openPaymentMethodModal}
                onCloseModal={()=> this.setState({openPaymentMethodModal:false})}
                onPress={(paymentMethod)=>this.handleSelectPaymentMethod(paymentMethod)}
                points={this.state.userInfo?.reward}
            />
            <View>
              
                <View style={styles.itemCountContainer}>
                    <Text style={styles.itemCountText}>{`${this.state.cart.length} items`}</Text>
                </View>
                <ScrollView style={{ height:constants.Dimensions.vh(115),}}>
                    <View style={{flexGrow:1}}>
                        <FlatList
                            scrollEnabled
                            data={this.state.cart}
                            renderItem={this.renderCart}
                            contentContainerStyle={{
                                top:constants.Dimensions.vh(5),
                                paddingBottom:constants.Dimensions.vh(30),                           
                                
                            }}
                            ListEmptyComponent={this.renderEmptyComponent}
                        />   
                    </View>
                </ScrollView>
            </View>
            
            
            <View style={styles.subTotalContainer}>

                <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(10)}}>
                   <View style={{flex:1,justifyContent:'flex-start'}}>
                        <Text style={[styles.subTotalText,{color:constants.Colors.dark}]}> Sub Total:</Text>
                   </View>
                   <View style={{flex:0,justifyContent:'flex-end'}}>
                        <Text style={[styles.subTotalValue,{color:constants.Colors.dark}]} >${computeCart(this.state.cart)}</Text>
                   </View>                                  
               </View>
            </View>
            

                        
            <View style={styles.totalContainer}>

                <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(10)}}>
                   <View style={{flex:1,justifyContent:'flex-start'}}>
                        <Text style={[styles.subTotalText,{color:constants.Colors.dark}]}> Total:</Text>
                   </View>
                   <View style={{flex:0,justifyContent:'flex-end',flexDirection:'row'}}>
                        <Text style={[styles.subTotalValue,{color:constants.Colors.dark}]} >${(parseFloat(computeCart(this.state.cart))  + parseFloat(this.state.cart[0].freight_calculation[0].logisticPrice)).toFixed(2)} </Text>
                        <Text>
                            (+<constants.Icons.FontAwesome name='truck'  color={constants.Colors.dark_tint}/>)
                        </Text>
                        
                   </View>                                  
               </View>
            </View>
            
            <View style={styles.paymentMethodContainer}>

                <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(10)}}>
                   <View style={{flex:1,justifyContent:'flex-start'}}>
                        <Text style={styles.subTotalText}>Payment Method:</Text>
                   </View>

          
                        <TouchableOpacity style={{flex:0,justifyContent:'flex-end'}} onPress={()=>this.handleOpenPaymentModal()}>
                            <Text style={styles.selectPayment} >    
                            {  this.state.selectedPaymentMethod == '' ?
                                 'Select Payment...' 
                                 : 

                                 this.state.selectedPaymentMethod == 'hypr' ? 
                                     <Text style={styles.hyprPoints}> use {this.state.userInfo?.reward} Hypr Points</Text>
                                 :
                                 <constants.Icons.FontAwesome 
                                    name={'cc-'+this.state.selectedPaymentMethod}
                                    size={30}
                                    color={constants.Colors.primary}
                                /> 
                                } </Text>
                        </TouchableOpacity>   
                        
                        
                    
                                                 
               </View>
       

            </View>

            <View style={styles.buttonContainer}>       
               
               <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(10),bottom:constants.Dimensions.vh(2)}}>
                   <View style={{flex:1,justifyContent:'flex-start'}}>
                        <Text style={styles.subTotalText}>Order ID:</Text>
                   </View>
                   <View style={{flex:0,justifyContent:'flex-end'}}>
                        <Text style={styles.subTotalValue} >{this.state.orderId}</Text>
                   </View>                                  
               </View>         
               
            
                <Components.PrimaryButton                              
                    title={`Pay $${computeCart(this.state.cart)}`}  
                    onPress={this.handlePay}                          
                    isLoading={this.state.isLoading}
                />
            </View>
            
            </>
        ) : (

            <View>
                <Text>Loading...</Text>
            </View>
        )
        
    }

}
  