import React from 'react';

import {View,Text,TouchableOpacity} from 'react-native';
import Components from '../../../components';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
import { SharedElement } from 'react-navigation-shared-element';
import constants from '../../../constants';
import { GET_SESSION } from '../../../utils/async_storage';
import { hypePost } from '../../../actions/social';
import { FlatList } from 'react-native-gesture-handler';
import Video from 'react-native-video';

export default class ViewPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        parameters:this.props.route.params.post,
        isHype:false,
        posts:this.props.route.params.posts,
        videoIndex:0,
        isShowControl:true
    
      };
    }

  
    setMyState = (value)=>this.setState(value)

    async componentDidMount(){
        let userId = await GET_SESSION('USER_ID');
      
        this.setState({isHype:this.props.route.params.post.hypes.some( (item)=>item.user_id ==  userId)});

    }

    renderItem = ({item,index})=>{
        
            console.warn( item)
        return (
        
        item.split('.')[1] == 'mp4'? 
            <Video source={{uri: `${constants.Directories.POSTS_PICTURE_DIRECTORY}/${item}`}}  
                style={styles.image}
                posterResizeMode={"center"}
                
                controls           
                paused={this.state.isShowControl && index == this.state.videoIndex ? true : false}
                allowsExternalPlayback={false}
                resizeMode='contain'
                onAudioFocusChanged={(event)=>{
                    console.warn('audio',event)
                }}
            />
        :
            <FastImage source={{uri: `${constants.Directories.POSTS_PICTURE_DIRECTORY}/${item}`}} 
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image}/>      
    )}


    onHype = async (item)=>{

        let parameter = {
            post:item,            
            userId:await GET_SESSION('USER_ID'),  
            viewType:'ViewPost'          
        }

        hypePost(parameter,this.setMyState,this.props,this.state)   

        
    }

    handleGoToComments = (item)=>{
        this.props.navigation.navigate(constants.ScreenNames.Social.COMMENTS,item)
    }
    onViewableItemsChanged = (viewableItems)=>{
        if (viewableItems && viewableItems.length > 0) {
            this.setState({ videoIndex: viewableItems[0].index });
        }
    }

    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
       
                    customStyle={{backgroundColor:'black'}}                   
                />      


            <View style={styles.container}>
                <SharedElement id={`item.${this.state.parameters._id}.photo`} style={{top:constants.Dimensions.vh(5)}}>
              

                    <FlatList
                        horizontal
                        data={this.state.parameters.filenames}
                        renderItem={this.renderItem}
                        onViewableItemsChanged={this.onViewableItemsChanged}
                        viewabilityConfig={{
                            viewAreaCoveragePercentThreshold: 90
                        }}
                    />
                </SharedElement>


              

            </View>
                
            
            <View style={styles.footer}>
                <View style={styles.mainInfo}>
                    
                    <Text style={styles.mainInfoTextBold}>{this.state.parameters?.full_name}</Text>
                    <Text style={styles.mainInfoText}>{this.state.parameters?.caption}</Text>                    

                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.mainInfoTextBold}>{this.state.parameters?.hypes.length} Hypes</Text>  
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <TouchableOpacity  style={{ padding:15 }} onPress={()=>this.onHype(this.state.parameters)}>                        
                          
                                {this.state.isHype ? 
                                    <FastImage source={constants.Images.hype} resizeMode={FastImage.resizeMode.cover} style={styles.socialMenuIcon}/>   
                                    :
                                    <FastImage source={constants.Images.unhype} resizeMode={FastImage.resizeMode.cover} style={styles.socialMenuIcon}/>                                    
                                }
                             
                    </TouchableOpacity>                
                    <TouchableOpacity style={{ padding:15 }} onPress={()=>this.handleGoToComments(this.state.parameters)}>
                        <constants.Icons.Ionicons 
                            name="chatbubble-ellipses" 
                            size={30} 
                            color={constants.Colors.secondary}
                        />
                    </TouchableOpacity>   
                </View>
            </View>
              
       
        
               
              
            </>
        ) 
    }

}
  