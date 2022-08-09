import React from 'react';

import { View,Text,ActivityIndicator,Image,FlatList} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {getProfileInfo,getAllMyPosts} from '../../../actions/social';
import { SharedElement } from 'react-navigation-shared-element';

export default class ViewProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        capturedImageBase4:this.props.route.params.image,
        parameters:this.props.route.params,
        isLoading:false,
        profileInfo:[],
        myPosts:[],
        myNewPosts:[],
        refreshing:false,
        currentPage:1
      };
    }

     
    setMyState = (value)=>this.setState(value)


    handleLoadPosts = async ()=>{
        
        let parameter = {
            userId:this.props.route.params.user_id,
            previousPost:this.state.myPosts,
            currentPage:1,
        }

        getAllMyPosts(parameter,this.setMyState)     
    }

    componentDidMount(){

        
        this.handleLoadPosts();
        let parameters = {
            userId:this.props.route.params.user_id
        }

        getProfileInfo(parameters,this.setMyState)
    }

    renderItem = ({item})=>{

     
        return(          
            <SharedElement id={`item.${item._id}.photo`}>
                <Components.SocialPostCard
                    fullName={item.full_name}
                    profilePicture={item.user_picture}
                    postImage={item.filenames[0]}
                    shortName={item.full_name.split(' ')[0]}
                    post={item.caption}
                    hypesCount={item.hypes.length}
                    isHype={item.hypes.some((hypeItem)=>hypeItem.user_id == this.state.userId)}
                    onHype={()=>this.onHype(item)}
                    onViewPost={()=>this.viewPost(item)}
                    onViewProfile={()=>this.viewProfile(item)}
                    onComment={()=>this.handleGoToComments(item)}
                />
            </SharedElement>
        )
    }


    onHype = async (item)=>{

        let parameter = {
            post:item,            
            userId:await GET_SESSION('USER_ID'),            
        }
        
        hypePost(parameter,this.setMyState,this.props,this.state)   
    }

    viewPost = (item)=>{
        this.props.navigation.navigate(constants.ScreenNames.Social.VIEW_POST,{post:item,posts:this.state.posts})
    }

    viewProfile = (item)=>{
        this.props.navigation.navigate(constants.ScreenNames.Social.VIEW_PROFILE,item)
    }

    handleGoToComments = (item)=>{
        this.props.navigation.navigate(constants.ScreenNames.Social.COMMENTS,item)
    }
    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={this.state.parameters.full_name}        
                />      

                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                    :
                <View style={{flex:1}}>                      
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginRight:constants.Dimensions.vw(30)}}>                                   
                        <Image source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.profileInfo?.profile_image}` }}  style={styles.image} />                                                                       
                        <View style={{textAlign:'center'}}>
                            <Text style={styles.textBold}> {this.state.profileInfo?.total_posts} </Text>
                            <Text style={{textAlign:'center'}}> Posts</Text>
                        </View>
                        <View style={{textAlign:'center'}}>
                            <Text style={styles.textBold}> {this.state.profileInfo?.total_friends} </Text>
                            <Text style={{textAlign:'center'}}> Friends</Text>
                        </View>
                    </View>      

                    <View style={{flexDirection:'row',justifyContent:'center',left:constants.Dimensions.vw(2),top:constants.Dimensions.vh(2)}}>    
                        <FlatList
                            data={this.state.myPosts}
                            extraData={this.state.myNewPosts}
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleLoadPosts}
                            renderItem = {this.renderItem}   
                            contentContainerStyle ={{paddingBottom:constants.Dimensions.vh(22)}}                     
                            ListEmptyComponent={this.renderEmptyComponent}
                            onEndReachedThreshold={0.1} // so when you are at 5 pixel from the bottom react run onEndReached function
                            onEndReached={async ({distanceFromEnd}) => {     
                                 
                               if (distanceFromEnd > 0   ) 
                                {                               
                                         
                                    await this.setState((prevState) => ({currentPage:prevState.currentPage + 2}));
                                
                           
                                    let parameter = {
                                        userId:await GET_SESSION('USER_ID'),
                                        previousPost:this.state.posts,
                                        currentPage:this.state.currentPage,
                                    }
                                    getAllFriendsPost(parameter,this.setMyState)     

                                }                              
                            }}
                            
                            />
                    </View>
                </View>  
                }       
            </>
        ) 
    }

}
  