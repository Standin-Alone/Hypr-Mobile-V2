import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage';
import { getProductVariants } from "./market";

export const getToVerifyOrders = (payload,setState)=>{

    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_TO_VERIFY_ORDERS}`,payload).then((response)=>{                    
                
                if(response.data.status == true){
                                                                   
               
                    setState({orders:response.data.data})

                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });

                }
           
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
         
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
      
         }
    });

}




export const checkOrdersStatus= (payload,setState)=>{

    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_TO_VERIFY_ORDERS}`,payload).then(async (response)=>{                    
                
                if(response.data.status == true){
                    
                    
                    let orders = response.data.data;
                    

                    
          
          
            
              
                    Promise.all(orders.map(  (items,index)=>{
                        // GET TRACKING DETAILS IN CJ
                         return  GET(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.CHECK_ORDER_STATUS}?orderId=${items.order_number}`).then( (result)=>{                    

                            if(result.data.result == true){                                
                                // LIST OF ORDERS FROM CJ                               
                                if( result.data.data?.orderStatus == payload.condition){  
                                  
                                 
                                    // result.data.data.shippingAddress = {
                                    //         billing_address: items.billing_address,
                                    //         billing_state: items.billing_state,
                                    //         billing_city: items.billing_city,
                                    //         billing_country: items.billing_country,
                                    //         billing_country_code: items.country_code,
                                    //         billing_contact: items.billing_contact,
                                    //         billing_zip_code: items.billing_zip_code
                                    //     }
                                 
                                    return result.data.data;
                                }                                                                                                                                     
                            }
                                })                    
                        })).then((cleanOrders)=>{
                        

                            if(cleanOrders.length > 0 ){
                                let countNull = 0 ;

                                cleanOrders.map((item)=>{
                                    
                                    if(item === null || item === undefined){
                                        
                                        countNull++
                                    }
                                })


                                if(countNull != cleanOrders.length){
                                    setState({orders:cleanOrders,loadingData:false})         
                                    
                                }else{
                                    setState({loadingData:false})          
                                }
                                 
                            }
                        });
                 
                        
            
            

                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                    setState({loadingData:false})          

                }
           
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                setState({loadingData:false})          
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
            setState({loadingData:false})          
      
         }
    });

}






export const getOrderedProducts= (payload,setState)=>{

    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ORDERED_PRODUCTS}`,payload).then(async (response)=>{                    
                
                if(response.data.status == true){
                    
                    
                    let orderedProducts = response.data.data;
                    
                    
                    console.warn(orderedProducts)
                    
                    
                    setState({orderedProducts:orderedProducts})  

                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });

                }
           
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
         
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
      
         }
    });

}
