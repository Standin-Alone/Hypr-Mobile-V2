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
             // cleanPayload.sccode  = address.country_code;
             // cleanPayload.country = address.country;
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
                                                                   
                    
                    setState({products:response.data.data.list})

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