import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../config';
import constants from '../../constants';
import Toast from 'react-native-toast-message';
import {POST} from '../axios';
import {SET_SESSION,GET_SESSION} from '../async_storage';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';

export const calculateFreight = (payload,setState,props)=>{
    setState({isLoading:true});
    



  
    let cleanPayload = {
                    eccode: payload.shippingAddress?.country_code ? payload.shippingAddress.country_code : 'PH', // end country code / kung san dadating
                    products: [
                        {
                            quantity: 1,
                            sku: payload.variant.variantSku
                        }
                    ]
                }

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




export const openCamera = (payload,setState)=>{
    
    setState({showProgress:true,loadingTitle:'Opening the camera'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){
  


                    let openUpCamera = await launchCamera({
                        mediaType: 'photo',
                        includeBase64: true, 
                        saveToPhotos:true,
                        quality:0.5                   
                    });
                      

                    // camera function
                    if (!openUpCamera.didCancel) {

                        
                        let {assets} = openUpCamera;

                        assets.map(async(cameraResponse)=>{
                            
                            // set latitude longitude
                            setState({latitude:checkLocation.latitude,longitude:checkLocation.longitude,loadingTitle:'Loading'})
                            
                            // check if image is jpeg format
                            if(cameraResponse.type == 'image/jpeg' || cameraResponse.type == 'image/jpg') {
                                // rotate image
                           

                                setState({showProgress:false,showSelection:false});
                            }else{
                                
                                Toast.show({
                                    type:'error',
                                    text1:'Warning!',
                                    text1:'Your captured image is not in jpeg format'
                                })                        
                                setState({showProgress:false,loadingTitle:'Loading',showSelection:false});
                            }

                        })
                       
                    }else{
                        setState({showProgress:false,loadingTitle:'Loading',showSelection:false});
                    }

             
           
                        
        }else{
            //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
  
            setState({showProgress:false,loadingTitle:'Loading',showSelection:false});
        }
    });
}


export const openGallery = (payload,setState)=>{
    
    setState({showProgress:true,loadingTitle:'Opening the gallery'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){
       
            
  

           
                
                    let openUpCamera = await launchImageLibrary({
                        mediaType: 'photo',
                        includeBase64: true, 
                        quality:0.5                   
                    });
                      

                    // camera function
                    if (!openUpCamera.didCancel) {
                
                        
                        let {assets} = openUpCamera;

                        assets.map(async(cameraResponse)=>{
                                                     
                            // check if image is jpeg format
                            if(cameraResponse.type == 'image/jpeg' || cameraResponse.type == 'image/jpg' || cameraResponse.type == 'image/png') {
                                
                               
                                setState({showProgress:false,showSelection:false});
                            }else{
                                
                                Toast.show({
                                    type:'error',
                                    text1:'Warning!',
                                    text1:'Your captured image is not in jpeg format'
                                })                        
                                setState({showProgress:false,loadingTitle:'Loading',showSelection:false});
                            }

                        })
                       
                    }else{
                        setState({showProgress:false,loadingTitle:'Loading',showSelection:false});
                    }

            
          
                        
        }else{
            //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
  
            setState({showProgress:false,loadingTitle:'Loading',showSelection:false});
        }
    });
}