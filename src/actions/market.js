import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';


export const getAllProducts = (setState)=>{
    setState({isLoading:true});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            // GET REQUEST
            GET(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.GET_ALL_PRODUCTS}`,{}).then((response)=>{                    
               
                if(response.data.result == true){
                                                                   
                    console.warn(response.data.data.list[0]);
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


