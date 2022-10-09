import React from 'react';
import { View,Text,FlatList,ImageBackground,Image,TouchableOpacity} from 'react-native';
import constants from '../../../constants';
import { styles } from './styles';
import Components from '../../../components';
import { getAllFriendsPost,hypePost,getAllFriendsStories } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
import { SharedElement } from 'react-navigation-shared-element';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {     
        showFooter:true,   
        posts:[],
        stories:[],
        isLoading:true,
        newPosts:[],
        newHypeCount:0,
        userId:'',
        currentPage:0,
        refreshing:true,
     
      };
    }

    setMyState = (value)=>this.setState(value);

    handleLoadPosts = async ()=>{
   
        let parameter = {
            userId:await GET_SESSION('USER_ID'),
            previousPost:this.state.posts,
            currentPage:0,
        }
        getAllFriendsPost(parameter,this.setMyState)     
    }

    handleLoadStories = async ()=>{
                
        let parameter = {
            userId:await GET_SESSION('USER_ID'),

        }

      
        getAllFriendsStories(parameter,this.setMyState)     
    }


    async componentDidMount(){
   
        this.handleLoadPosts();
        this.handleLoadStories();
        this.setState({userId:await GET_SESSION('USER_ID')})
   

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
    renderItem = ({item})=>{
       console.warn( item.filenames[0]);
        
        return(          
            <SharedElement id={`item.${item._id}.photo`}>
                <Components.SocialPostCard
                    
                    fullName={item.full_name}
                    profilePicture={item.user_picture}
                    postImage={ item.filenames[0]}
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

    renderEmptyComponent = ()=>(


        <View>
            <Text style={styles.textEmptyComponent}>No latest posts</Text>
        </View>
        
    )
    
    handleViewStory = (item,stories)=>{
        
        this.props.navigation.navigate(constants.ScreenNames.Social.STORIES,{story:item,stories:stories})
    }
    renderStories = ({item,index})=>{        
        let filterStory =  item.files.filter((storyFilter)=>storyFilter.status == 1);
        return (            
            filterStory.length > 0 &&
                <Components.UserProfilePicture
                    profilePicture={item.user_image}
                    fullName={item.user_name}
                    onViewStory={()=>this.handleViewStory(item,this.state.stories)}
                />
        
        )
    }

    handleOpenAddStories = ()=>{
        this.props.navigation.navigate(constants.ScreenNames.Social.CAMERA,{addType:'stories'})
    }

    renderFooterComponent = () =>(

    
            this.state.showFooter ?
            <Components.FooterLoader message={"Getting more posts..."}/> 
            :

            this.state.posts.length != 0 && (
            <View > 
                <Text style={styles.emptyFooter}>No more posts...</Text>
            </View>                
            )
    )
    

    render(){
        return(
            <>  
                <Components.SocialHeader
                    onCreatePost={()=>this.props.navigation.navigate(constants.ScreenNames.Social.CAMERA,{addType:"post"})}          
                    goToMessenger={()=>this.props.navigation.navigate(constants.ScreenNames.Social.MESSENGER)}        
                    onGoBack={()=>this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: constants.ScreenNames.AppStack.PRIMARY_HOME }]
                    })}
                />
                
                {/* <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}}>                  */}
                
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.handleOpenAddStories}  style={{ padding:15 }}>
                        <constants.Icons.Ionicons 
                            name="add-circle" 
                            size={40} 
                            color={constants.Colors.primary}
                        />
                    </TouchableOpacity> 
                    <View style={{top:constants.Dimensions.vh(2)}}>

                    
                    <FlatList
                        data={this.state.stories}
           
                        horizontal={true}
                        contentContainerStyle ={{paddingRight:constants.Dimensions.vw(10)}}   
                        renderItem = {this.renderStories}   
               
                        />
                    </View>
                </View>
                

                    
                {this.state.isLoading ?
    
                        <>
                   
                    
                        <Components.PostSkeletonHolder/>

                        <Components.PostSkeletonHolder/>
                        <Components.PostSkeletonHolder/>
                        <Components.PostSkeletonHolder/>
                        <Components.PostSkeletonHolder/>
                        <Components.PostSkeletonHolder/>
                        <Components.PostSkeletonHolder/>
                        </>
                    :
                    <View style={{left:constants.Dimensions.vw(2),top:constants.Dimensions.vh(2)}}>
                        <FlatList
                            data={this.state.posts}
                            extraData={this.state.posts}
                            refreshing={this.state.refreshing}
                            onRefresh={()=>this.handleLoadPosts}
                            renderItem = {this.renderItem}   
                            contentContainerStyle ={{paddingBottom:constants.Dimensions.vh(50)}}                     
                            ListEmptyComponent={this.renderEmptyComponent}
                            ListFooterComponent={this.renderFooterComponent}
                            onEndReachedThreshold={0.1} // so when you are at 1 pixel from the bottom react run onEndReached function
                            onEndReached={ ({distanceFromEnd}) => {     
                                 
                               if (distanceFromEnd > 0   ) 
                                {                               
                                   
                                    if(this.state.posts.length == this.state.currentPage || this.state.posts.length  == 2 ){
                                        this.setState((prevState) => ({currentPage:prevState.currentPage + 2,showFooter:true}));
                                    
                            
                                        let parameter = {
                                            userId:this.state.userId,
                                            previousPost:this.state.posts,
                                            currentPage:this.state.currentPage,
                                        }
                                        getAllFriendsPost(parameter,this.setMyState)     
                                    }
                                }                              
                            }}
                            
                            />
                    </View>  
                }

                    {/* <View style={styles.createPostContainer}>
                        <View style={styles.createPostInnerContainer}>
                            <Image source={{uri:'https://www.openhost.co.za/download/bootmin/img/avatar_lg.jpg'}} style={styles.profileImage}/>
                            <TouchableOpacity style={styles.createPostButton} onPress={()=>this.props.navigation.navigate(constants.ScreenNames.Social.CREATE_POST)}>
                                <View style={styles.createPostTextContainer}>
                                    <Text>What's on your mind?</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                {/* </ImageBackground> */}
            </>
        )
    }

}
  