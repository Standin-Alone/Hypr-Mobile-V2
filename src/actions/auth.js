
import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';



export const createAccount = (payload,setState)=>{
    setState({isLoading:true});
    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            // validate payload
            Object.keys(payload).map((item,index)=>{                
                if(payload[item] !== undefined){                    
                    if(payload[item] == ''){
                        setState({[item]:{...payload[item],error:true,errorMessage:`Please enter this required field.`}})                                                
                        countError++;
                    }else{                    
                        if(item == 'email'){
                            // VALIDATE EMAIL
                            if(!constants.RegEx.EMAIL_REGEX.pattern.test(payload[item])){
                                setState({[item]:{...payload[item],error:true,errorMessage:constants.RegEx.EMAIL_REGEX.errorMessage}})                                                
                                countError++;
                            }
                        }

                        if(item == 'password'){        
                            // VALIDATE PASSWORD                    
                            if(!constants.RegEx.PASSWORD_REGEX.pattern.test(payload[item])){
                                setState({[item]:{...payload[item],error:true,errorMessage:constants.RegEx.PASSWORD_REGEX.errorMessage}})    
                                countError++;
                            }
                        }

                        if(item == 'contact'){        
                            // VALIDATE CONTACT                    
                            if(!constants.RegEx.PHONE_NUMBER_REGX.pattern.test(payload[item])){
                                setState({[item]:{...payload[item],error:true,errorMessage:constants.RegEx.PHONE_NUMBER_REGX.errorMessage}})    
                                countError++;
                            }
                        }
                    }
                }
            })
            
            
            // check error count
            if(countError == 0){
                let clean_payload = {
                    first_name:payload.firstName,
                    last_name:payload.lastName,
                    email:payload.email,
                    phone:payload.contact,
                    username:payload.email,
                    password:payload.password,                    
                }

                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CREATE_ACCOUNT}`,clean_payload).then((response)=>{                    
                    
                    if(response.data.status == true){
                        Toast.show({
                            type:'success',
                            text1: 'Success!',
                            text2: response.data.message
                        });
                        setState({isLoading:false});
                    }else{
                        Toast.show({
                            type:'error',
                            text1: 'Error!',
                            text2:response.data.message,
                        });
                        setState({isLoading:false});
                    }

                }).catch((error)=>{
                    
                    console.warn(error.response);
                    Toast.show({
                        type:'error',
                        text1:'Error!',
                        text2:'Something went wrong!',
                    });
                    
                    // turn off loading
                    setState({isLoading:false});
                });

            }else{
                setState({isLoading:false});
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



export const login = (payload,setState) => {     
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


export const verifyOtp = (payload,setState)=>{
    setState({isLoading:true});

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            if(payload.otp.value.length == 4){

                setState({otp:{...payload.otp,error:false},isLoading:false})
                
            }else{          
                setState({otp:{...payload.otp,error:true},isLoading:false})
                Toast.show({
                    type:'error',
                    text1:'Please put your one time pin.',                
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



export const resendOtp = (payload,setState)=>{
    setState({isLoadingResendButton:true});

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){
            

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
             // turn off loading
            setState({isLoadingResendButton:false});
         }
    });

}