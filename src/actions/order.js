import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage';

export const checkout = (payload,setState,props)=>{

  
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){



            let cleanPayload = {
                products:[]
            };

            let cart = payload.cart;
            let address = payload.cart[0].shipping_address[0];
            console.warn(cart);
             
             cleanPayload.zip = address.zip_code;      
             cleanPayload.sccode  = address.country_code;
             cleanPayload.country = address.country;
             cleanPayload.province = address.city;
             cleanPayload.city = address.city;
             cleanPayload.address = address.address;
             cleanPayload.name = address.full_name;
             cleanPayload.phone = address.contact;
             cleanPayload.fccode = 'CN';
             cleanPayload.logistic = payload.cart[0].freight_calculation[0].logisticName;               
             
             cart.map((product=>{
                 
                 cleanPayload.products.push({
                     vid:product.variant_id,
                     quantity: product.quantity,
                     shippingName: `${product.variant_name}`,
                     sellPrice: product.product_price,
                 })
             }))

            
             console.warn(cleanPayload);
            // POST REQUEST
            POST(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.CHECKOUT}`,cleanPayload).then((response)=>{                    
                console.warn(response);
                if(response.data.result == true){
                                                                   
                    
                    setState({orderId:response.data.data})


                    let parameters = {
                        cart:cart,
                        orderId:response.data.data
                    }

                    
                    props.navigation.navigate(constants.ScreenNames.Market.ORDER,parameters);

                    

                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });

                }
               
                 // turn off loading
                 setState({isLoading:false});
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                // turn off loading
                setState({isLoading:false});
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isLoading:false});
         }
    });

}


// STRIPE FUNCTION
export const payWithStripe = ()=>{

}

// PAYPAL FUNCTION
export const payWithPaypal = (payload,setState) =>{




     
    // POST REQUEST
    POST(`${getBaseUrl().accesspoint}${constants.EndPoints.PAY_WITH_PAYPAL}`,payload).then((response)=>{                    
        
        
       
         // turn off loading
         setState({isLoading:false});
    }).catch((error)=>{
        console.warn(error)
        Toast.show({
            type:'error',
            text1:'Something went wrong!'
        });
        
        // turn off loading
        setState({isLoading:false});
    });

}



export const pay = (payload,setState,props)=>{

  
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            // PAY WITH PAYPAL
            if(payload.paymentMethod == 'paypal'){


                props.navigation.navigate(constants.ScreenNames.Market.PAYMENT,payload)
            }
            // PAY WITH STRIPE
            else if(payload.paymentMethod == 'stripe'){

            }
         
         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isLoading:false});
         }
    });

}


// FINAL SUCESS PAYMENT ACTION
export const successPayment = (payload,setState,props)=>{
    
  
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            let url = payload.url;    
            let spliturl = url.split('?');     
            let splitotherhalf = spliturl[1].split('&');
         
            
            let paymentId = splitotherhalf[0].replace("paymentId=","");
            let payerId = splitotherhalf[2].replace("PayerID=","");

            console.warn('payerId',payerId);
            console.warn('paymentId',paymentId);

            let cleanPayload = {
                cart:payload.cart,
                orderId:payload.orderId,
                userId:payload.userId,
                paymentMethod:payload.paymentMethod,
                paymentId:paymentId,
                payerId:payerId,
            }

            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.FINAL_SUCCESS_PAYMENT}`,cleanPayload).then((response)=>{                    
                                
                if(response.data.status == true){

                    let confirmOrderPayload = {
                        orderId:payload.orderId
                    }
                    // CONFIRM ORDER PAYMENT
                    POST(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.CONFIRM_ORDER}`,confirmOrderPayload).then((result)=>{                                                                  

                        if(result.data.result == true){
                            props.navigation.reset({
                                index: 0,
                                routes: [{ name: constants.ScreenNames.AppStack.HOME }]
                            });        
                        }else{
                            Toast.show({
                                type:'error',
                                text1:'Something went wrong!',
                                text2:result.data.message
                            });
                        }
                    });
                                     
                }else{

                }
                // turn off loading
                setState({isLoading:false});
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                // turn off loading
                setState({isLoading:false});
            });

            
         
         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isLoading:false});
         }
    });

}
