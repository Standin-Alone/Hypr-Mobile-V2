import React from 'react';

import { View,Text,ImageBackground,ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { getUserInfo } from '../../../actions/auth';
import {GET_SESSION} from '../../../utils/async_storage';
import { getAllMembers } from '../../../actions/team';
export default class Mlm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        userInfo:[],
        members:[],
        isLoading:true
      };
    }


    setMyState = (value)=>this.setState(value)

    handleLoadMembers = async ()=>{
        
        let parameter = {
            userId:await GET_SESSION('USER_ID'),
            previousMembers:this.state.members,
            currentPage:1,
        }
        getAllMembers(parameter,this.setMyState)     
    }
     componentDidMount(){

        this.handleLoadMembers()
        getUserInfo(this.setMyState)
        // this.props.navigation.addListener('focus',()=>{
        //     getUserInfo(this.setMyState)
        // })

        
        
    }

    viewProfile = (item)=>{
        let cleanItem = {
            user_id:item._id,
            full_name:`${item.first_name} ${item.last_name}`
        }

        this.props.navigation.navigate(constants.ScreenNames.Social.VIEW_PROFILE,cleanItem)
    }

    renderMembers =  ({item,index})=>{
     
        console.warn(this.state.userInfo );
        return(<Components.MemberCard
                    fullName={`${item.first_name} ${item.last_name} ${item._id == this.state.userInfo?._id ? '(Me)' : ''}`}         
                    profilePicture={item.profile_image}
                    number= {index+1}
                    onViewProfile={()=>this.viewProfile(item)}
                />)
    }


     
    render(){
     
        return(
            <>
                <Components.MlmHeader
                    goToRewardHistory = {()=>this.props.navigation.navigate(constants.ScreenNames.Mlm.REWARD_HISTORY)}
                />                                 
                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}}>                 
                    <View style={styles.pointsCard}>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                
                            <View style={{flexDirection:'column',justifyContent:'center',marginVertical:constants.Dimensions.vh(10)}}>
                                <constants.Icons.FontAwesome5 name="award" size={100} color={constants.Colors.light}/>
                            </View>
                            <View style={{flexDirection:'column',justifyContent:'center',marginVertical:constants.Dimensions.vh(10)}}>
                                <Text style={styles.rewardValueText}>
                                    {this.state.userInfo.reward ? this.state.userInfo.reward  : 'Processing' }
                                </Text>

                                <Text style={styles.rewardTitleText     }>
                                    Reward
                                </Text>

                            </View>
                        </View>
                    </View>    
                    
                    {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                        :
                        <FlatList
                            data={[...new Set(this.state.members.filter(async (item)=>item._id != await GET_SESSION('USER_ID')))] }
                            extraData={this.state.extraMembers}
                            renderItem={this.renderMembers}
                            contentContainerStyle={{paddingBottom:constants.Dimensions.vh(100)}}
                        />
                        }              
                </ImageBackground>
            </>
        ) 
    }

}
  