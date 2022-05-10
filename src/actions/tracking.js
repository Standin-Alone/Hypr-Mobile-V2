import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage';

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
                    

                    let cleanOrders = [];
                    let orderPromise = orders.map(async (items)=>{
                        // GET TRACKING DETAILS IN CJ
                        await GET(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.CHECK_ORDER_STATUS}?orderId=${items.order_number}`).then(async (result)=>{                    

                            if(result.data.result == true){
                                
                                
                                
                                // LIST OF ORDERS FROM CJ                               
                                if( result.data.data?.orderStatus == 'UNPAID'){                                                                                             
                                    await cleanOrders.push(items)   
                                }      
                                            
                                
                             
                            }
                        });



                        
                    })  

                    let getCleanOrders = await Promise.all(orderPromise);
                    
                    if(getCleanOrders){
                         setState({orders:cleanOrders})
                   
                    }
                    
            

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



