import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../config';
import constants from '../../constants';
import Toast from 'react-native-toast-message';
import {POST} from '../axios';
import {SET_SESSION,GET_SESSION} from '../async_storage';
import {launchCamera,launchImageLibrary,openCropper} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from 'react-native-uuid';
import RNFetchBlob from 'rn-fetch-blob';
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




export const openCamera = (payload,setState,props)=>{
    
    setState({showProgress:true,loadingTitle:'Opening the camera'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){
  


                    let openUpCamera = await ImagePicker.openCamera({
                        mediaType: 'photo',
                        includeBase64: true, 
                        compressImageQuality:1,                
                        includeExif:true,
                        cropping:true
                
                    });
     

                    if(payload.changeImageType == 'profile'){

                        ImagePicker.openCropper({
                            path: openUpCamera.path, 
                            includeBase64:true,
                            freeStyleCropEnabled:true,                  
                            cropperCircleOverlay:true,
                            cropping:true
                                        
                        }).then((croppedImage)=>{     
                        
                            croppedImage.filename = openUpCamera.path.substring(openUpCamera.path.lastIndexOf('/') + 1, openUpCamera.path.length)
                            props.navigation.navigate(payload.redirectTo,{image:croppedImage.data,imageInfo:croppedImage,changeImageType:payload.changeImageType})
                        
                            setState({showProgress:false,showSelection:false});
                        })
                  
                    }else{
                        openUpCamera.filename = openUpCamera.path.substring(openUpCamera.path.lastIndexOf('/') + 1, openUpCamera.path.length)
                        props.navigation.navigate(payload.redirectTo,{image:openUpCamera.data,imageInfo:openUpCamera,changeImageType:payload.changeImageType})
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


export const openGallery = (payload,setState,props)=>{
    
    setState({showProgress:true,loadingTitle:'Opening the gallery'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){
       
            
  

           
                
                    let openUpCamera = await ImagePicker.openPicker({
                        mediaType: 'photo',
                        quality:0.5,
                        includeBase64:true           
                    });
                      


                    if(payload.changeImageType == 'profile'){
    
                        ImagePicker.openCropper({
                            path: openUpCamera.path, 
                            includeBase64:true,       
                            freeStyleCropEnabled:true, 
                            cropperCircleOverlay:true,
                            cropping:true
                                        
                        }).then((croppedImage)=>{
                            croppedImage.filename = openUpCamera.path.substring(openUpCamera.path.lastIndexOf('/') + 1, openUpCamera.path.length)
                            props.navigation.navigate(payload.redirectTo,{image:croppedImage.data,imageInfo:croppedImage,changeImageType:payload.changeImageType})
                        
                            setState({showProgress:false,showSelection:false});
                        })                    
                    }else{
                        openUpCamera.filename = openUpCamera.path.substring(openUpCamera.path.lastIndexOf('/') + 1, openUpCamera.path.length)
                        props.navigation.navigate(payload.redirectTo,{image:openUpCamera.data,imageInfo:openUpCamera,changeImageType:payload.changeImageType})
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



// GEO TAGGING
export const geotagging = (response,param_loc)=>{

    let zeroth = {};
    let gps = {};
    let exif = {};
    zeroth[ImageIFD.Make] = "Make";
    exif[ExifIFD.LensMake] = "LensMake";     
    gps[GPSIFD.GPSLatitude] = GPSHelper.degToDmsRational(param_loc.latitude);
    gps[GPSIFD.GPSLongitude] = GPSHelper.degToDmsRational(param_loc.longitude);
    gps[GPSIFD.GPSAltitude] = param_loc.altitude;
    gps[GPSIFD.GPSLatitudeRef] = param_loc.latitude < 0 ? 'S' : 'N';
    gps[GPSIFD.GPSLongitudeRef] = param_loc.longitude < 0 ? 'W' : 'E';

    let exifObj = { "0th":zeroth,"Exif":exif, "GPS":gps};
    let exifBtyes = dump(exifObj);
    let newBase64 = insert(exifBtyes,'data:image/jpeg;base64,'+response);    

    return newBase64.replace('data:image/jpeg;base64,','');
            
}

export const showPassword = (state,setState,stateElement)=>{
  
    setState({[stateElement]:state[stateElement] ? false :true})

}


export const generateUuid = ()=>{
    return uuid.v4(); 
}


export const getFileData = async (file)=>{

    const fileResult = await RNFetchBlob.fs.stat(file);
        

    return fileResult;
}



export const openInspirePhotoAndVideosGallery = (payload,setState,props)=>{
    setState({isProgress:true,loadingTitle:'Opening the gallery'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){                                                
            let openUpCamera = await ImagePicker.openPicker({
                mediaType: 'any',
                quality:0.5,
                includeBase64:true,
                multiple:true         
            }).catch(()=>{
                setState({isProgress:false});   
            });   

         
            if(openUpCamera.length > 0){
                let filterVideos = openUpCamera.filter((item)=>item.mime == 'video/mp4');
                let videoIndex = [];
                filterVideos.map((item,index)=>{
                    videoIndex.push(index);
                });
            
                setState((prevState)=>({isProgress:false,files:[...prevState.files,...openUpCamera],videosIndex:videoIndex}));   
            }else{
                setState({isProgress:false});   
            }  
        }else{
            //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
  
            setState({isProgress:false,loadingTitle:'Loading'});
        }
    });
}




export const openInspireCamera = (payload,setState,props)=>{
    setState({isProgress:true,loadingTitle:'Opening the camera'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){                                                
            let openUpCamera = await ImagePicker.openCamera({
                mediaType: 'any',
                quality:0.5,
                includeBase64:true,
      
            }).catch(()=>{
                setState({isProgress:false});   
            });   ;   
            console.warn(openUpCamera);
            if(openUpCamera){
    
                setState((prevState)=>({isProgress:false,files:[...prevState.files,...openUpCamera]}));   
            }else{
                setState({isProgress:false});   
            }  
        }else{
            //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
  
            setState({isProgress:false,loadingTitle:'Loading'});
        }
    });
}



export const openReviewCamera = (payload,setState,props)=>{
    setState({isProgress:true,loadingTitle:'Opening the camera'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){                                                
            let openUpCamera = await ImagePicker.openCamera({
                mediaType: 'photo',
                quality:0.5,
                includeBase64:true,
      
            }).catch(()=>{
                setState({isProgress:false});   
            });   ;   
        
            if(openUpCamera){
                
                setState((prevState)=>({isProgress:false,uploadedImages:[...prevState.uploadedImages,openUpCamera]}));
                setState({isProgress:false});     
            }else{
                setState({isProgress:false});   
            }  
        }else{
            //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
  
            setState({isProgress:false,loadingTitle:'Loading'});
        }
    });
}

export const openReviewVideo = (payload,setState,props)=>{
    setState({isProgress:true,loadingTitle:'Opening the camera'});
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){                                                
            let openUpCamera = await ImagePicker.openCamera({
                mediaType: 'video',
                quality:0.5,
                includeBase64:true,
      
            }).catch(()=>{
                setState({isProgress:false});   
            });   ;   
        
            if(openUpCamera){
               
                setState((prevState)=>({isProgress:false,uploadedVideos:[...prevState.uploadedVideos,openUpCamera]}));   
                setState({isProgress:false});   
            }else{
                setState({isProgress:false});   
            }  
        }else{
            //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
  
            setState({isProgress:false,loadingTitle:'Loading'});
        }
    });
}