import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage';
import { setUserIdSession } from "../utils/async_storage";
import { calculateFreight,groupBy } from "../utils/functions";

export const getAllProducts = (payload,setState)=>{

  
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            GET(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.GET_ALL_PRODUCTS}?pageNum=${payload.currentPage}`).then((response)=>{                    
                
                if(response.data.result == true){
                                                                   

                    if(payload.currentPage > 1){
                        setState({products:[...new Set(payload.previousProductPage),...response.data.data.list],newProducts:response.data.data.list})
                    }else{
                        setState({products:response.data.data.list})
                    }
                    

                    setState({isLoading:false,isLoadingPlaceholder:false});

                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                    setState({isLoading:false,isLoadingPlaceholder:false});

                }
        
                 
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                // turn off loading
                setState({isLoading:false,isLoadingPlaceholder:false});
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isLoading:false,isLoadingPlaceholder:false});
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
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_WISH_LIST}`,payload).then(async (response)=>{                    
                
                if(response.data.status == true){
                    console.warn(response.data.data.length);
                    setState({wishList:response.data.data.length == 0 ? [] :  response.data.data});                                                          
                                        
                                        
                }else{
                    // Toast.show({
                    //     type:'error',
                    //     text1: response.data.message
                    // });

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


export const getCartCount = async (setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then( async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId = await GET_SESSION('USER_ID');

            let payload = {
                userId:userId
            }
                
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_CART_COUNT}`,payload).then((response)=>{                    
               
                if(response.data.status == true){
                                                                   
                    
                    setState({notificationCount:response.data.data});                                                          
                                        
                                        
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


export const getReviewCount = async (payload,setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then( async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){



            let cleanPayload = {
                pid:payload.variantPid
            }
                
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_REVIEW_COUNT}`,cleanPayload).then((response)=>{                    
               
                if(response.data.status == true){
                                                                   
                    
                    setState({reviewCount:response.data.data});                                                          
                                        
                                        
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




export const getProductReviews = async (payload,setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then( async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

        
            let cleanPayload = {
                pid:payload.variantPid
            }
             
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_PRODUCT_REVIEWS}`,cleanPayload).then((response)=>{                    
               
                if(response.data.status == true){
                                                                   
                    console.warn('REVIEWS',response.data.data[0].user_info)
                    setState({productReviews:response.data.data,loadingData:false});                                                          
                                        
                                        
                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                 // turn off loading
                 setState({isLoading:false,loadingData:false});
                }
               
            }).catch((error)=>{
                console.warn(error)                
                
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                // turn off loading
                setState({isLoading:false,loadingData:false});
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
           
            // turn off loading
            setState({isLoading:false,loadingData:false});
         }
    });

}



export const getShippingAddress = async (setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then(async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId = await GET_SESSION('USER_ID');

            let payload = {
                userId:userId
            }
                
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_SHIPPING_ADDRESS}`,payload).then((response)=>{                    
               
                if(response.data.status == true){
                                                                   
                    SET_SESSION('USER_ID',userId) 
                    setState({shippingAddress:response.data.data.length == 0 ? [] :  response.data.data,loadingData:false,isLoading:false,});                                                          
                                                                                
                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                    setState({isLoading:false,loadingData:false});
                }
               
            
            }).catch((error)=>{
                console.warn(error)                
                
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                // turn off loading
                setState({isLoading:false,loadingData:false});
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
             setState({isLoading:false,loadingData:false});
         }
    });

}





export const getProductVariants = async (payload,setState,props)=>{
    setState({isProgress:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            // GET REQUEST
            GET(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.GET_PRODUCT_VARIANTS}?pid=${payload.pid}`).then((response)=>{                    
               
                if(response.data.result == true){
                    
                    
                    
                    let variantList = response.data.data;
                    
                    // check if variant has a name 
                    variantList.map((items)=>{

                        if(items.variantNameEn == null || items.variantNameEn == '' ){
                            items.variantNameEn = payload.productName
                        }
                    })


                    
                    let parameters = {
                        variantList:variantList,
                        
                    }

                    // turn off loading
                    setState({isProgress:false});
                    props.navigation.navigate(constants.ScreenNames.Market.VARIANT_LIST,parameters);

                }else{
                    // turn off loading
                    setState({isProgress:false});
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
                
                // turn off loading
                setState({isProgress:false});
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isProgress:false});
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

                        console.warn(item);
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
                                text1:'Success',                    
                                text2: response.data.message
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




export const deleteAddress = (payload,setState,props)=>{
    setState({deleteLoading:true});
  

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            // VALIDATE  PAYLOAD
    

                

                
                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.DELETE_ADDRESS}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){

                        Toast.show({
                                type:'success',
                                text1:'Success',                    
                                text2: response.data.message
                        });
                        
                        props.navigation.goBack();

                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }
                
                    // turn off loading
                    setState({deleteLoading:false});
                }).catch((error)=>{
                    console.warn('sample error ', error)
                    
                    Toast.show({
                        type:'error',
                        text1:'Something went wrong!'
                    });
                    
                    // turn off loading
                    setState({deleteLoading:false});
                });
           

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({deleteLoading:false});
         }
    });

}



export const updateAddress = (payload,setState,props)=>{
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

                        console.warn(item);
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
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.UPDATE_ADDRESS}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){

                        Toast.show({
                                type:'success',
                                text1:'Success',                    
                                text2: response.data.message
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




export const removeProductFromWishList = (payload,setState,props)=>{
    setState({isLoading:true});
  

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            // VALIDATE  PAYLOAD
    

                

                
                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.REMOVE_PRODUCT_FROM_WISHLIST}`,payload).then((response)=>{                    
                    
                    if(response.data.status == true){

                        Toast.show({
                                type:'success',
                                text1:'Success',                    
                                text2: response.data.message
                        });
                        getWishList(setState);

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
                                text1:'Success',                    
                                text2: response.data.message
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
                        getCartCount(setState)

                        Toast.show({
                                type:'success',
                                text1:'Success',                    
                                text2: response.data.message
                        });
                        
                        // turn off loading
                        setState({isLoading:false});

                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });
                        // turn off loading
                        setState({isLoading:false});
                    }
                
                   
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
       
                if(payload.shippingAddress){
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
                   
                    
                    Toast.show({
                        type:'error',
                        text1:'Something went wrong!'
                    });
                    
                    // turn off loading
                    setState({isLoading:false});
                });
            }else{
                Toast.show({
                    type:'error',
                    text1: 'Message',
                    text2:'Please Select address first'
                });

                // turn off loading
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





export const getCart = async (setState)=>{

    // Check Internet Connection
    NetInfo.fetch().then(async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId =  await GET_SESSION('USER_ID');

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

                    setState({cart:response.data.data.length == 0 ? [] :newCart,cartPerCountry:getCountry,isLoadingData:false});
                                        
                                        
                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                    setState({isLoadingData:false});
                }
               
              
            }).catch((error)=>{
                console.warn(error)                
                
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                setState({isLoadingData:false});
               
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
            setState({isLoadingData:false});
            
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





export const removeInCart = async (payload,setState,props)=>{
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
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.REMOVE_ITEM_IN_CART}`,cleanPayload).then((response)=>{                    
               
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

