import React from 'react';
import { View,Text} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import { styles } from './styles';
import FastImage from 'react-native-fast-image'
import { getUserInfo } from '../../../actions/auth';

export default class UserProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {    
          userInfo:[]    
      };
    }

    setMyState = (value)=>this.setState(value)


    async componentDidMount(){
        getUserInfo(this.setMyState)

        this.props.navigation.addListener('focus',()=>{
            getUserInfo(this.setMyState)
        })
    }

    render(){
        return(
            <>  
                <Components.ProfileHeader
                    goToProfileSettings={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.ACCOUNT_SETTINGS)}
                />
                <View style={styles.container}>                   
                        <View style={[styles.profileContainer,{height:constants.Dimensions.vh(70)}]}>
                            <FastImage source={constants.Images.userProfile} style={styles.userProfile} resizeMode="contain"/>
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
                                />

                                <Components.ButtonWithTopIcon
                                    title="To Receive"
                                    iconName={"shipping-fast"}
                                />
                            </View>    
                        </View>            
                </View>
            </>
        )
    }

}
  