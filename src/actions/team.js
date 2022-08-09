import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'

export const getAllMembers = (payload,setState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){


            // GET REQUEST
            POST(`${getBaseUrl().MLM_ACCESS_POINT}${constants.EndPoints.GET_MEMBERS}`,payload).then((response)=>{                    
                                       
                if(response.data.status == true){
                    
              
                    if(payload.currentPage > 1){

                       
                        setState({members:[...new Set(payload.previousMembers),...response.data.data],newPosts:response.data.data})
                    }else{
                      
                        setState({members:response.data.data})
                    }
                    

                    setState({isLoading:false,isLoadingPlaceholder:false});

                }else{
    
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



