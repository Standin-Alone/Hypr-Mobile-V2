import React from 'react';
import { View,Text,FlatList,ImageBackground,ActivityIndicator} from 'react-native';
import constants from '../../../constants';
import { styles } from './styles';
import Components from '../../../components';
import { getAllFriendsPost,hypePost } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
import { SharedElement } from 'react-navigation-shared-element';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
        posts:[],
        stories:[],
        isLoading:true,
        newPosts:[],
        newHypeCount:0,
        userId:'',
        refresing:false,
      };
    }

    setMyState = (value)=>this.setState(value);

    handleLoadPosts = async ()=>{
        
        let parameter = {
            userId:await GET_SESSION('USER_ID'),
            previousPost:this.state.posts,
            currentPage:1,
        }
        getAllFriendsPost(parameter,this.setMyState)     
    }
    async  componentDidMount(){

        this.handleLoadPosts();
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
        console.warn(`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${item.user_picture}`);
     
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

    renderEmptyComponent = ()=>(
        <View>
            <Text style={styles.textEmptyComponent}>No latest posts</Text>
        </View>
        
    )

    renderStories = ()=>(
        <View>
            <Text style={styles.textEmptyComponent}>No latest posts</Text>
        </View>
        
    )

    render(){
        return(
            <>  
                <Components.SocialHeader
                        onCreatePost={()=>this.props.navigation.navigate(constants.ScreenNames.Social.CAMERA)}                
                />

                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}}>                 
                 

                <FlatList                
                    data={this.state.stories}            
                    renderItem = {this.renderStories}                               
                 />

                    
                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                    :
                    <View style={{left:constants.Dimensions.vw(2),top:constants.Dimensions.vh(2)}}>
                        <FlatList
                            data={this.state.posts}
                            extraData={this.state.newPosts}
                            refreshing={this.state.refresing}
                            onRefresh={this.handleLoadPosts}
                            renderItem = {this.renderItem}   
                            contentContainerStyle ={{paddingBottom:constants.Dimensions.vh(10)}}                     
                            ListEmptyComponent={this.renderEmptyComponent}
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
                </ImageBackground>
            </>
        )
    }

}
  