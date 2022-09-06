import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';

export const getRewardsHistory = (payload,setState,state)=>{

  
  
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){


            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_REWARDS_HISTORY}`,payload).then((response)=>{                    
                
                if(response.data.status == true){
                    
                    setState({rewardsHistory:response.data.data,isLoading:false});
                }else{
                
                    setState({isLoading:false});

                }
        
                 
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
            setState({isLoading:false,isLoadingPlaceholder:false});
         }
    });

}