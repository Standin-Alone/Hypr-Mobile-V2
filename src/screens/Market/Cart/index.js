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

export default class Cart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:true,             
          cart:[],   
          cartPerCountry:[],
          isLoading:false,
          selectedProducts:[],
          isLoadingData:true       
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
        
       getCart(this.setMyState);
       
     
 
    }   


    handleSelectProduct = (item)=>{
        let selectedProducts = [...this.state.cart];

        selectedProducts.map((product)=>{
            if(product._id == item._id ){       
            

                if(product.shipping_address[0].country == item.shipping_address[0].country){
                    if(item.isSelected){
                        product.isSelected = false 
                    }else{                    
                        product.isSelected = true                    
                    }   
                }
                           
            }
        });

        
        this.setState({cart:selectedProducts});
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
                    onSelect={()=>this.handleSelectProduct(item)}
                    onDecreaseQuantity={()=>this.handleDecreaseQuantity(item)}
                    onIncreaseQuantity={()=>this.handleIncreaseQuantity(item)}
                    isSelected={item.isSelected}
                    quantity={item.quantity}               
                />
            </>
        )
    }

  
    renderCartCountry = ({item,index})=>{
        
        return (<View style={styles.countryContainer}>            

                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.countryText}>{item}</Text>
                        {/* <TouchableOpacity>
                                <Text>Select All</Text>
                        </TouchableOpacity> */}
                    </View>  

                    <FlatList
                        data={this.state.cart.filter((filterVal)=>filterVal.shipping_address[0].country == item)}
                        renderItem={this.renderCart}                        
                    />                                                                              
                </View>
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


    handleCheckout = async () =>{


        let checkIfCartIsEmpty = this.state.cart.filter((item)=>item.isSelected == true).length;

        if(checkIfCartIsEmpty != 0){

        
            let payload = {
                cart:this.state.cart.filter((item)=>item.isSelected == true),
                userId: await GET_SESSION('USER_ID')
            }

            return checkout(payload,this.setMyState,this.props)
        }else{
            Toast.show({
                text1: 'Error',
                text2: "Please select at least one product.",
                type: "error",
                position: "top"
            });
        }
    }
    

    render(){
     
        return  (
            <>
            <View style={{flex:1,backgroundColor:constants.Colors.light}}>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'My Cart'}
                />          

                {this.state.isLoadingData ? (
                    <Components.LoadingScreen/>

                ): (
                    <>
                    <View>
                        <ScrollView>
                            <FlatList
                                scrollEnabled
                                data={this.state.cartPerCountry}
                                renderItem={this.renderCartCountry}
                                contentContainerStyle={{top:constants.Dimensions.vh(5),paddingBottom:constants.Dimensions.vh(80)}}
                                ListEmptyComponent={this.renderEmptyComponent}
                            />   
                        </ScrollView>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Components.PrimaryButton                              
                            title={`Checkout $${computeCart(this.state.cart.filter((item)=>item.isSelected == true))}`}  
                            onPress={this.handleCheckout}                          
                            isLoading={this.state.isLoading}
                        />
                    </View>
                    </>


                )
                    }
              
            </View>
            </>
        ) 
        
     
    }

}
  