
import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
export const login = (payload,setState) => {
 
    // console.warn('login',payload)
    // console.warn('url',`${getBaseUrl().accesspoint}${constants.EndPoints.LOGIN}`);
        
    //turn on loading
    setState({isLoading:true});
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){
            

            setState({username:{...payload.username,error:false}})
            setState({password:{...payload.password,error:false}})
            
            if(payload.username.data == '' || payload.password.data == ''){

                setState({username:{...payload.username,error:true},password:{...payload.password,error:true}})


                // turn off loading
                setState({isLoading:false});                
            }else{
                
                
      

                let clean_payload = {
                    username : payload.username.data,
                    password : payload.password.data
                }
                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.LOGIN}`,clean_payload).then((response)=>{                    
                    console.warn(response.data)
                    if(response.data.status == true){
                        Toast.show({
                            type:'success',
                            text1: response.data.message
                        });
                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }

                     // turn off loading
                     setState({isLoading:false});
                }).catch((error)=>{
                    
                    console.warn(error.response);
                    Toast.show({
                        type:'error',
                        text1:'Something went wrong!'
                    });
                    
                    // turn off loading
                    setState({isLoading:false});
                });

            }
                        
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