import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import {SET_SESSION,GET_SESSION} from '../utils/async_storage';

export const getPartners = (setState)=>{

    setState({isLoading:true});
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            
            // GET REQUEST
            GET(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_PARTNERS}`).then((response)=>{                    
                
                if(response.data.status == true){

                    setState({partners:response.data.data})
                    setState({isLoading:false});
                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                    setState({isLoading:false});
                }
           
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                setState({isLoading:false});
                
         
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
            setState({isLoading:false});
      
         }
    });

}




