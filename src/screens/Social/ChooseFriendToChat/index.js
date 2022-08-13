import React from 'react';

import { View,Text,FlatList} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { FloatingAction } from "react-native-floating-action";
import { getAllMyFriends } from '../../../actions/friend';
import { GET_SESSION } from '../../../utils/async_storage';

export default class ChooseFriendToChat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        myFriends:[],
        currentPage:0
      };
    }

    
    handleLoadMyFriends = async ()=>{
        
        let parameter = {
            userId:await GET_SESSION('USER_ID'),
            previousPost:this.state.myFriends,
            currentPage:0,
        }
        getAllMyFriends(parameter,this.setMyState)     
    }
     
    setMyState = (value)=>this.setState(value)

    componentDidMount(){
        this.handleLoadMyFriends()
    }
    
    handleGoToChat = async (item)=>{

        console.warn(item)
        let parameters = {
            userId:await GET_SESSION('USER_ID'),
            friendUserId:item._id,
            username:`${item.first_name} ${item.middle_name ? item.middle_name : ''} ${item.last_name}`,
          

        }

        this.props.navigation.navigate(constants.ScreenNames.Social.CHAT,parameters)
    }

    renderItem = ({item})=>{
        return(
            <Components.PrimaryButtonWithPicture
                title={`${item.first_name} ${item.middle_name ? item.middle_name : ''} ${item.last_name}`}
                picture={`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${item.picture}`}
                onPress={()=>this.handleGoToChat(item)}
            />
        )
    }
 

    render(){
     
        return(
            <>
                <Components.MessengerHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'Select Friend To Chat'}                    
                />      
                

                <FlatList
                    
                    data={this.state.myFriends}
                   
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.allProductsContainer}                  
                />

      
              
            </>
        ) 
    }

}
  