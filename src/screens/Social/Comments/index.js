import React from 'react';

import { View,FlatList, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { comment } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
import { getUserInfo } from '../../../actions/auth';

export default class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        userInfo:[],
        parameter:this.props.route.params,
        comment:{
         
            focus:false,
            value:''
        },
        comments:this.props.route.params.post_comment,
        newComments:[]
      };
    }

        
    setMyState = (value)=>this.setState(value)

    componentDidMount(){
        
        getUserInfo(this.setMyState)
    }
 
    
    handleComment = async  ()=>{
        console.warn(this.state.userInfo)
        let parameter = {
            comment:this.state.comment.value,  
            postId: this.state.parameter._id,       
            userId:await GET_SESSION('USER_ID'),    
            fullName:`${this.state.userInfo?.first_name}  ${this.state.userInfo?.last_name} `  ,     
            profilePicture:this.state.userInfo?.profile_image,
       
        }
        
        return comment(parameter,this.setMyState,this.props,this.state)   
    }

    renderItem = ({item,index})=>{
        return(
            <Components.CommentCard
                comment={item.comment}
                fullName={item.comment_by_name}
            />
        )
    } 

    render(){
     
        return(
            <>
                <Components.CommentHeader
                    hypesCount={20}              
                />      

                <View>
                        <FlatList
                            data={this.state.comments}
                            extraData={this.state.newComments}
                            renderItem = {this.renderItem}   
                            contentContainerStyle ={{paddingBottom:constants.Dimensions.vh(10)}}                     
                        />
                </View>
            
                <KeyboardAvoidingView  style={styles.bottom}  >
                    <Components.CommentInput
                        placeholder={"Write a comment"}
                        focus={this.state.focus}
                        onChangeText={(value)=>this.setState({comment:{...this.state.comment,value:value,error:false}})}                                
                        onFocus={()=>this.setState({comment:{...this.state.comment,focus:true}})}
                        onBlur={()=>this.setState({comment:{...this.state.comment,focus:false}})}
                        value={this.state.comment}

                    />                    
                    <View style={{flexDirection:'row', bottom:constants.Dimensions.vh(2), display: this.state.comment.focus ? 'flex':'none'}}>
                        <View style={{left:constants.Dimensions.vw(90)}} >                        
                            <TouchableOpacity onPress={this.handleComment}>
                                    <constants.Icons.Ionicons 
                                        name="send" 
                                        size={18} 
                                        color={constants.Colors.secondary}
                                    />                     
                            </TouchableOpacity>
                        </View>
                    </View>

                </KeyboardAvoidingView>              
            </>
        ) 
    }

}
  