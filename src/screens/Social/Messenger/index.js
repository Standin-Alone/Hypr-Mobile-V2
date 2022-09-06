import React from 'react';

import { View,Text,FlatList} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { FloatingAction } from "react-native-floating-action";
import { getFriendsMessages } from '../../../actions/chat';
import { GET_SESSION } from '../../../utils/async_storage';

export default class Messenger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        friendsMessages:[]
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

        let parameters = {
            userId:await GET_SESSION('USER_ID'),
            friendUserId:item.userId == await GET_SESSION('USER_ID') ? item.userId :  await GET_SESSION('USER_ID') ,
            username:item.name,          

        }

        this.props.navigation.navigate(constants.ScreenNames.Social.CHAT,parameters)
    }

    renderItem = ({item,index})=>{
      
        return(
            <Components.PrimaryButtonWithPicture
                title={item.name}
                subTitle={item.lastMessage}
                picture={`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${item.profileImage}`}
                onPress={()=>this.handleViewChat(item)}
            />
        )
    }


    render(){
     
        return(
            <>
                <Components.MessengerHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    onNext={this.state.addType == 'post' ? this.handleGoToCreatePost : this.handleCreateStory }
                    showNextButton                               
                />      
                

                <FlatList
                    
                    data={this.state.friendsMessages}
                   
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.allProductsContainer}                  
                />


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
  