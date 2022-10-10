import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'
export const reviewProduct = (payload,setState,props)=>{

    setState({isProgress:true,loadingTitle:'Processing...'});
    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            

            let fd = new FormData();
            fd.append('rating',payload.rating);
            fd.append('productReview',payload.productReview);

            if(payload.uploadedImages.length > 0 ){
                payload.uploadedImages.map(item=>{          
                    let filename = item.path.replace(/^.*[\\\/]/, '')                  
                    fd.append('images[]',{name:filename,type:item.mime,uri:item.path})                
                })
            }

            if(payload.uploadedVideos.length > 0 ){
                payload.uploadedVideos.map(item=>{          
                    let filename = item.path.replace(/^.*[\\\/]/, '')                  
                    fd.append('videos[]',{name:filename,type:item.mime,uri:item.path})                
                })
            }
            
            let headers =   {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
            };
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.REVIEW_PRODUCT}`,fd,headers).then((response)=>{                    
                      
                if(response.data.status == true){
                 
                    Toast.show({
                        type:'success',
                        text1: response.data.message
                    });
                    
                    setState({isProgress:false});
                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                    setState({isProgress:false});

                } 
            }).catch((error)=>{
                console.warn(error.response)
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