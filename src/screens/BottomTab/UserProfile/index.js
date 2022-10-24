import React from 'react';
import { View,Text,ToastAndroid, ImageBackground, Image,ActivityIndicator} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import { styles } from './styles';
import FastImage from 'react-native-fast-image'
import { getUserInfo } from '../../../actions/auth';
import Clipboard from '@react-native-clipboard/clipboard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { changeProfilePicture } from '../../../actions/profile';
import { openCamera, openGallery } from '../../../utils/functions';
import getBaseUrl from '../../../utils/config';

export default class UserProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {    
          userInfo:[],
          showReferralModal:false,
          showSelection:false,
          isLoading:true,
          changeImageType:""
          
      };
    }

    setMyState = (value)=>this.setState(value)


    async componentDidMount(){
        getUserInfo(this.setMyState)
    

    }

    handleCopyLink = (referral_link)=>{
        console.warn(referral_link);
        Clipboard.setString(referral_link);       
        ToastAndroid.show("Successfully copied the link", ToastAndroid.SHORT);       
    }

    handleChangeProfilePicture = ()=>{
       let  parameter  ={
            userId:this.state.userInfo?.user_id,            
       }


       changeProfilePicture(parameter,this.setMyState(),this.props,this.state)
    }

    openUploadSelection = (type)=>{
        
        this.setState({showSelection:true,changeImageType:type});
    }



    render(){
        return(
            <>  
                <Components.ProfileHeader
                    goToProfileSettings={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.ACCOUNT_SETTINGS)}
                    onShareReferralLink={()=>this.setState({showReferralModal: this.state.showReferralModal ? false :true})}
                    onChangeCoverPhoto={()=>this.openUploadSelection('cover')}
                    onGoBack={()=>this.props.navigation.goBack()}
                />

            <Components.UploadingSelectionCard
                    showPanel={this.state.showSelection}
                    onDismiss = {()=>this.setState({showSelection:false})}
                    onPressTakePhoto={()=>{
                        let parameter = {
                            redirectTo:constants.ScreenNames.Profile.VIEW_NEW_PROFILE_PIC,
                            changeImageType:this.state.changeImageType
                        }

                        return openCamera(parameter,this.setMyState,this.props)                 
                    }}

                    onPressOpenGallery={()=>{
                            let parameter = {
                                redirectTo:constants.ScreenNames.Profile.VIEW_NEW_PROFILE_PIC,
                                changeImageType:this.state.changeImageType
                            }

                            return openGallery(parameter,this.setMyState,this.props)              
                    }}
                />

                
                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                    :

                <>
                
                    <View style={styles.container}>                             
                            <View style={[styles.profileContainer]}>
                                <View style={{   flexDirection:'row'}}>
                                    <TouchableOpacity onPress={()=>this.openUploadSelection('profile')} style={{left:constants.Dimensions.vw(2)}} >                            
                                        <Image source={{uri: `${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.userInfo?.profile_image}`}} style={styles.userProfile}  />
                                        <constants.Icons.FontAwesome5 name="camera" size={20} color={constants.Colors.primary} style={styles.edit}/>
                                    </TouchableOpacity>
                                    <View style={{top:constants.Dimensions.vh(5),left:constants.Dimensions.vw(5)}}> 
                                        <Text style={styles.fullName}>{`${this.state.userInfo?.first_name }  ${this.state.userInfo?.last_name}  `}</Text>
                                        <View style={{flexDirection:'row',alignSelf:'center',top:constants.Dimensions.vh(2)}}>
                                            <View style={styles.walletContainer}>
                                                <Text style={styles.walletText}>${this.state.userInfo.reward >= 0  ? this.state.userInfo.reward.toFixed(2)  : 'Processing'}</Text>
                                                <Text style={styles.walletLabel} >Hypr Wallet</Text>
                                                <Text style={styles.walletLabel} >Available Balance</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                
                                <View style={{flexDirection:'row',alignSelf:'center'}}>
                                    <View style={{flexDirection:'column',marginHorizontal:constants.Dimensions.vw(5)}}>
                                        <Text style={styles.palsValue}>{this.state.userInfo?.totalPals}</Text>
                                        <Text style={styles.palsLabel}>Pals</Text>
                                    </View>
                                </View>                             
                            </View>         
                                 
                            <View style={styles.invitePalsContainer}>                                    
                                    <Text style={styles.invitePalsLabel}>Invite Friends/Pals</Text>
                                    <View style={styles.primaryContainer}>                              
                                        <View>                
                                            <View                                                                                              
                                                style={[styles.shareLinkTextInput,]}                                                                                 
                                            
                                                numberOfLines={1}
                                                >
                                                <Text style={[styles.referralLink]} numberOfLines={1} ellipsizeMode='middle'  >
                                                    {`${getBaseUrl().accesspointPlain}${this.state.userInfo?.referral_link}`}
                                                </Text>
                                        </View>
                                            
                                        </View>                                
                                        <TouchableOpacity style={styles.icon}     onPress={this.handleCopyLink}>
                                            <constants.Icons.Ionicons 
                                                    name={'copy'} 
                                                    size={constants.Dimensions.normalize(12)} 
                                                    color={ constants.Colors.primary }                                                                                                                                                                      
                                                />
                                        </TouchableOpacity>
                                    </View>
                                </View> 
                            
                    </View>
                    </>
                }
  
            </>
        )
    }

}
  