import React from 'react';
import { View,Text,Image } from 'react-native';
import Components from '../../components';
import constants from '../../constants';
import { styles } from './styles';
import { PrimaryHeader } from '../../components/headers';
import { createAccount } from '../../actions/auth';
import moment from 'moment';
import { showPassword } from '../../utils/functions';

export default class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          firstName:{
              focus:false,
              error:false,
              errorMessage:'',
              value:''
          },
          lastName:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
          },
          email:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
          },
          contact:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
          },
          birthday:{
            focus:false,
            error:false,
            errorMessage:'',
            value:'',
            openDatePicker:false
          },
          username:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
          },
          password:{
                focus:false,
                error:false,
                errorMessage:'',
                value:''
          },      
          confirmPassword:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
          },      
          isLoading:false,
          showPassword1:true,
          showPassword2:true      
      };
      
    }

    setMyState = (value)=>this.setState(value);

    handleCreateAccount = ()=>{

        let payload = {
            firstName:this.state.firstName.value,
            lastName:this.state.lastName.value,
            email:this.state.email.value,
            contact:this.state.contact.value,            
            birthday:this.state.birthday.value,            
            password:this.state.password.value,
            confirmPassword:this.state.confirmPassword.value,
        }
        
        return createAccount(payload,this.setMyState,this.props)
        
    }

    render(){
        return(
            <>                              
                <View style={styles.container}>
                    <PrimaryHeader title="Sign Up" onGoBack = {()=>this.props.navigation.goBack()}/>
                    <View style={styles.form}>
                        <View>     
                            <Components.PrimaryTextInput
                                    placeholder={"First Name"}
                                    iconName="supervised-user-circle"
                                    onFocus={()=>this.setState({firstName:{...this.state.firstName,focus:true}})}
                                    onBlur={()=>this.setState({firstName:{...this.state.firstName,focus:false}})}
                                    isFocus={this.state.firstName.focus}
                                    isError={this.state.firstName.error}
                                    errorMessage={this.state.firstName.errorMessage}
                                    value={this.state.firstName.value}
                                    onChangeText={(value)=>this.setState({firstName:{...this.state.firstName,value:value,error:false}})}                                
                            />                        
                        </View>

                        <View>     
                            <Components.PrimaryTextInput
                                    placeholder={"Last Name"}
                                    iconName="supervised-user-circle"
                                    onFocus={()=>this.setState({lastName:{...this.state.lastName,focus:true}})}
                                    onBlur={()=>this.setState({lastName:{...this.state.lastName,focus:false}})}
                                    isFocus={this.state.lastName.focus}
                                    isError={this.state.lastName.error}
                                    errorMessage={this.state.lastName.errorMessage}
                                    value={this.state.lastName.value}
                                    onChangeText={(value)=>this.setState({lastName:{...this.state.lastName,value:value,error:false}})}                                
                            />                        
                        </View>

                        <View>     
                            <Components.PrimaryTextInput
                                    placeholder={"Email"}
                                    iconName="mail"
                                    onFocus={()=>this.setState({email:{...this.state.email,focus:true}})}
                                    onBlur={()=>this.setState({email:{...this.state.email,focus:false}})}
                                    isFocus={this.state.email.focus}
                                    isError={this.state.email.error}
                                    errorMessage={this.state.email.errorMessage}
                                    value={this.state.email.value}
                                    onChangeText={(value)=>this.setState({email:{...this.state.email,value:value,error:false}})}                                
                            />                        
                        </View>

                        <View>     
                            <Components.PrimaryPhoneInput 
                                onChangeText={(value)=>this.setState({contact:{...this.state.contact,value:value,error:false}})}                                 
                                isError={this.state.contact.error}
                                errorMessage={this.state.contact.errorMessage}
                                value={this.state.contact.value}
                            />                  
                        </View>                        
                   
                        <View>     
                            <Components.PrimaryTextInput
                                    placeholder={"Birthday"}
                                    iconName="calendar-today"
                                    onFocus={()=>this.setState({birthday:{...this.state.birthday,focus:true}})}
                                    onBlur={()=>this.setState({birthday:{...this.state.birthday,focus:false}})}
                                    isFocus={this.state.birthday.focus}
                                    isError={this.state.birthday.error}
                                    errorMessage={this.state.birthday.errorMessage}                                    
                                    value={this.state.birthday.value}
                                    onChangeDate={(setValue,value)=>this.setState({birthday:{...this.state.birthday,value:moment(value).format('MM-DD-YYYY'),error:false,openDatePicker:false}})}
                                    
                                    openDatePicker={this.state.birthday.openDatePicker}
                                    onPressIn={()=>this.setState({birthday:{...this.state.birthday,openDatePicker:this.state.birthday.openDatePicker ? false : true }})}
                            />                        
                        </View>

                        <View>     
                            <Components.PrimaryTextInput
                                    placeholder={"Password"}
                                    iconName="vpn-key"
                                    onFocus={()=>this.setState({password:{...this.state.password,focus:true}})}
                                    onBlur={()=>this.setState({password:{...this.state.password,focus:false}})}
                                    isFocus={this.state.password.focus}
                                    isError={this.state.password.error}
                                    errorMessage={this.state.password.errorMessage}
                                    value={this.state.password.value}
                                    onChangeText={(value)=>this.setState({password:{...this.state.password,value:value,error:false}})}                                
                                    secureTextEntry={this.state.showPassword1}
                                    showSecureTextEntry={true}
                                    onShowPassword={()=>showPassword(this.state,this.setMyState,'showPassword1')}
                            />                        
                        </View>



                        <View>     
                            <Components.PrimaryTextInput
                                    placeholder={"Confirm Password"}
                                    iconName="vpn-key"
                                    onFocus={()=>this.setState({confirmPassword:{...this.state.confirmPassword,focus:true}})}
                                    onBlur={()=>this.setState({confirmPassword:{...this.state.confirmPassword,focus:false}})}
                                    isFocus={this.state.confirmPassword.focus}
                                    isError={this.state.confirmPassword.error}
                                    errorMessage={this.state.confirmPassword.errorMessage}
                                    value={this.state.confirmPassword.value}
                                    onChangeText={(value)=>this.setState({confirmPassword:{...this.state.confirmPassword,value:value,error:false}})}                                
                                    secureTextEntry={this.state.showPassword2}
                                    showSecureTextEntry={true}
                                    onShowPassword={()=>showPassword(this.state,this.setMyState,'showPassword2')}
                            />                        
                        </View>
                    </View>                                                 
                    <View style={styles.buttonContainer}>
                        <Components.PrimaryButton                              
                            title={"Create an Account"}  
                            onPress={this.handleCreateAccount}                          
                            isLoading={this.state.isLoading}
                        />
                    </View>
                </View>
                
            </>
        )
    }

}
  