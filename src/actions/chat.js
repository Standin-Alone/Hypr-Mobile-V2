import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'
import { GiftedChat } from 'react-native-gifted-chat';
export const sendMessage = (payload,setState,state)=>{

    payload.socket.emit('message',{userId:payload.userId,friendUserId:payload.friendUserId,message:payload.message});
    setState({messages:GiftedChat.append(state.messages, payload.message)});

    // // Check Internet Connection
    // NetInfo.fetch().then((state)=>{
    //      // if internet connected
    //      if(state.isConnected && state.isInternetReachable){


    //         // GET REQUEST
    //         POST(`${getBaseUrl().accesspoint}${constants.EndPoints.SEND_MESSAGE}`,payload).then((response)=>{                    
                                       
    //             if(response.data.status == true){
                    
              

    //                 setState({isLoading:false,isLoadingPlaceholder:false});

    //             }else{
    
    //                 setState({isLoading:false,isLoadingPlaceholder:false});

    //             }
        
                 
    //         }).catch((error)=>{
    //             console.warn(error)
    //             Toast.show({
    //                 type:'error',
    //                 text1:'Something went wrong!'
    //             });
                
    //             // turn off loading
    //             setState({isLoading:false,isLoadingPlaceholder:false});
    //         });

    //      }else{
    //          //  No internet Connection
    //         Toast.show({
    //             type:'error',
    //             text1:'No internet Connection!'
    //         })
    //          // turn off loading
    //         setState({isLoading:false,isLoadingPlaceholder:false});
    //      }
    // });

}



