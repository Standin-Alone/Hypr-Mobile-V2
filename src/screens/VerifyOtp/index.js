import React from 'react';
import { View,Text,Image,Animated} from 'react-native';
import Components from '../../components';
import constants from '../../constants';
import { styles } from './styles';
import Toast from 'react-native-toast-message';
import { POST } from '../../utils/axios';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { verifyOtp,resendOtp } from '../../actions/auth';


export default class VerifyOtp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          otp:{
              focus:false,
              error:false,
              errorMessage:'',
              value:''
          },  
          email:'',        
          isLoading:false,  
          isLoadingResendButton:false
      };
     
    }

    setMyState = (value)=>this.setState(value);
    
    handleChangeOtp = (value)=>this.setState({otp:{...this.state.otp,value:value,error:false}})

    handleVerifyOtp = (value)=>{        

        let payload = {
            otp    : this.state.otp.value,  
            userId : this.props.route.params.userId       
        };  

        console.warn(this.state.otp.value)
                    
        return verifyOtp(payload,this.setMyState,this.props);
    }

    handleResendOtp = ()=>{
        let payload = {
            email    : this.state.email,    
            userId : this.props.route.params.userId        
        };

        return resendOtp(payload,this.setMyState);
    }

    
    render(){
        
       
        return(
            <>                              
                <View style={styles.container}>
                <Components.PrimaryHeader                    
                    onGoBack = {()=>this.props.navigation.goBack()}
                />
                <View style={styles.otpVerificationTitleContainer}>
                    <Text style={styles.otpVerificationTitle} adjustsFontSizeToFit>OTP Verification</Text>
                    <Text style={styles.otpSubtitle} adjustsFontSizeToFit numberOfLines={3}>Enter the OTP has sent to
                        <Text style={styles.email}> {this.props.route.params.email  }</Text>
                    </Text>
                </View>
                <View style={styles.codeFieldContainer}>
                 
                    <CodeField                                        
                        cellCount={6}
                        value={this.state.otp.value}
                        onChangeText={this.handleChangeOtp}
                        rootStyle={styles.codeFieldRoot}                    
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        onSubmitEditing= {this.handleVerifyOtp}
                        multiline={false}
                        renderCell={({index, symbol, isFocused}) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell, symbol && styles.cellHasValue , this.state.otp.error && styles.errorCell ]}                                                    
                            >                                                 
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                        )}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{ flex:2 }}>
                        <Components.PrimaryButton
                            title="Verify"
                            onPress={this.handleVerifyOtp}
                            isLoading={this.state.isLoading}
                        />
                    </View>
                            

                    <View style={{ flex:2 }}>
                        <Components.PrimaryButtonOutline
                            title="Resend OTP"    
                            onPress={this.handleResendOtp}                                            
                            isLoading={this.state.isLoadingResendButton}
                        />
                    </View>
                    
                </View>
                </View>                
            </>
        )
    }

}
  