import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage';


export const getAllFriendsPost = (payload,setState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            GET(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ALL_FRIENDS_POST}`).then((response)=>{                    
              
                if(response.data.status == true){
                                                                   

                    if(payload.currentPage > 1){
                        setState({posts:[...new Set(payload.previousProductPage),...response.data.data.list],newProducts:response.data.data.list})
                    }else{
                        setState({posts:response.data.data.list})
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



