import React from 'react';
import { View,Text,ToastAndroid, ImageBackground, Image} from 'react-native';
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
          showSelection:false
          
      };
    }

    setMyState = (value)=>this.setState(value)


    async componentDidMount(){
        getUserInfo(this.setMyState)

        this.props.navigation.addListener('focus',()=>{
            getUserInfo(this.setMyState)
        })
    }

    handleCopyLink = (referral_link)=>{
        
        Clipboard.setString(referral_link);       
        ToastAndroid.show("Successfully copied the link", ToastAndroid.SHORT);       
    }

    handleChangeProfilePicture = ()=>{
       let  parameter  ={
            userId:this.state.userInfo?.user_id
       }


       changeProfilePicture(parameter,this.setMyState(),this.props,this.state)
    }

    openUploadSelection = ()=>{
        
        this.setState({showSelection:true});
    }


    render(){
        return(
            <>  
                <Components.ProfileHeader
                    goToProfileSettings={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.ACCOUNT_SETTINGS)}
                    onShareReferralLink={()=>this.setState({showReferralModal: this.state.showReferralModal ? false :true})}
                    
                />

            <Components.UploadingSelectionCard
                    showPanel={this.state.showSelection}
                    onDismiss = {()=>this.setState({showSelection:false})}
                    onPressTakePhoto={()=>{
                        let parameter = {

                        }

                        return openCamera({},this.setMyState)                 
                    }}

                    onPressOpenGallery={()=>{
                            let parameter = {

                            }

                            return openGallery({},this.setMyState)              
                    }}
                />

                <Components.ShareReferralLinkModal 
                    openModal={this.state.showReferralModal}
                    onCloseModal={()=>this.setState({showReferralModal: false})}
                    onCopy={()=>this.handleCopyLink(this.state.userInfo?.referral_link)}
                    referralLink={this.state.userInfo?.referral_link}
                />
                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1,zIndex:-4}}>                                 
                <Image source={{uri: `data:image/jpeg;base64,${this.state.userInfo?.profile_image}`}} style={styles.cover_pic} resizeMode="cover"/>

                

                    <View style={styles.container}>                             

                            <View style={[styles.profileContainer,{height:constants.Dimensions.vh(70)}]}>
                                <TouchableOpacity onPress={()=>this.openUploadSelection()}>                            
                                    <FastImage source={{uri: `data:image/jpeg;base64,${this.state.userInfo?.profile_image}`}} style={styles.userProfile} resizeMode="contain"/>
                                    <constants.Icons.FontAwesome5 name="edit" size={20} color={constants.Colors.secondary} style={styles.edit}/>
                                </TouchableOpacity>
                                <Text style={styles.fullName}>{`${this.state.userInfo?.first_name}  ${this.state.userInfo?.last_name} `}</Text>
                            </View>

                            <View style={styles.profileContainer}>
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
                </ImageBackground>
            </>
        )
    }

}
  