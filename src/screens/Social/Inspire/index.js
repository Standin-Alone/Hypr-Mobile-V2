import React from 'react';
import { View,Text,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Components from '../../../components';
import { styles } from './styles';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import { createInspire } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
import Carousel from 'react-native-reanimated-carousel';
import { openInspirePhotoAndVideosGallery,openInspireCamera } from '../../../utils/functions';
import Video from 'react-native-video';

export default class Inspire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        parameters:this.props.route.params,
        image:this.props.route.params.image,
        caption:{
            focus:false,
            error:false,
            errorMessage:'',
            value:'',
            files:[]
        },
        isProgress:false,
        loadingTitle:'',
        showProgress:false,
        files:[],
        isShowControl:true,
        videosIndex:[],
        videoIndex:0        
        
      };
    }
    setMyState = (value)=>this.setState(value)
    handlePreview = ()=>{
        this.props.navigation.goBack()
    }
    handleCreateInspire =  async ()=>{
   
        let parameter ={
            userId:await GET_SESSION('USER_ID'),
            file:this.state.image,
            productLink:this.state.parameters?.variant,
            caption:this.state.caption.value,
            files:this.state.files
   
        }
        return createInspire(parameter,this.setMyState,this.props)
    }
    renderFiles = ({item,index})=>{
        return(
        item.mime == "video/mp4" ?
            <Video source={{uri: item.path}}  
                style={styles.video}
                posterResizeMode={"center"}
                
                controls={this.state.isShowControl && index == this.state.videoIndex ? true : false}                
                paused={this.state.isShowControl && index == this.state.videoIndex ? true : false}
                allowsExternalPlayback={false}
                resizeMode='contain'
                onAudioFocusChanged={(event)=>{
                    console.warn('audio',event)
                }}
            />
        :
        <View>
                <FastImage source={{uri:`data:image/jpeg;base64,${item.data}`}} 
                resizeMode={FastImage.resizeMode.contain}
                style={styles.carouselImage}/>
        </View>
    )}
    openGallery = ()=>{
        let parameters ='';
        openInspirePhotoAndVideosGallery(parameters,this.setMyState,this.props)
    }
    openCamera = ()=>{
        let parameters ='';
        openInspireCamera(parameters,this.setMyState,this.props)
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
                    title={'Inspire Pals'}
                    customStyle={styles.createPost}
                    showInspireButton
                    onInspirePost={this.handleCreateInspire}    
                />      
                <Components.ProgressLoadingModal
                    openModal={this.state.isProgress}
                    title={this.state.loadingTitle}
                />
                <View style={styles.container}>
                    <ScrollView>
                    <View style={{flexDirection:'row'}}>                        
                        <View style={{left:constants.Dimensions.vw(1),flex:0.75,bottom:constants.Dimensions.vh(1),width:constants.Dimensions.vw(100)}}>
                            <Components.PrimaryInputNoBorder
                                placeholder={"Write something or post a photo or video to inspire your pals"}
                                onChangeText={(value)=>this.setState({caption:{...this.state.caption,value:value,error:false}})}                                
                                value={this.state.caption}
                            />                          
                        </View>                        
                    </View>
               

                    {this.state?.files.length > 0 &&              
                    <View style={{flex:0.9,flexDirection:'row'}}>                      
                        <FlatList
                            data={this.state.files}
                            renderItem={this.renderFiles}
                            horizontal
                            onViewableItemsChanged={this.onViewableItemsChanged}
                            viewabilityConfig={{
                                viewAreaCoveragePercentThreshold: 90
                            }}
                        />
                    </View>
                    }
                    <View style={{flex:0.9,flexDirection:'row'}}>
                        <TouchableOpacity onPress={this.handlePreview}>
                                <FastImage source={{uri:this.state.parameters?.image}} 
                                resizeMode={FastImage.resizeMode.cover}
                                style={styles.image}/>
                        </TouchableOpacity>
                        <View style={{left:constants.Dimensions.vw(5)}}>
                            <Text
                                numberOfLines={2}
                                style={styles.productName}
                            >
                                {this.state.parameters?.variantName}
                            </Text>                            
                        </View>
                    </View>
                    </ScrollView>
                </View>
             
                <View style={styles.bottom}>
                    <Components.PrimaryButtonNoOutline
                       title={"Photo/Video"}
                       iconName="images"
                       iconColor={constants.Colors.green}
                       iconSize={constants.Dimensions.normalize(12)}
                       onPress={this.openGallery}
                    />
                    <Components.PrimaryButtonNoOutline
                      title={"Camera"}
                      iconName="camera"
                      iconColor={constants.Colors.info}
                      iconSize={constants.Dimensions.normalize(12)}
                      onPress={this.openCamera}
                    />                    
                </View>
            </>
        ) 
    }

}
  