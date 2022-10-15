import React from 'react';
import { View,FlatList, InteractionManager,Image,Text, TextInput,TouchableOpacity} from 'react-native';

import { getForReviewOrders } from '../../../actions/tracking';
import Components from '../../../components';
import constants from '../../../constants';
import { GET_SESSION } from '../../../utils/async_storage';
import {styles} from './styles';
import StarRating from 'react-native-star-rating';
import { PrimaryButton } from '../../../components/buttons';
import { openReviewCamera, openReviewVideo } from '../../../utils/functions';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import { reviewProduct } from '../../../actions/review';


export default class ReviewProduct extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        productInfo:this.props.route.params.productInfo,
        isReadyToRender:false,     
        loadingData:true,
        overAllRatingStar:5,
        uploadedImages:[],
        uploadedVideos:[],
        loadingTitle:'',
        isProgress:false,
        productReview:''
      };
    }

    setMyState = (value)=>this.setState(value);
    async componentDidMount(){

        InteractionManager.runAfterInteractions(()=>{
            this.setState({loadingData:false})
        })
        console.warn(this.state.productInfo.pid)
    }

    handleRemoveItem = (type,index)=>{
        if(type == 'video'){
            let tempVideo = this.state.uploadedVideos;
            tempVideo.splice(index,1)
        }else{
            let tempImage = this.state.uploadedImages;

            tempImage.splice(index,1)
        }
    }

    renderItem = ({item,index})=>{
        console.warn(item)
        return(
            item.mime == "video/mp4" ?

                <View style={{marginRight:constants.Dimensions.vw(4)}}>
                    <Video source={{uri: item.path}}  
                        style={styles.video}
                        posterResizeMode={"center"}                
                        allowsExternalPlayback={false}
                        resizeMode='contain'
                        onAudioFocusChanged={(event)=>{
                            console.warn('audio',event)
                        }}
                    />

                    <TouchableOpacity onPress={()=>this.handleRemoveItem('video',index)}>
                        <constants.Icons.FontAwesome5
                            name='times'
                            color={constants.Colors.light}
                        />
                    </TouchableOpacity>
                </View>
            :
            <View style={{marginRight:constants.Dimensions.vw(4)}}>

                    <FastImage source={{uri: item.path}} 
                    resizeMode={FastImage.resizeMode.contain}
                    style={styles.image}/>

                    <TouchableOpacity onPress={()=>this.handleRemoveItem('image',index)}>
                        <constants.Icons.FontAwesome5
                            name='times'
                            color={constants.Colors.light}
                        />
                    </TouchableOpacity>
            </View>
        )
    }
    handleUploadImage = ()=>{
        let parameter = '';
        openReviewCamera(parameter,this.setMyState)
    }
    handleUploadVideo = ()=>{
        let parameter = '';
        openReviewVideo(parameter,this.setMyState)
    }
    handleReview = async ()=>{
        let parameter = {
            pid:this.state.productInfo.pid,
            userId: await GET_SESSION('USER_ID'),
            rating:this.state.overAllRatingStar,
            productReview:this.state.productReview,
            uploadedImages:this.state.uploadedImages,
            uploadedVideos:this.state.uploadedVideos,
        };

    
        reviewProduct(parameter,this.setMyState,this.props)
    }

    render(){
        return(
            <>
            <View style={{flex:1,backgroundColor:constants.Colors.light}}>
                <Components.PrimaryHeader
                     title={"Write a Review"}
                     onGoBack={()=>this.props.navigation.goBack()}
                />              
                <Components.ProgressLoadingModal
                    openModal={this.state.isProgress}
                    title={this.state.loadingTitle}
                />
                {this.state.loadingData ?(
                  <View>
                    <Components.LoadingScreen />
                    </View>                
                ) : (
                    <>  
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row',left:constants.Dimensions.vw(2),width:constants.Dimensions.vw(70)}}>
                                <Image
                                    source={{uri:this.state.productInfo.product_image}}
                                    style={styles.productImage}
                                />
                                <Text numberOfLines={2} style={styles.productText}>
                                    {this.state.productInfo.product_name}
                                </Text>
                            </View>

                            <StarRating
                                disabled={false}
                                maxStars={5}
                                fullStarColor={constants.Colors.warning}
                                rating={this.state.overAllRatingStar}
                                selectedStar={(rating) =>{
                                    this.setState({overAllRatingStar:rating})
                                }}
                                starSize={constants.Dimensions.normalize(20)}
                                containerStyle={{marginHorizontal:constants.Dimensions.vw(20),right:constants.Dimensions.vw(15)}}
                            />

                            <View style={{flexDirection:'row',left:constants.Dimensions.vw(5),top:constants.Dimensions.vh(2)}}>
                                <TextInput
                                    style={styles.content}
                                    numberOfLines={5}
                                    placeholder="What's your product experience after using it?"
                                    onChangeText={(value)=>this.setState({productReview:value})}
                                />
                            </View>

                            <View style={{flexDirection:'row',left:constants.Dimensions.vw(5),top:constants.Dimensions.vh(5)}}>
                                <View style={{}}>
                                    <Components.ButtonWithIconBoxed
                                        iconName={"camera"}
                                        title="Upload Photos"
                                        onPress={this.handleUploadImage}
                                    />
                                </View>
                                <View style={{marginLeft:constants.Dimensions.vw(2)}}>
                                    <Components.ButtonWithIconBoxed
                                        iconName={"video"}
                                        title="Upload Videos"
                                        onPress={this.handleUploadVideo}
                                    />
                                </View>                                    
                            </View>
                            <View style={{flexDirection:'row',left:constants.Dimensions.vw(5),top:constants.Dimensions.vh(10)}}>
                                <FlatList
                                    data={[...this.state.uploadedImages,...this.state.uploadedVideos]}
                                    renderItem={this.renderItem}
                                    numColumns={3}
                                />
                            </View>
                            
                            <View style={styles.bottom}>
                                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                    <PrimaryButton
                                        title={"Submit"}
                                        moreStyle={{width:constants.Dimensions.vw(60)}}
                                        onPress={this.handleReview}
                                    />
                                </View>                                        
                            </View>
                        </View>                                                   
                    </>                   
                )}
            </View>
            </>
        )
    }

}
  