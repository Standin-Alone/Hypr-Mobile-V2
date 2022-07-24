import React from 'react';

import { View,Text,ImageBackground,ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { getAllFriendSuggestion,getAllFriendRequests,sendFriendRequest,acceptFriendRequest,declineFriendRequest} from '../../../actions/friend';
import {GET_SESSION} from '../../../utils/async_storage';
export default class Friend extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
            friendSuggestion:[],
            extraFriendSuggestion:[],
            friendRequests:[],
            extrafriendRequests:[],
            isLoading:false
    
      };
    }


    setMyState = (value)=>this.setState(value)

    async componentDidMount(){
        let parameter = {
            userId:await GET_SESSION('USER_ID'),
        }
        getAllFriendSuggestion(parameter,this.setMyState)
        getAllFriendRequests(parameter,this.setMyState)
        
    }


    handleAddFriend = async(item)=>{

        let parameter = {
            userId: await GET_SESSION('USER_ID'),
            receiver_user_id:item._id
        }

        sendFriendRequest(parameter,this.setMyState,this.props,this.state)
    }

    handleAcceptFriendRequest = async(item)=>{

        let parameter = {
            sender_user_id: item._id,
            receiver_user_id:await GET_SESSION('USER_ID')
        }

        acceptFriendRequest(parameter,this.setMyState,this.props,this.state)
    }

    handleDeclineFriendRequest = async(item)=>{

        let parameter = {
            sender_user_id: item._id,
            receiver_user_id:await GET_SESSION('USER_ID')
        }

        declineFriendRequest(parameter,this.setMyState,this.props,this.state)
    }

    renderItem = ({item,index})=>{
       
        return(<Components.FriendSuggestionCard
                    fullName={`${item.first_name} ${item.last_name}`}
                    onAddFriend={()=>this.handleAddFriend(item)}
                    profilePicture={item.picture}
                    isSent={item.isSent}
                />)
    }
     

    renderFriendRequests = ({item,index})=>{
     
        return(<Components.FriendRequestsCard
                    fullName={`${item.first_name} ${item.last_name}`}
                    onAcceptFriendRequest={()=>this.handleAcceptFriendRequest(item)}
                    onDeclineFriendrequest={()=>this.handleDeclineFriendRequest(item)}
                    profilePicture={item.picture}
                    isAdded={item.isAdded}
                    isDeclined={item.isDeclined}
                />)
    }
     
    render(){
     
        return(
            <>
                <Components.FriendHeader/>                 

                
                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}}>                 
                    <View>

                        {this.state.friendRequests.length > 0 &&
                        <>
                            <View style={{left:constants.Dimensions.vw(1)}}>
                                <Text style={styles.headerText1} >Friend requests</Text>
                                <FlatList
                                    data={this.state.friendRequests}
                                    extraData={this.state.extrafriendRequests}
                                    renderItem={this.renderFriendRequests}
                                />
                            </View>
                            <View style={{top:constants.Dimensions.vh(2)}}>
                                <View style={styles.divider}>                            
                                </View>
                            </View>
                        </>                                                
                        }
                        <View style={{top:constants.Dimensions.vh(2),left:constants.Dimensions.vw(1)}}>
                            <View  style={{left:constants.Dimensions.vw(1)}}>
                                <Text style={styles.headerText1}>Friends Suggestion</Text>
                            </View>
                            

                            {this.state.isLoading ?
                                <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                            :
                            <FlatList
                                data={this.state.friendSuggestion}
                                extraData={this.state.extraFriendSuggestion}
                                renderItem={this.renderItem}
                                contentContainerStyle={{paddingBottom:constants.Dimensions.vh(100)}}
                            />
                            }
                        </View>
                    </View>
                </ImageBackground>
            </>
        ) 
    }

}
  