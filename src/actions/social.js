import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'


export const getAllMyPosts = (payload,setState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ALL_MY_POST}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    
              
                    if(payload.currentPage > 1){
                        setState({myPosts:[...new Set(payload.previousPost),...response.data.data],myNewPosts:response.data.data})
                    }else{
                        setState({myPosts:response.data.data})
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



export const getAllFriendsPost = (payload,setState)=>{

    console.warn(payload.currentPage);
    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ALL_FRIENDS_POST}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    
                    console.warn(`lengtb`,response.data.data.length);
                    if(payload.currentPage > 0){
                        setState({posts:[...new Set(payload.previousPost),...response.data.data],showFooter:false,isLoading:false,})
                    }else{
                        setState({posts:response.data.data,showFooter:false,isLoading:false,})
                    }
                    

                    

                }else{
    
                    setState({isLoading:false,isLoadingPlaceholder:false,showFooter:false});

                }
        
                 
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1:'Something went wrong!'
                });
                
                // turn off loading
                setState({isLoading:false,isLoadingPlaceholder:false,showFooter:false});
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isLoading:false,isLoadingPlaceholder:false,showFooter:false});
         }
    });

}



export const getAllFriendsStories = async (payload,setState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_ALL_FRIENDS_STORIES}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    
        
                  
                    setState({stories:response.data.data})
                

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







export const hypePost = (payload,setState,props,myState)=>{


    
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            
            // GET REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.HYPE_POST}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    

                    setState({isLoading:false,isLoadingPlaceholder:false});


                    if(payload.viewType == 'Comments'){
                        let newComments = myState.parameter
                        console.warn(`comments`,response.data.hypes)
                        newComments.hypes = response.data.hypes;
                        
                   
                        setState({parameter:newComments});
                    }else if(payload.viewType == 'ViewPost'){
                        let newHypes = myState.parameters
                 
                        newHypes.hypes = response.data.hypes;
                   
                   
                        setState({parameters:newHypes,isHype:newHypes.hypes.some( (item)=>item.user_id ==  payload.userId)});
                    }else{
                        let newPosts = myState.posts.map((item)=>{
                            if(item._id == payload.post._id){
                                item.hypes = response.data.hypes
                            }  
                            return item;
                        })
    
                        setState({newPosts:newPosts});
    
                    }
           

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





export const createPost = (payload,setState,props)=>{


    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
             // validate payload
             Object.keys(payload).map((item,index)=>{                
                if(payload[item] !== undefined || payload[item] != '' ){  
                    
                    if(payload[item] == ''){
                        setState({[item]:{...payload[item],error:true,errorMessage:`Please enter this required field.`}})                                                
                        countError++;
                    }
                }
            })
            

     
            
          
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CREATE_POST}`,payload).then((response)=>{                    
                         
                if(response.data.status == true){
                    
                    Toast.show({
                        type:'success',
                        text1:'Successfully posted.'
                    });
                    
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: constants.ScreenNames.AppStack.HOME }]
                    });  
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







export const comment = (payload,setState,props,state)=>{


    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
      
            

         
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.COMMENT}`,payload).then((response)=>{                    
            
            
          
                if(response.data.status == true){
                 
                    setState({comments:[...new Set(state.comments),...response.data.newComment]})
                   
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






export const getProfileInfo = (payload,setState)=>{
    setState({isLoading:true});
  

    
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){


            // console.warn(payload);
            // POST REQUEST
            GET(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_PROFILE_INFO}/${payload.userId}`,payload).then((response)=>{                    
             
                if(response.data.status == true){          
                  
                    setState({profileInfo:response.data.data,isLoading:false})

                }else{
                    Toast.show({
                        type:'error',
                        text1: 'Error',
                        text2:response.data.errorMessage
                    });
                    // turn off loading
                 setState({isLoading:false});
                }
               
          
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1: 'Error',
                    text2:error
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





export const createStory = (payload,setState,props,state)=>{


    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
      
            

         
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CREATE_STORY}`,payload).then((response)=>{                    
            
            
          
                if(response.data.status == true){
                 
                    Toast.show({
                        type:'success',
                        text1: response.data.message
                    });

                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: constants.ScreenNames.AppStack.HOME }]
                    });  
                    
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