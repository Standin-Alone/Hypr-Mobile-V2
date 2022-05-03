import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../config';
import constants from '../../constants';
import Toast from 'react-native-toast-message';
import {POST} from '../axios';
import {SET_SESSION,GET_SESSION} from '../async_storage';


export const calculateFreight = (payload,setState,props)=>{
    setState({isLoading:true});
    



  
    let cleanPayload = {
                    eccode: payload.shippingAddress.country_code, // end country code / kung san dadating
                    products: [
                        {
                            quantity: 1,
                            sku: payload.variant.variantSku
                        }
                    ]
                }
    
    console.warn(payload);
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
                
            // POST REQUEST
            POST(`${getBaseUrl().CJ_ACCESS_POINT}${constants.EndPoints.CALCULATE_FREIGHT}`,cleanPayload).then((response)=>{                    
              
                if(response.data.result == true){
                    

                    if(payload.screenName == 'address'){
                        props.route.params.reCalculateFreight(response.data.data)
                     
                        props.navigation.goBack();
                    }else{
                        let parameters ={
                            variant:payload.variant,
                            freightCalculation:response.data.data
                        }
                        console.warn('params',parameters);
                        props.navigation.navigate(constants.ScreenNames.Market.PRODUCT_DETAIL,parameters)       
                    }
                  
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


export const computeCart = (cart)=>{
    
    return cart.reduce((itemA,itemB)=> itemA = itemA + parseFloat(itemB.total_amount),0).toFixed(2);
}

