import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'
import { GET_SESSION } from "../utils/async_storage";

export const getNotifications = (payload,setState)=>{
    
    setState({isLoading:true,isLoadingPlaceholder:false});
    
    // Check Internet Connection
    NetInfo.fetch().then(async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId = await GET_SESSION('USER_ID');
             

            payload.userId = userId;
                
      
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_NOTIFICATIONS}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                 
                    if(payload.currentPage > 1){
                        setState({notifs:[...new Set(payload.previousNotifs),...response.data.data]})
                    }else{
                        setState({notifs:response.data.data})
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