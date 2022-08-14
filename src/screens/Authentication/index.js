import React from 'react';
import { View,ActivityIndicator,Text,ImageBackground } from 'react-native';
import constants from '../../constants';
import { GET_SESSION } from '../../utils/async_storage';
import FastImage from 'react-native-fast-image'
import { styles } from './styles';
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-toast-message';

export default class Authentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        

            loadingText:'Checking internet connection...'
      };
    }
    async componentDidMount(){
        let checkSession = await GET_SESSION('USER_ID');

        // Check Internet Connection
        NetInfo.fetch().then((state)=>{

            // if internet connected
            if(state.isConnected && state.isInternetReachable){
                
                this.setState({loadingText:'Authentication...'});

                setTimeout(()=>{
                    if(checkSession){            
                 
                        
                    
                        // this.props.navigation.replace(constants.ScreenNames.AppStack.HOME,{stories:stories});
                        this.props.navigation.replace(constants.ScreenNames.AppStack.HOME, {
                            screen: constants.ScreenNames.BottomTab.SOCIAL_HOME,
                            params: { screen: constants.ScreenNames.Social.SOCIAL,
                            },
                          });
                    }else{
                        this.props.navigation.replace(constants.ScreenNames.AppStack.LOGIN);
                    }
                },2000)
              
            
            }else{
                
                this.setState({loadingText:'No internet connection. Please check your network.'});

                Toast.show({
                    type:'error',
                    text1: 'Warning',
                    text2: 'You are currently offline. No internet connection.'
                });
            }

        });
     
    }

    render(){
        return(
            <>  
                <ImageBackground source={constants.Images.socialPageBackground} style={styles.container}>                                 
                    
                    
                        <FastImage source={constants.Images.hyprLogoNew} style={styles.hyprLogo} resizeMode="contain"/>
                        <View style={{top:constants.Dimensions.vh(80)}}>
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary}/>
                        <Text style={styles.loadingText}>{this.state.loadingText}</Text>
                        </View>
                    
                </ImageBackground>
            </>
        )
    }

}
  