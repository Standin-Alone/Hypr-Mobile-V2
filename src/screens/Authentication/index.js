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
                        let stories = [
                            {
                                "_id": "62e51f1d615541b53d44330d",
                                "user_id": "62dd2221789599e81dc1172e",
                                "username": "",
                                "full_name": "Jack Snyder",
                                "user_picture": "IMG_20220720_055206.jpg",
                                "user_name": "Jack Snyder",
                                "user_image": "http://192.168.1.8:9002//uploads/profile_pictures//IMG_20220720_055206.jpg",
                                "files": [
                                    "rn_image_picker_lib_temp_08597ea1-c62c-4954-b268-266242179ae8.jpg"
                                ],
                                "stories": [
                                    {
                                        "story_id": 1,
                                        "story_image": "http://192.168.1.8:9002//uploads//stories//rn_image_picker_lib_temp_08597ea1-c62c-4954-b268-266242179ae8.jpg"
                                    }
                                ],
                                "date_created": "2022-07-30T12:07:44.970Z",
                                "status": true,
                                "__v": 0
                            }
                        ]   
                        
                    
                        // this.props.navigation.replace(constants.ScreenNames.AppStack.HOME,{stories:stories});
                        this.props.navigation.replace(constants.ScreenNames.AppStack.HOME, {
                            screen: constants.ScreenNames.BottomTab.SOCIAL_HOME,
                            params: { screen: constants.ScreenNames.Social.SOCIAL,
                            params:{stories:stories} },
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
  