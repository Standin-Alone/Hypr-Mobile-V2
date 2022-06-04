
import NetInfo from "@react-native-community/netinfo";
import getBaseUrl from '../utils/config';
import constants from '../constants';
import Toast from 'react-native-toast-message';
import {POST,GET} from '../utils/axios';
import moment from 'moment';
import { GET_SESSION, SET_SESSION } from "../utils/async_storage";
import {
    GoogleSignin,    
  } from '@react-native-google-signin/google-signin';

  GoogleSignin.configure({
    offlineAccess: true,
    scopes: ['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/user.birthday.read','https://www.googleapis.com/auth/user.phonenumbers.read'],
    forceConsentPrompt: true,
    webClientId:'1071366226336-epmk8r1vcqk4vjfg2oo521t1rbostmkr.apps.googleusercontent.com'
  });


  
export const createAccountUsingGoogle = (payload,setState,props)=>{
    setState({isLoading:true});
    
    let countError = 0;

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            // validate payload        
                let clean_payload = {
                    first_name:payload.firstName,
                    last_name:payload.lastName,
                    email:payload.email,                   
                }

                console.warn(clean_payload)

                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CREATE_ACCOUNT_USING_GOOGLE}`,clean_payload).then((response)=>{                    
                    console.warn('samnple',response)
                    if(response.data.status == true){
                        
                        let params = {
                            userId: response.data.userId,
                            email:response.data.email
                        }
                        
                        // NAVIGATE TO VERIFY OTP
                        props.navigation.navigate('VerifyOtp',params);


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
                        text2:error.response,
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



export const createAccount = (payload,setState,props)=>{
    setState({isLoading:true});

    let countError = 0;
    let computeAge = 0;
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
                    }else{                    
                        if(item == 'email'){
                            // VALIDATE EMAIL
                            if(!constants.RegEx.EMAIL_REGEX.pattern.test(payload[item])){
                                setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:constants.RegEx.EMAIL_REGEX.errorMessage}})                                                
                                countError++;
                            }
                        }

                        if(item == 'password'){        
                            // VALIDATE PASSWORD                    
                            if(!constants.RegEx.PASSWORD_REGEX.pattern.test(payload[item])){
                                setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:constants.RegEx.PASSWORD_REGEX.errorMessage}})    
                                countError++;
                            }
                        }


                        if(item == 'password'){        
                            // VALIDATE PASSWORD                    
                            if(payload[item]  != payload['confirmPassword']){
                                setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:'Your password and confirm password does not matched.'}})    
                                countError++;
                            }
                        }

                        if(item == 'confirmPassword'){        
                            // VALIDATE CONFIRM PASSWORD                    
                            if(payload[item]  != payload['password']){
                                setState({[item]:{...payload[item],value:payload[item],error:true,errorMessage:'Your password and confirm password does not matched.'}})    
                                countError++;
                            }
                        }


                        if(item == 'contact'){        
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
            
            
            // check error count
            if(countError == 0){

                let clean_payload = {
                    first_name:payload.firstName,
                    last_name:payload.lastName,
                    email:payload.email,
                    phone:payload.contact,
                    birthday:payload.birthday,
                    age:computeAge,
                    username:payload.email,
                    password:payload.password,
                    age:computeAge               
                }

                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.CREATE_ACCOUNT}`,clean_payload).then((response)=>{                    
                    
                    if(response.data.status == true){
                        
                        Toast.show({
                            type:'success',
                            text1: 'Success',
                            text2: response.data.message
                        });

                        props.navigation.goBack();
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
                        text2:error.response,
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



export const login = (payload,setState,props) => {     
 
    let countError = 0;
    // Check Internet Connection
    NetInfo.fetch().then(async (state)=>{
            
        // if internet connected
        if(state.isConnected && state.isInternetReachable){
            

            if(payload.loginType == 'hypr'){
            //turn on loading
            setState({isLoading:true});
             // validate payload
             Object.keys(payload).map((item,index)=>{                
                if(payload[item] !== undefined || payload[item] != '' ){                      
                    if(payload[item] == ''){
                        setState({[item]:{...payload[item],error:true,errorMessage:`Please enter your ${item}.`}})                                                
                        countError++;
                    }                                     
                }
            })            
            
            if(countError == 0){
                                      
                let clean_payload = {
                    username : payload.username,
                    password : payload.password,
                    loginType:payload.loginType
                }

                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.LOGIN}`,clean_payload).then((response)=>{                    
              
                    if(response.data.status == true){
                        Toast.show({
                                type:'success',
                                text1:'Success',                    
                                text2: response.data.message
                        });

                      
                        let params = {
                            userId: response.data.userId,
                            email:response.data.email
                        }
                        
                        // NAVIGATE TO VERIFY OTP
                        props.navigation.navigate('VerifyOtp',params);
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
                if (payload.loginType == 'google'){
                    

                   
                      
                        // let revoke = await GoogleSignin.revokeAccess();
                        // await GoogleSignin.signOut();
                        let logoutGoogle = await GoogleSignin.signOut();
                 
               

                        // if(logoutGoogle){
                            let checkUser = await GoogleSignin.signIn();
                            if(checkUser){
                                let googlePayload = {
                                    firstName:checkUser.user.givenName,
                                    lastName:checkUser.user.familyName,
                                    email:checkUser.user.email,                                                                                    
                                }
                                console.warn(googlePayload);
                                createAccountUsingGoogle(googlePayload,setState,props)
                            }
                        // }
                }
                
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


export const verifyOtp = (payload,setState,props)=>{
    setState({isLoading:true});

    // Check Internet Connection
    NetInfo.fetch().then((state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            if(payload.otp.length == 4){


                let clean_payload = {
                    otp : payload.otp,
                    userId : payload.userId
                }
                // POST REQUEST
                POST(`${getBaseUrl().accesspoint}${constants.EndPoints.VERIFY_OTP}`,clean_payload).then((response)=>{                    
                    
                    if(response.data.status == true){
                        // Toast.show({
                        //         type:'success',
                        //         text1:'Success',                    
                        //         text2: response.data.message
                        // });                     
                        
                        SET_SESSION('USER_ID',payload.userId)
                        
                        // NAVIGATE TO MARKET
                        props.navigation.navigate('Home');
                    }else{
                        Toast.show({
                            type:'error',
                            text1: response.data.message
                        });

                    }

                     // turn off loading
                     setState({isLoading:false});
                }).catch((error)=>{
                    
                    console.log(error);
                    Toast.show({
                        type:'error',
                        text1:'Something went wrong!'
                    });
                    
                    // turn off loading
                    setState({isLoading:false});
                });



                
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
            let cleanPayload = {
                userId:payload.userId
            }
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.RESEND_OTP}`,cleanPayload).then((response)=>{                    
         
                if(response.data.status == true){
                                                                   
                 
                    Toast.show({
                        type:'success',
                        text1:'Success',                    
                        text2: response.data.message
                    });     
               

                }else{
                    Toast.show({
                        type:'error',
                        text1: 'Error',
                        text2:response.data.errorMessage
                    });

                }
               
                 // turn off loading
                 setState({isLoadingResendButton:false});
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1: 'Error',
                    text2:error
                });

                // turn off loading
                setState({isLoadingResendButton:false});
                              
            });

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




export const getUserInfo = (setState)=>{

  

    
    // Check Internet Connection
    NetInfo.fetch().then(async(state)=>{
         // if internet connected
         if(state.isConnected && state.isInternetReachable){

            let userId = await GET_SESSION('USER_ID');
            
            let payload = {
                userId:userId
            }
            // POST REQUEST
            POST(`${getBaseUrl().accesspoint}${constants.EndPoints.GET_USER_INFO}`,payload).then((response)=>{                    
             
                if(response.data.status == true){
                                                                   
                 
                    setState({userInfo:response.data.data})

                }else{
                    Toast.show({
                        type:'error',
                        text1: 'Error',
                        text2:response.data.errorMessage
                    });

                }
               
                 // turn off loading
                 setState({isLoading:false});
            }).catch((error)=>{
                console.warn(error)
                Toast.show({
                    type:'error',
                    text1: 'Error',
                    text2:error
                });
                              
            });

         }else{
             //  No internet Connection
            Toast.show({
                type:'error',
                text1:'No internet Connection!'
            })
         
         }
    });

}

