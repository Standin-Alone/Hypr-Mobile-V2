import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import { Buffer } from 'buffer'
import moment from "moment";
import { GET_SESSION } from "../utils/async_storage";



export const changeProfilePicture = (payload,setState,props)=>{

    setState({isLoading:true})
    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
      
            

         
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CHANGE_PROFILE_PICTURE}`,payload).then((response)=>{                    
            
            
          
                if(response.data.status == true){
                    
                    Toast.show({
                        type:'success',
                        text1: response.data.message
                    });
              
                    setState({isLoading:false})
                    props.navigation.goBack();
                }else{
                    Toast.show({
                        type:'error',
                        text1: response.data.message
                    });
                    setState({isLoading:false});

                }
        
                 
            }).catch((error)=>{
                console.warn(error.response)
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
            setState({isLoading:false});
         }
    });

}





export const saveProfileChanges = (payload,setState,props,phoneInput)=>{
    setState({isSaving:true})
    // Check Internet Connection
    NetInfo.fetch().then(async (state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            let computeAge = 0 ;
            let countError = 0;
            // validate payload
           Object.keys(payload).map((item,index)=>{                
               if(payload[item] !== undefined || payload[item] != '' ){  
                   
                   if(payload[item] == ''){
                       setState({[item]:{...payload[item],error:true,errorMessage:`Please enter this required field.`}})                                                
                       countError++;
                   }else{                    
                       if(item == 'email'){
                           // VALIDATE EMAIL
                           if(!constants.RegEx.EMAIL_REGEX.pattern.test(payload[item])){
                               setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:constants.RegEx.EMAIL_REGEX.errorMessage}})                                                
                               countError++;
                           }
                       }

                       if(item == 'contactNumber'){        
                           // VALIDATE CONTACT                    
                           if(!constants.RegEx.PHONE_NUMBER_REGX.pattern.test(payload[item])){
                               setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:constants.RegEx.PHONE_NUMBER_REGX.errorMessage}})    
                               countError++;
                           }
                       }

                       if(item == 'birthday'){    
                           // COMPUTE AGE
                           let getDateNow = moment(new Date(),"MM-DD-YYYY");
                           let birthday = moment(payload[item],"MM-DD-YYYY");
                           computeAge = getDateNow.diff(birthday, 'years');
                                                           
                           // VALIDATE AGE                   
                           if(computeAge < 18){
                               setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:`Your age must be 18 and above.`}})    
                               countError++;
                           }
                       }                      
                   }
               }
           })

           if(countError == 0){
                payload.userId = await GET_SESSION('USER_ID')
                payload.age = computeAge;
                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CHANGE_PROFILE_INFO}`,payload).then((response)=>{                    
                                    
                    if(response.data.status == true){
                    

                        Toast.show({
                            type:'success',
                            text1: response.data.message
                        });              
                        setState({isSaving:false})                    
                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });
                        setState({isSaving:false});
                    }
                }).catch((error)=>{
                    console.warn(error.response)
                    Toast.show({
                        type:'error',
                        text1:'Something went wrong!'
                    });
                    
                    // turn off loading
                    setState({isSaving:false});
                });
            }

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isSaving:false});
         }
    });

}
