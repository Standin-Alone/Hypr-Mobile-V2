import React from 'react';
import { View,Text,FlatList,ImageBackground,ActivityIndicator} from 'react-native';
import constants from '../../../constants';
import { styles } from './styles';

import Components from '../../../components';
import { getAllFriendsPost } from '../../../actions/social';
export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
        posts:[],
        isLoading:true
      };
    }

    setMyState = (value)=>this.setState(value);

    componentDidMount(){

        let parameter = {
            currentPage:1,
        }
        getAllFriendsPost(parameter,this.setMyState)        

    }

    renderItem = ({item})=>{

        return(
            
            <Components.SocialPostCard/>
        )

    }
    render(){
        return(
            <>  
                <Components.SocialHeader
                />

                <ImageBackground source={constants.Images.socialPageBackground} style={{flex:1}}>                 
                 
                    
                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                    :
                    <FlatList
                        data={this.state.post}
                        renderItem = {this.renderItem}
                    />
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
  