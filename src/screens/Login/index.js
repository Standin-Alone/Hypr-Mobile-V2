import React from 'react';
import { View,Text,Animated} from 'react-native';
import Components from '../../components';
import constants from '../../constants';
import { styles } from './styles';
import { login } from '../../actions/auth';
import {GoogleSigninButton,    } from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken,Settings} from 'react-native-fbsdk-next';
import FastImage from 'react-native-fast-image';

Settings.setAppID('701919164416993');
Settings.initializeSDK();

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        

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
          isLoading:false
      };
     
    }

    setMyState = (value)=>this.setState(value);

    // handleLogin
    handleLogin = (loginType)=>{
                
    
        let payload = {
            username    : this.state.username.value,
            password : this.state.password.value,
            loginType: loginType
        };

        

        return login(payload,this.setMyState,this.props);               
        
              
    }

    goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    render(){
     
        return(
            <>                              
                <View style={styles.container}>

                    <View style={styles.bannerContainer}>
                        <View>
                            <FastImage source={constants.Images.hyprLogoNew} style={styles.loginCover} resizeMode="contain"/>
                        </View>

                        <View style={styles.headerContainer}>
                                <View style={{ left:constants.Dimensions.vw(5) }}>
                                    {/* <Text style={styles.headerText}>Welcome to Hypr</Text> */}
                                    <Text style={styles.subtitleText}>Sign in to start shopping.</Text>
                                </View>
                        </View>
                    </View>

                    <View style={styles.form}>                                                                 
                        <View>     
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
                                secureTextEntry={true}
                            />                        
                        </View>

                        <View style={styles.buttonContainer}> 
                            <View style={{ flexDirection:'row',justifyContent:'flex-end',marginBottom:20 }}>
                                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                            </View>
                            
                            <Animated.View>
                                <Components.PrimaryButton  
                                    onPress={()=>this.handleLogin('hypr')}                      
                                    title={"Log In"}                                
                                    isLoading={this.state.isLoading}
                                />

                                <Text style={styles.orText}>
                                    Or
                                </Text>
                                <GoogleSigninButton     
                                        buttonText = 'Login'
                                        style={styles.googleButton} 
                                        onPress={()=>this.handleLogin('google')}   
                                 />

                                 <LoginButton                                        
                                        style={styles.googleButton}                                         
                                        // onLoginFinished={
                                        //     (error, result)=>{
                                        //         console.warn(error)
                                        //         console.warn(result)
                                        //         this.handleLogin('facebook')}
                                        // }

                                        onLoginFinished={
                                            (error, result) => {
                                                console.warn(error)
                                              if (error) {
                                                console.warn("login has error: " + result.error);
                                              } else if (result.isCancelled) {
                                                console.warn("login is cancelled.");
                                              } else {
                                                AccessToken.getCurrentAccessToken().then(
                                                  (data) => {
                                                    console.warn(data.accessToken.toString())
                                                  }
                                                )
                                              }
                                            }
                                          }
                                          onLogoutFinished={() => console.warn("logout.")}
                                 />
                            </Animated.View>
                        </View>                        

                        
                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpTitle}>Don't have an account?</Text>
                            <Text  style={styles.signUpText} onPress={this.goToSignUp} > Sign Up here.</Text>
                        </View>
                        
                    </View>
                    
                </View>
                
            </>
        )
    }

}
  