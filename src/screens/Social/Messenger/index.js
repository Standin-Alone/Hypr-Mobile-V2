import React from 'react';

import { View,Text,FlatList} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { FloatingAction } from "react-native-floating-action";


export default class Messenger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        friendsMessage:[{
            username: 'John Doe',
            picture:'default-profile.png',                                                          

        }]
      };
    }

    

     
    setMyState = (value)=>this.setState(value)

    componentDidMount(){
      
    }

    renderItem = ({item,index})=>{
      
        return(
            <Components.PrimaryButtonWithPicture
                title={"User"}
                picture={`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${item.picture}`}
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
                    
                    data={this.state.friendsMessage}
                   
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
  