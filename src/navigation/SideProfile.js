import React from 'react';
import { View,Image,Text,TouchableOpacity } from 'react-native';
import { getUserInfo,logOut} from '../actions/auth';
import constants from '../constants';
import { styles } from '../screens/ShopHome/styles';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';

export default class SideProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
        userInfo:[],
        drawerItems:this.props
      };
    }
    setMyState = (value)=>this.setState(value);    
    componentDidMount(){
        getUserInfo(this.setMyState)

    }    


    goToUserProfile = ()=>{
        this.props.navigation.navigate(constants.ScreenNames.Profile.PROFILE);
    }
    
    goToSocial = ()=>{
        this.props.navigation.navigate(constants.ScreenNames.Social.SOCIAL);
    }

    render(){
        return(
            <View style={{flex:1}}>
            <View style={{flexDirection:'column'}}>
                <TouchableOpacity onPress={()=>this.goToUserProfile()}>
                    <Image source={{uri: `${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.userInfo?.profile_image}`}} style={styles.userProfile}  />
                </TouchableOpacity>
                <Text style={styles.fullName}>{ this.state.userInfo?.first_name ? `${this.state.userInfo?.first_name}  ${this.state.userInfo?.last_name}` : 'Processing'}</Text>
            </View>
            <DrawerContentScrollView {...this.props}>
                <DrawerItemList
                    {...this.props}
                />                     
            </DrawerContentScrollView>
            <View style={{position:'absolute',bottom:constants.Dimensions.vh(2),left:0,right:0}}>
                <View style={{left:constants.Dimensions.vw(17)}}>
                    <TouchableOpacity onPress={()=>logOut(this.props)} style={{flexDirection:'row'}}>
                        <constants.Icons.Ionicons
                            name="log-out"
                            color={constants.Colors.danger}
                            size={constants.Dimensions.normalize(10)}
                        />
                        <Text style={styles.logOut}>
                            Log out
                        </Text>
                    </TouchableOpacity>
                </View>
              
            </View>
        </View>

        )
    }

}
  