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

        // this.props.navigation.addListener('focus',()=>{
        //     getUserInfo(this.setMyState)
        // })
    }

    handleCopyLink = (referral_link)=>{
        
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

                <Components.ShareReferralLinkModal 
                    openModal={this.state.showReferralModal}
                    onCloseModal={()=>this.setState({showReferralModal: false})}
                    onCopy={()=>this.handleCopyLink(this.state.userInfo?.referral_link)}
                    referralLink={this.state.userInfo?.referral_link}
                />


        
                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1,zIndex:-4}}>                                 
                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                    :

                <>
                <Image source={{uri: `${constants.Directories.COVER_PICTURE_DIRECTORY}/${this.state.userInfo?.cover_pic}`}} style={styles.cover_pic} />

                

                    <View style={styles.container}>                             

                            <View style={[styles.profileContainer,{height:constants.Dimensions.vh(70)}]}>
                                <TouchableOpacity onPress={()=>this.openUploadSelection('profile')} >                            
                                    <Image source={{uri: `${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.userInfo?.profile_image}`}} style={styles.userProfile}  />
                                    <constants.Icons.FontAwesome5 name="edit" size={20} color={constants.Colors.secondary} style={styles.edit}/>
                                </TouchableOpacity>
                                <Text style={styles.fullName}>{`${this.state.userInfo?.first_name}  ${this.state.userInfo?.last_name} `}</Text>
                            </View>

                            <View style={[styles.profileContainer,{top:constants.Dimensions.vh(15), backgroundColor:'rgba(255,255,255,0.5)'}]}>
                                <Text style={styles.orderTitleText}>My Orders</Text>
                                <View style={styles.myOrdersContainer}>
                                    
                                    <Components.ButtonWithTopIcon
                                        title="To Verify"
                                        iconName={"user-check"}
                                        onPress={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.tracking.TO_VERIFY)}
                                        
                                    />
                                    
                                    <Components.ButtonWithTopIcon
                                        title="To Ship"
                                        iconName={"ship"}
                                        onPress={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.tracking.TO_SHIP)}
                                    />

                                    <Components.ButtonWithTopIcon
                                        title="To Receive"
                                        iconName={"shipping-fast"}
                                        onPress={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.tracking.TO_RECEIVE)}
                                    />
                                </View>    
                            </View>            
                    </View>
                    </>
                }
                </ImageBackground>
  
            </>
        )
    }

}
  