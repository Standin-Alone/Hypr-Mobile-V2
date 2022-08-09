import React from 'react';

import { View,FlatList, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import { comment, hypePost } from '../../../actions/social';
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
        newComments:[],
        newPosts:[]
      };
    }

        
    setMyState = (value)=>this.setState(value)

    componentDidMount(){
        
        getUserInfo(this.setMyState)

        console.warn(this.state.parameter.hypes.some(async (hypeItem)=>hypeItem.user_id == await GET_SESSION('USER_ID')))
    }
 
    
    handleComment = async  ()=>{
      
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
                profilePicture={item.profile_image}

            />
        )
    } 

    onHype = async (item)=>{

        let parameter = {
            post:item,            
            userId:await GET_SESSION('USER_ID'),    
            viewType:'Comments'        
        }

        hypePost(parameter,this.setMyState,this.props,this.state)   
        
        
    }
    render(){
     
        return(
            <>
                <Components.CommentHeader
                    hypesCount={this.state.parameter.hypes.length}       
                    onHype={()=>this.onHype(this.props.route.params)}
                    isHype={this.state.parameter.hypes.some(async (hypeItem)=>hypeItem.user_id == await GET_SESSION('USER_ID'))}
                />      

                <View>
                        <FlatList
                            data={this.state.comments}
                            extraData={this.state.newComments}
                            renderItem = {this.renderItem}   
                            contentContainerStyle ={{paddingBottom:constants.Dimensions.vh(40)}}                     
                            style={{height:constants.Dimensions.vh(165)}}
                        />
                </View>
            
                <View  style={styles.bottom}  >

                    <View style={{flex:1}}>
                    <Components.CommentInput
                        placeholder={"Write a comment"}
                        focus={this.state.focus}
                        onChangeText={(value)=>this.setState({comment:{...this.state.comment,value:value,error:false}})}                                
                        onFocus={()=>this.setState({comment:{...this.state.comment,focus:true}})}
                        onBlur={()=>this.setState({comment:{...this.state.comment,focus:false}})}
                        value={this.state.comment}
                    />             

                    <View style={{flexDirection:'row', display: this.state.comment.focus ? 'flex':'none'}}>
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
                    </View>
                </View>              
            </>
        ) 
    }

}
  