import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'

export const getAllFriendSuggestion = (payload,setState)=>{

    setState({isLoading:true,isLoadingPlaceholder:false});
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ALL_FRIENDS_SUGGESTION}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                 
                    if(payload.currentPage > 1){
                        setState({friendSuggestion:[...new Set(payload.previousPost),...response.data.data],newFriendSuggestion:response.data.data})
                    }else{
                        setState({friendSuggestion:response.data.data})
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



export const getAllFriendRequests = (payload,setState)=>{
    setState({isLoading:true,isLoadingPlaceholder:false});
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ALL_FRIENDS_REQUESTS}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    
                    console.warn(response.data.data);
                    if(payload.currentPage > 1){
                        setState({friendRequests:[...new Set(payload.previousPost),...response.data.data],newFriendRequests:response.data.data})
                    }else{
                        setState({friendRequests:response.data.data})
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




export const getAllMyFriends = (payload,setState)=>{
    setState({isLoading:true,isLoadingPlaceholder:false});
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ALL_MY_FRIENDS}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    
                  
                    if(payload.currentPage > 1){
                        setState({myFriends:[...new Set(payload.previousPost),...response.data.data]})
                    }else{
                        setState({myFriends:response.data.data})
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

export const sendFriendRequest = (payload,setState,props,myState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.SEND_FRIEND_REQUEST}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    
                    Toast.show({
                        type:'success',
                        text1: 'Message',
                        text2:response.data.message
                    });
                    
                    


                    let friendSuggestion  = [...myState.friendSuggestion];

                    friendSuggestion.map((item)=>{
                        if(item._id == payload.receiver_user_id){
                            item.isSent = true
                        }
                    })


                    setState({isLoading:false,isLoadingPlaceholder:false,extraFriendSuggestion:friendSuggestion});

                }else{
                    Toast.show({
                        type:'error',
                        text2: 'Message',
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




export const acceptFriendRequest = (payload,setState,props,myState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.ACCEPT_FRIEND_REQUEST}`,payload).then( async (response)=>{                    
                         
                if(response.data.status == true){
                    
                    Toast.show({
                        type:'success',
                        text1: 'Message',
                        text2:response.data.message
                    });
                    
                    
          
              
                 
                
                    let friendRequests  = [...myState.friendRequests];

                    friendRequests.map((item)=>{
                        if(item._id == payload.sender_user_id){
                            item.isAdded = true
                        }
                    })

      

                    setState({isLoading:false,isLoadingPlaceholder:false,extrafriendRequests:friendRequests});
                    

                }else{
                    Toast.show({
                        type:'error',
                        text2: 'Message',
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








export const declineFriendRequest = (payload,setState,props,myState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.DECLINE_FRIEND_REQUEST}`,payload).then( async (response)=>{                    
                         
                if(response.data.status == true){
                    
                    Toast.show({
                        type:'success',
                        text1: 'Message',
                        text2:response.data.message
                    });
                    
                    
                    let parameter = {
                        suggestion:{
                            userId:payload.receiver_user_id   
                        },
                        requests:{
                            userId:payload.sender_user_id   
                        },
                    }


                    let friendRequests  = [...myState.friendRequests];

                    friendRequests.map((item)=>{
                        console.warn(item._id,payload.sender_user_id)
                        if(item._id == payload.sender_user_id){
                            item.isDeclined = true
                        }
                    })

                    
                    getAllFriendSuggestion(parameter.suggestion,setState)
                    getAllFriendRequests(parameter.requests,setState)
                    
                    setState({isLoading:false,isLoadingPlaceholder:false,extrafriendRequests:friendRequests});

                }else{
                    Toast.show({
                        type:'error',
                        text2: 'Message',
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