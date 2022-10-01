import React from 'react';

import { View,Text,SafeAreaView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import { createStory } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';

export default class CapturedPhoto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        capturedImageBase4:this.props.route.params.image,
        addType:this.props.route.params.addType,
        isProgress:false,
        progressTitle:'Posting story...'
      };
    }

     
    setMyState = (value)=>this.setState(value)

    componentDidMount(){
        console.warn(this.props.route.params.addType)
    }


    handleGoToCreatePost = ()=>{
        let parameter = {
            image:this.state.capturedImageBase4,        
        }
        this.props.navigation.navigate(constants.ScreenNames.Social.CREATE_POST,parameter);
    }
    
    handleCreateStory = async ()=>{
        let parameter = {         
            userId:await GET_SESSION('USER_ID'),
            file:this.state.capturedImageBase4,     
        }
        
        createStory(parameter,this.setMyState,this.props)
    }
    
    renderItem = ({item,index})=>(
        <View  >
                <FastImage source={{uri:`data:image/jpeg;base64,${item.fileBase64}`}} 
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}/>
        </View>
    )


    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    onNext={this.state.addType == 'post' ? this.handleGoToCreatePost : this.handleCreateStory }
                    showNextButton                               
                />      
                <Components.ProgressLoadingModal
                    openModal={this.state.isProgress}
                    title={this.state.progressTitle}
                />
           

        
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.capturedImageBase4}
                    renderItem={this.renderItem}
                    sliderWidth={constants.Dimensions.vw(100)}
                    itemWidth={constants.Dimensions.vw(100)}
                    lockScrollWhileSnapping={true}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    slideStyle={{flex:1}}
                />
              
            </>
        ) 
    }

}
  