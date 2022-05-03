import React from 'react';

import { View,Text,ScrollView,InteractionManager, FlatList} from 'react-native';

import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getCart,increaseQuantity,decreaseQuantity } from '../../../actions/market';
import { GET_SESSION } from '../../../utils/async_storage';
import { computeCart } from "../../../utils/functions";
import { checkout} from '../../../actions/order';
import Toast from 'react-native-toast-message';

export default class Order extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:true,    
          cart:this.props.route.params.cart,
          orderId:this.props.route.params.orderId,           
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
        

       
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


    handlePay = async () =>{


       
    }
    

    render(){
     
        return this.state.isReadyToRender ? (
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'My Orders'}
                />             

            <View>
                <ScrollView>
                    <FlatList
                        scrollEnabled
                        data={this.state.cart}
                        renderItem={this.renderCart}
                        contentContainerStyle={{top:constants.Dimensions.vh(5),paddingBottom:constants.Dimensions.vh(80)}}
                        ListEmptyComponent={this.renderEmptyComponent}
                    />   
                </ScrollView>
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
               <View style={{flexDirection:'row',marginHorizontal:constants.Dimensions.vw(10),bottom:constants.Dimensions.vh(2)}}>
                   <View style={{flex:1,justifyContent:'flex-start'}}>
                        <Text style={styles.subTotalText}>Sub Total:</Text>
                   </View>
                   <View style={{flex:0,justifyContent:'flex-end'}}>
                        <Text style={styles.subTotalValue} >${computeCart(this.state.cart)}</Text>
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
  