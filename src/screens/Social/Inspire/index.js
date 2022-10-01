import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import Components from '../../../components';
import { styles } from './styles';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import { createInspire } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
import Carousel from 'react-native-snap-carousel';
import { openPhotoAndVideosGallery } from '../../../utils/functions';
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
        showProgress:false
        
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
            caption:this.state.caption.value
        }
        return createInspire(parameter,this.setMyState,this.props)
    }
    renderFiles = ({item,index})=>(
        item.mime == "video/mp4" ?
        <Video source={{uri: item.path}}  
        
        />
        :
        <View >
                <FastImage source={{uri:`data:image/jpeg;base64,${item.data}`}} 
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}/>
        </View>
    )
    openGallery = ()=>{
        let parameters ={
            
        }

        openPhotoAndVideosGallery(parameters,this.setMyState,this.props)
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
                    <View style={{flexDirection:'row'}}>                        
                        <View style={{left:constants.Dimensions.vw(1),flex:0.75,bottom:constants.Dimensions.vh(1),width:constants.Dimensions.vw(100)}}>
                            <Components.PrimaryInputNoBorder
                                placeholder={"Write something or post a photo or video to inspire your pals"}
                                onChangeText={(value)=>this.setState({caption:{...this.state.confirmPassword,value:value,error:false}})}                                
                                value={this.state.caption}
                            />                          
                        </View>                        
                    </View>
                    {/* carousel */}
                    <View>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.files}
                            renderItem={this.renderFiles}
                            sliderWidth={constants.Dimensions.vw(100)}
                            itemWidth={constants.Dimensions.vw(100)}
                            lockScrollWhileSnapping={true}
                            inactiveSlideOpacity={1}
                            inactiveSlideScale={1}
                            slideStyle={{flex:1}}
                        />
                    </View>
                    <View style={{flex:0.2,flexDirection:'row'}}>
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
                    />                    
                </View>
            </>
        ) 
    }

}
  