import React from 'react';

import { View,Text,Image} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import { createStory } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
import { StoryContainer} from 'react-native-stories-view';
import  back from 'react-native-stories-view/src/images/back.png';
export default class SocialStories extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        stories:[],
        userInfo:this.props.route.params.story
       
      };
    }

     
    setMyState = (value)=>this.setState(value)

  componentDidMount(){
    console.warn(this.props.route.params.story.stories.map((item,index)=>(item.story_image)));
    this.setState({stories:this.props.route.params.story.stories.map((item,index)=>(item.story_image))})
  }


    render(){
     
        return(
       
          <StoryContainer
              visible={true}
              enableProgress={true}
              images={this.state.stories}
              duration={10}          
              userProfile={{
                  userImage:{uri:this.state.userInfo.user_image},
                  userName: this.state.userInfo.user_name,
                  imageArrow:back,
                  onImageClick: () => {
                    this.props.navigation.goBack()
                 },
              }}
              onComplete={()=>{ 

                  let stories = this.props.route.params.stories.filter((storyFilter)=>storyFilter._id != this.state.userInfo._id);

                  this.props.route.params.stories.map((storyItem)=>{
                    if(storyItem._id != this.props.route.params.story._id){
                      this.props.navigation.replace(constants.ScreenNames.Social.STORIES,{story:storyItem,stories:stories})
                    }
                  });
                  
              }}
              barStyle={{
                barActiveColor: constants.Colors.primary,                
          
             }}
            />
        
        ) 
    }

}
  