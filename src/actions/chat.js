import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'
import { GiftedChat } from 'react-native-gifted-chat';
import { generateUuid } from "../utils/functions";
export const sendMessage = (payload,setState,state)=>{

  
      
    let newPayload={
        userId:payload.userId,
        friendUserId:payload.friendUserId,
        message:payload.message,
        room: payload.room
    }

   
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){


            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.SEND_MESSAGE}`,newPayload).then((response)=>{                    
                                       
                if(response.data.status == true){
                    
                    payload.socket.emit('message',{userId:payload.userId,friendUserId:payload.friendUserId,message:payload.message,room:payload.room});

                  
                    setState((prevState)=>({messages:GiftedChat.append(prevState.messages, newPayload.message)}));

                    setState({isLoading:false});

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


export const checkRoom = (payload,setState,state,socket)=>{

  
    payload.room = payload.room ? payload.room : generateUuid();  


    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
       
            console.warn(`PAYLOAD`,payload);
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CHECK_ROOM}`,payload).then((response)=>{                    
               
                if(response.data.status == true){
                    
                    socket.emit('join-room',response.data.data.room_name);
                    
                   setState({room:response.data.data.room_name});
                   response.data.data.messages.map((item)=>{
                        setState((prevState)=>({messages:GiftedChat.append(prevState.messages, item.giftedChatInfo)}));
                   })
               
                   
                }else{
                  
                    socket.emit('join-room',response.data.data.room_name);
                    
                    setState({room:response.data.data.room_name});
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





export const getFriendsMessages = (payload,setState,state,socket)=>{

  
  
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){


            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_FRIENDS_MESSAGES}`,payload).then((response)=>{                    
                
                if(response.data.status == true){
                    
                    setState({friendsMessages:response.data.data});
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




export const searchFriend = (payload,setState,state)=>{

  
    setState({isSearching:true,searchValue:payload.searchValue});
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){


            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.SEARCH_FRIEND}`,payload).then((response)=>{                    
                
                if(response.data.status == true){
                    
                    setState({searchedFriends:response.data.data});
                    setState({isSearching:false});
                }else{
                
                    setState({isSearching:false});

                }
        
                 
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                // turn off loading
                setState({isSearching:false});
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isSearching:false});
         }
    });

}