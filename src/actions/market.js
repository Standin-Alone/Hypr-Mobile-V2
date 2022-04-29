import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage'

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



export const getShippingAddress = async (setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId = '62674caa088e058650c5aa17';

            let payload = {
                userId:userId
            }
                
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_SHIPPING_ADDRESS}`,payload).then((response)=>{                    
               
                if(response.data.status == true){
                                                                   
                    
                    let dataToJson = JSON.stringify(response.data.data);

                    SET_SESSION('shipping_address',dataToJson);
                    SET_SESSION('user_id','62674caa088e058650c5aa17')
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





export const getProductVariants = (payload,setState,props)=>{
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
                        variantList:variantList
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
    setState({isLoading:false});
  
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