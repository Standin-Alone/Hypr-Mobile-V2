import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage';
import { setUserIdSession } from "../utils/async_storage";
import { calculateFreight,groupBy } from "../utils/functions";

export const getAllProducts = (setState)=>{

  
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            GET(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.GET_ALL_PRODUCTS}`).then((response)=>{                    
                console.warn(response.data.data.list[0]);
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







export const searchProducts = (payload,setState)=>{

  
    
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

        
            // POSTREQUEST
            POST(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.SEARCH_PRODUCTS}`,payload).then((response)=>{                    
               
                if(response.data.result == true){
                                                                   
                    
                    setState({products:response.data.data.list})

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
             // turn off loading
            setState({isLoading:false});
         }
    });

}



export const getWishList = async (setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then(async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){


            let payload = {
                userId: await GET_SESSION('USER_ID')
            }
                
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_WISH_LIST}`,payload).then((response)=>{                    
                
                if(response.data.status == true){
                    
                    setState({wishList:response.data.data.length == 0 ? [] :  response.data.data});                                                          
                                        
                                        
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


export const getShippingAddress = async (setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId = '6266a22a45f2f2777ad5e4dc';

            let payload = {
                userId:userId
            }
                
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_SHIPPING_ADDRESS}`,payload).then((response)=>{                    
               
                if(response.data.status == true){
                                                                   
                    SET_SESSION('USER_ID',userId) 
                    setState({shippingAddress:response.data.data.length == 0 ? [] :  response.data.data});                                                          
                                        
                                        
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





export const getProductVariants = async (payload,setState,props)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            // GET REQUEST
            GET(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.GET_PRODUCT_VARIANTS}?pid=${payload.pid}`).then((response)=>{                    
               
                if(response.data.result == true){
                                                                   
                    let variantList = response.data.data;
                    
                    
                    let parameters = {
                        variantList:variantList,
                        
                    }


                    props.navigation.navigate('VariantList',parameters);

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






export const getState = (payload,setState)=>{
    

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

    
                        
            // GET REQUEST
            GET(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_STATE}/${payload.countryName}`).then((response)=>{                    
            
                if(response.data.status == true){

                    // LOAD STATE
                    setState({states:response.data.data});
                    console.warn(response.data.data);
                    
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



export const getCities = (payload,setState)=>{
    

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

    
                        
            // GET REQUEST
            GET(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_CITIES}/${payload.countryCode}`).then((response)=>{                    
            
                if(response.data.status == true){

                    // LOAD CITIES
                    setState({cities:response.data.data});
                    console.warn(response.data.data);
                    
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

export const saveAddress = (payload,setState,props)=>{
    setState({isLoading:true});
  
    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            // VALIDATE  PAYLOAD
            // validate payload
            Object.keys(payload).map((item,index)=>{                
                if(payload[item] !== undefined || payload[item] != '' ){  
                    
                    if(payload[item] == ''){
                        setState({[item]:{...payload[item],error:true,errorMessage:`Please enter this required field.`}})                                                
                        countError++;
                    }else{                    
                       
                        if(item == 'contact'){        
                            // VALIDATE CONTACT                    
                            if(!constants.RegEx.PHONE_NUMBER_REGX.pattern.test(payload[item])){
                                setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:constants.RegEx.PHONE_NUMBER_REGX.errorMessage}})    
                                countError++;
                            }
                        }
                                          
                    }
                }
            })            

            // check error count
            if(countError == 0){                

                
                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.SAVE_ADDRESS}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){

                        Toast.show({
                            type:'success',
                            text1: response.data.message
                        });
                        
                        props.navigation.goBack();

                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }
                
                    // turn off loading
                    setState({isLoading:false});
                }).catch((error)=>{
                    console.warn('sample error ', error)
                    
                    Toast.show({
                        type:'error',
                        text1:'Something went wrong!'
                    });
                    
                    // turn off loading
                    setState({isLoading:false});
                });
            }else{
                setState({isLoading:false});
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





export const addToWishList =  (payload,setState)=>{
    setState({isLoading:true});
  
    console.warn('payloads',payload)
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){            

                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.ADD_TO_WISHLIST}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){

                        Toast.show({
                            type:'success',
                            text1: response.data.message
                        });
                        

                        getWishList(setState)
                 

                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }
                
                    // turn off loading
                    setState({isLoading:false});
                }).catch((error)=>{
                   
                
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



export const addToCart =  (payload,setState)=>{
    setState({isLoading:true});
  
    console.warn('payloads',payload)
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){            

                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.ADD_TO_CART}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){

                        Toast.show({
                            type:'success',
                            text1: response.data.message
                        });
                        
                 

                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }
                
                    // turn off loading
                    setState({isLoading:false});
                }).catch((error)=>{
                    console.warn('sample error ', error)
                    
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




export const buyNow =  (payload,setState,props)=>{
    setState({isLoading:true});
  
    console.warn('payloads',payload)
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){            

                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.ADD_TO_CART}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){
                                                
                        props.navigation.navigate(constants.ScreenNames.Market.CART);

                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }
                
                    // turn off loading
                    setState({isLoading:false});
                }).catch((error)=>{
                    console.warn('sample error ', error)
                    
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

export const updateSelectedAddress =  (payload,setState,props)=>{
    setState({isLoading:true});
  
    console.warn('payloads',payload)
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){            

                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.UPDATE_SELECTED_ADDRESS}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){
                        
                            
                        calculateFreight(payload,setState,props);                        
                 

                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }
                
                    // turn off loading
                    setState({isLoading:false});
                }).catch((error)=>{
                    console.warn('sample error ', error)
                    
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





export const getCart = async (setState)=>{

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId = '6266a22a45f2f2777ad5e4dc';

            let payload = {
                userId:userId
            }
                
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_CART}`,payload).then((response)=>{                    
               
                if(response.data.status == true){
                    
                    console.warn(response.data.data)
                    
                    let getCountry = [];
                    
                    response.data.data.map((itemCountry)=>{                      
                        if(!getCountry.includes(itemCountry.shipping_address[0].country)){
                            getCountry.push(itemCountry.shipping_address[0].country)
                        }   
                    })

                    let newCart = response.data.data.map((obj)=>({...obj,isSelected:false}));

                    setState({cart:response.data.data.length == 0 ? [] :newCart,cartPerCountry:getCountry});
                                        
                                        
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





export const increaseQuantity = async (payload,setState,props)=>{
    
    
    // Check Internet Connection
    NetInfo.fetch().then( async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let cleanPayload ={
                item:payload.item,
                userId: await GET_SESSION('USER_ID')

            }
        
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.INCREASE_QUANTITY}`,cleanPayload).then((response)=>{                    
               
                if(response.data.status == true){
                                          
                    getCart(setState);
                               
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





export const decreaseQuantity = async (payload,setState,props)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then( async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let cleanPayload ={
                item:payload.item,
                userId: await GET_SESSION('USER_ID')

            }
        
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.DECREASE_QUANTITY}`,cleanPayload).then((response)=>{                    
               
                if(response.data.status == true){
                                          
                    getCart(setState);
                               
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

