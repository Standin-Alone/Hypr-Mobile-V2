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


export default class ViewPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        parameters:this.props.route.params.post,
        isHype:false,
        posts:this.props.route.params.posts
    
      };
    }

  
    setMyState = (value)=>this.setState(value)

    async componentDidMount(){
        this.setState({isHype:this.props.route.params.post.hypes.some(async (item)=>item.user_id ==  await GET_SESSION('USER_ID'))});

        console.warn('VIEW POST',this.state.parameters.filenames.map((item)=>`${constants.Directories.POSTS_PICTURE_DIRECTORY}/${item}`))
    }

    renderItem = ({item,index})=>(
    

            <FastImage source={{uri:item}} 
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image}/>      
    )


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

    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
       
                    customStyle={{backgroundColor:'black'}}                   
                />      


            <View style={styles.container}>
                <SharedElement id={`item.${this.state.parameters._id}.photo`} style={{top:constants.Dimensions.vh(5)}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.parameters.filenames.map((item)=>`${constants.Directories.POSTS_PICTURE_DIRECTORY}/${item}`)}
                        renderItem={this.renderItem}
                        sliderWidth={constants.Dimensions.vw(100)}
                        itemWidth={constants.Dimensions.vw(100)}
                        lockScrollWhileSnapping={true}
                        inactiveSlideOpacity={1}
                        inactiveSlideScale={1}
                        slideStyle={{flex:1,backgroundColor:constants.Colors.dark}}
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
  