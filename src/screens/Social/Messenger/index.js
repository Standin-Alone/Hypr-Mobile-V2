import React from 'react';

import { View,ActivityIndicator,FlatList} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { FloatingAction } from "react-native-floating-action";
import { getFriendsMessages,searchFriend } from '../../../actions/chat';
import { GET_SESSION } from '../../../utils/async_storage';

export default class Messenger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        friendsMessages:[],
        searchedFriends:[],
        searchValue:'',
        isSearching:false
      };
    }

    

     
    setMyState = (value)=>this.setState(value)

    async componentDidMount(){
        
        let parameter = {
            userId: await GET_SESSION('USER_ID')
        };
        getFriendsMessages(parameter,this.setMyState,this.props)
    }


    handleViewChat = async (item)=>{
        console.warn(`CHAT`,item)
        let parameters = {
            userId:await GET_SESSION('USER_ID'),
            friendUserId:item.userId == await GET_SESSION('USER_ID') ?   await GET_SESSION('USER_ID')  :  item.userId ,
            username:item.name,   
            room:item.room      

        }

        this.props.navigation.navigate(constants.ScreenNames.Social.CHAT,parameters)
    }



    renderItem = ({item,index})=>{
      
        return(
            <Components.PrimaryButtonWithPicture
                title={item.name}
                subTitle={item?.lastMessage}
                picture={`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${item.profileImage}`}
                onPress={()=>this.handleViewChat(item)}
            />
        )
    }


    handleGoToChat = async (item)=>{

        
        let parameters = {
            userId:await GET_SESSION('USER_ID'),
            friendUserId:item._id,
            username:`${item.first_name} ${item.middle_name ? item.middle_name : ''} ${item.last_name}`, 
            room:item.room         
        }

        this.props.navigation.navigate(constants.ScreenNames.Social.CHAT,parameters)
    }

    renderSearchedFriends = ({item,index})=>{
      
        return(
            <Components.PrimaryButtonWithPicture
                title={`${item.first_name} ${item.middle_name ? item.middle_name : ''} ${item.last_name}`}
                picture={`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${item.picture}`}
                onPress={()=>this.handleGoToChat(item)}
            />
        )
    }

    handleSearchFriend = async (value)=>{
        let parameter={
            searchValue:value,
            userId: await GET_SESSION('USER_ID')
        }

        searchFriend(parameter,this.setMyState,this.props)
    }


    render(){
     
        return(
            <>
                <Components.MessengerHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    onNext={this.state.addType == 'post' ? this.handleGoToCreatePost : this.handleCreateStory }
                    showNextButton                               
                />      

                <View>
                <Components.SearchInput
                    onChangeText={this.handleSearchFriend}
                    placeholder="Search"
                    onBlur={()=>{
                        this.setState({stopSearching:true})
                    }}
                />
                </View>


                {this.state.isSearching ? 
                 <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                :
   
                ( !this.state.isSearching  && this.state.searchedFriends.length == 0 ?
                        <FlatList                    
                            data={this.state.friendsMessages}                   
                            renderItem={this.renderItem}
                            contentContainerStyle={styles.allProductsContainer}                  
                        />
                        :
                    
                    <FlatList                    
                        data={this.state.searchedFriends}                   
                        renderItem={this.renderSearchedFriends}
                        contentContainerStyle={styles.allProductsContainer}                  
                    />
                )

                
                }
                
             
                
             
               
                   


              <FloatingAction 
                onPressMain={name => {
                    let parameters = {
                    }

                    this.props.navigation.navigate(constants.ScreenNames.Social.CHOOSE_FRIEND_TO_CHAT,parameters)
                }}
                floatingIcon={ <constants.Icons.Feather name="message-circle" size={constants.Dimensions.normalize(12)} color={constants.Colors.light}/>}                
                />

              
            </>
        ) 
    }

}
  