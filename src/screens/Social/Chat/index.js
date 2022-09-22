import React from 'react';

import { View,Text,FlatList} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';

import { GiftedChat } from 'react-native-gifted-chat';
import io from "socket.io-client/dist/socket.io";
import getBaseUrl from '../../../utils/config';
import { checkRoom, sendMessage } from '../../../actions/chat';
import { GET_SESSION } from '../../../utils/async_storage';
import { getUserInfo } from '../../../actions/auth';
import { generateUuid } from '../../../utils/functions';



const socket = io(getBaseUrl().SOCKET_IO, {
    transports: ['websocket'] // you need to explicitly tell it to use websockets
  });

export default class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {    
        userInfo:[],  
        parameters:this.props.route?.params,
        messages:[],
        socketIo:'',
        isTyping:true,
        room:''
      };
    }

    

     
    setMyState = (value)=>this.setState(value)

     componentDidMount(){
        getUserInfo(this.setMyState)

        this.setState({socketIo:socket});
        console.warn(`PROPS`,this.state.parameters)
        const mySocket = io(getBaseUrl().SOCKET_IO, {
            transports: ['websocket'] // you need to explicitly tell it to use websockets
        });

 
            mySocket.on('connect', (err)=>{
             
                checkRoom(this.props.route.params,this.setMyState,this.state,mySocket)
           
                mySocket.on('message-from-server',  async (data)=>{
                  
                    let userId  = await GET_SESSION('USER_ID');
                    this.setState({messages:GiftedChat.append(this.state.messages, ...data.message)});
                    if((data.userId == this.state.parameters.friendUserId && data.friendUserId == userId)                             
                    )
                    {
                       this.setState({messages:GiftedChat.append(this.state.messages, ...data.message)});
                           
                    }
                    // this.setState({messages:GiftedChat.append(this.state.messages, ...data.message)});
    
                   
                });
            })

       
     

    }

 
    handleSendMessage = async (message)=>{

        
        let parameters={
            userId:await GET_SESSION('USER_ID'),
            friendUserId:this.state.parameters.friendUserId,
            message:message,
            socket:this.state.socketIo,
            room: this.state.room
        }

     
        return sendMessage(parameters,this.setMyState,this.state)
        
    }

    render(){
     
        return(
            <>
                <Components.MessengerHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={this.state.parameters?.username}                    
                />      
                 <GiftedChat
                    messages={this.state.messages}    
                    onSend={(message)=>this.handleSendMessage(message)}        
                    user={{
                        _id: this.state.parameters?.userId,
                        name: `${this.state.userInfo?.first_name}  ${this.state.userInfo?.last_name} `,
                        avatar:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.userInfo?.profile_image}`,
                    }}
                    isTyping={true}
                    shouldUpdateMessage={()=>{return true}}
                    />
      
              
            </>
        ) 
    }

}
  