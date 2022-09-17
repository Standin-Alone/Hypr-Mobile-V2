import React from 'react';
import { View,Text,Animated} from 'react-native';
import Components from '../../components';
import constants from '../../constants';
import { styles } from './styles';
import { sendForgotPasswordLink } from '../../actions/auth';
import { showPassword } from '../../utils/functions';

export default class ForgotPassword extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          username:{
              focus:false,
              error:false,
              errorMessage:'',
              value:''
          },
          isLoading:false,
          showPassword:true
      };
     
    }

    setMyState = (value)=>this.setState(value);

    // handleForgotPassword
    handleForgotPassword = ()=>{
                
    
        let payload = {
            username    : this.state.username.value,
        };

        
        sendForgotPasswordLink(payload,this.setMyState,this.props)
        
              
    }


    render(){
     
        return(
            <>                              
                <Components.PrimaryHeader
                    onGoBack={()=>this.props.navigation.goBack()}
                    title="Forgot Password"
                />
                <View style={{flexDirection:'column',left:constants.Dimensions.vw(5),top:constants.Dimensions.vh(2)}}>
                    <Components.PrimaryTextInput
                            placeholder={"Username/Email"}
                            iconName="email"
                            onFocus={()=>this.setState({username:{...this.state.username,focus:true}})}
                            onBlur={()=>this.setState({username:{...this.state.username,focus:false}})}
                            isFocus={this.state.username.focus}
                            isError={this.state.username.error}
                            errorMessage={this.state.username.errorMessage}
                            value={this.state.username.value}
                            onChangeText={(value)=>this.setState({username:{...this.state.username,value:value,error:false}})}                                
                    /> 
                    <Components.PrimaryButton  
                        onPress={()=>this.handleForgotPassword()}                      
                        title={"Send Reset Password Link"}                                
                        isLoading={this.state.isLoading}
                    />
                </View>
            </>
        )
    }

}
  