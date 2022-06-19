import React from 'react';
import { View,Text,FlatList,ImageBackground,ActivityIndicator} from 'react-native';
import constants from '../../../constants';
import { styles } from './styles';

import Components from '../../../components';
import { getAllFriendsPost } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
        posts:[],
        isLoading:true,
        newPosts:[]
      };
    }

    setMyState = (value)=>this.setState(value);

    async  componentDidMount(){

        let parameter = {
            userId:await GET_SESSION('USER_ID'),
            previousPost:this.state.posts,
            currentPage:1,
        }
        getAllFriendsPost(parameter,this.setMyState)        

    }

    renderItem = ({item})=>{
        console.warn(item);
        return(
            
            <Components.SocialPostCard
                fullName={item.full_name}
                profilePicture={item.user_picture}
                postImage={item.post_images[0]}
                shortName={item.full_name.split(' ')[0]}
                post={item.caption}
            />
        )

    }
    render(){
        return(
            <>  
                <Components.SocialHeader
                        onCreatePost={()=>this.props.navigation.navigate(constants.ScreenNames.Social.CAMERA)}                
                />

                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}}>                 
                 
                    
                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                    :
                    <View style={{left:constants.Dimensions.vw(2),top:constants.Dimensions.vh(2)}}>
                        <FlatList
                            data={this.state.posts}
                            extraData={this.state.newPosts}
                            renderItem = {this.renderItem}   
                            contentContainerStyle ={{paddingBottom:constants.Dimensions.vh(10)}}                     
                            
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
  