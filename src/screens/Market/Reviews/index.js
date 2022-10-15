import React from 'react';

import { View,Image,Text,TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import { GET_SESSION } from '../../../utils/async_storage';
import { getReviewCount,addToCart,addToWishList,buyNow,getProductReviews} from '../../../actions/market';
import Toast from 'react-native-toast-message';
import StarRating from 'react-native-star-rating';

export default class Reviews extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        variant:this.props.route.params.variant,     
        freightCalculation:this.props.route.params.freightCalculation,   
        notificationCount:0,
        productReviews:[],
        wishList:[],
        isLoading:false,
        isOpenShareModal:false,
        reviewCount:0,
        overAllRatingStar:5
      };
    }

    setMyState = (value)=>this.setState(value)

    

    componentDidMount(){
           
   
        this.props.navigation.addListener('focus',()=>{
            getProductReviews(this.props.route.params.variant,this.setMyState)
            getReviewCount(this.props.route.params.variant,this.setMyState)     
        })
          
    }



    handleAddToWishList = async ()=>{
        

        let userId = await GET_SESSION('USER_ID');
                
        let payload = {
            variant:this.state.variant,
            userId: userId,            
        }

        return addToWishList(payload,this.setMyState)
    }

    handleAddToCart = async ()=>{
        let userId = await GET_SESSION('USER_ID');
        
        if(this.state.shippingAddress.length != 0){
            
            let payload = {
                variant:this.state.variant,
                userId: userId,
                shippingAddress:this.state.shippingAddress.filter((item)=>item.is_selected==true)[0],
                freightCalculation:this.state.freightCalculation
            }
            return addToCart(payload,this.setMyState)
        }else{
            Toast.show({
                type:'info',
                text1: 'Message',
                text2: 'Please set your address first.',
                position:'top'
            });
        }
    }

    handleBuyNow = async ()=>{
        let userId = await GET_SESSION('USER_ID');        
        if(this.state.shippingAddress.length != 0){
            
            let payload = {
                variant:this.state.variant,
                userId: userId,
                shippingAddress:this.state.shippingAddress.filter((item)=>item.is_selected==true)[0],
                freightCalculation:this.state.freightCalculation
            }
            return buyNow(payload,this.setMyState,this.props)
        }else{
            Toast.show({
                type:'info',
                text1: 'Message',
                text2: 'Please set your address first.',
                position:'top'
            });
        }
    }
    handleGoToInspire = ()=>{
        let parameters={
            image:this.state.variant.variantImage,
            variantName:this.state.variant.variantName,
            variant:this.state.variant
        }
        this.props.navigation.navigate(constants.ScreenNames.Social.INSPIRE,parameters)
    }
    handleGoToBoost = ()=>{
        let parameters={
            image:this.state.variant.variantImage,
            variantName:this.state.variant.variantName,
            variant:this.state.variant
        }
        this.props.navigation.navigate(constants.ScreenNames.Social.BOOST,parameters)
    }
    handleGoToChangeAddress = () =>{
        this.props.navigation.navigate(constants.ScreenNames.Market.ADDRESS,{variant:this.state.variant,reCalculateFreight : this.handleUpdateStateFromChangeAddress.bind(this)});
    }
    handleOpenShareModal = ()=>{
       this.setState((prev)=>({isOpenShareModal:prev.isOpenShareModal ? false : true }))
    }

    render(){
     
        return(
            <>
                <Components.MarketHeader
                    onGoBack = {()=>this.props.navigation.goBack()}      
                    goToShoppingCart = {()=>this.props.navigation.navigate(constants.ScreenNames.Market.CART)}                         
                    showGoback={true}                                                      
                    goToWishList={()=>this.props.navigation.navigate(constants.ScreenNames.Market.WISH_LIST)}
                    isNotificationCount
                    notificationCount={this.state.notificationCount}
                />

                <Components.DraggableModal
                    isOpen={this.state.isOpenShareModal}
                    onDismiss={()=> this.setState((prev)=>({isOpenShareModal:false }))}
                    height={constants.Dimensions.vh(150)}
                    content={()=>(
                        <View style={{flex:1}}>
                            <View>
                            <Image 
                                source={{uri:this.state.variant.variantImage}} 
                                style={styles.shareVariantImage} 
                                resizeMode='contain'
                                />

                            </View>
                            <View style={{left:constants.Dimensions.vw(2)}}>
                                 <Text style={styles.shareVariantName} numberOfLines={2}>
                                    {this.state.variant.variantName}
                                </Text>                                   
                            </View>
                            <View style={{left:constants.Dimensions.vw(2)}}>
                                    <Text style={styles.variantPrice} numberOfLines={2}>
                                        ${this.state.variant.variantPrice}
                                    </Text>      
                            </View>
                            <View style={{top:constants.Dimensions.vw(2)}}>
                                <Text style={styles.shareProductText}>
                                    Share this product with pals!
                                </Text>
                            </View>

                            <View style={{top:constants.Dimensions.vw(5)}}>
                            <Components.PrimaryButtonNoOutline
                                    title={"Nspire"}
                                    showIcon
                                    iconPackageName={"Foundation"}
                                    iconSize={constants.Dimensions.normalize(12)}
                                    iconName={"lightbulb"}
                                    onPress={this.handleGoToInspire}
                                />
                                <Components.PrimaryButtonNoOutline
                                    title={"Boost"}
                                    showIcon
                                    iconSize={constants.Dimensions.normalize(12)}
                                    iconName={"rocket"}
                                    onPress={this.handleGoToBoost}
                                />
                            </View>
                        </View>
                    )}
                />

             
                <View style={{flex: 1}}>
                    <View style={styles.summaryReview}>
                        <Text style={styles.overAllRatingStar}>{this.state.overAllRatingStar}/5</Text>
                        <StarRating
                                disabled={false}
                                maxStars={5}
                                fullStarColor={constants.Colors.warning}
                                rating={this.state.overAllRatingStar}
                            
                                starSize={constants.Dimensions.normalize(10)}
                                containerStyle={{marginHorizontal:constants.Dimensions.vw(10),right:constants.Dimensions.vw(28)}}
                            />
                        <Text>{this.state.reviewCount} Reviews</Text>
                    </View>


                    <View style={{position: 'absolute', left: 0, right: 0, bottom: 5,flexDirection:'row',justifyContent:'flex-end'}}>
                        <TouchableOpacity onPress={this.handleAddToWishList}  style={{top:constants.Dimensions.vw(2),right:constants.Dimensions.vw(10)}}>
                            <constants.Icons.MaterialCommunityIcons 
                                name={ this.state.wishList.filter((item)=>item.variant_id == this.state.variant.variantVid).length != 0 ? 'heart': 'heart-outline'} 
                                size={constants.Dimensions.normalize(30)} 
                                color={constants.Colors.danger}                               
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.handleOpenShareModal}    style={{top:constants.Dimensions.vw(2),right:constants.Dimensions.vw(6)}} >
                            <constants.Icons.FontAwesome
                                name="share-square-o" 
                                size={constants.Dimensions.normalize(30)} 
                                color={constants.Colors.primary}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.handleAddToCart}    style={{top:constants.Dimensions.vw(1),right:constants.Dimensions.vw(3) }} >
                            <constants.Icons.FontAwesome5 
                                name="cart-plus" 
                                size={constants.Dimensions.normalize(30)} 
                                color={constants.Colors.primary}
                            />
                        </TouchableOpacity>

                        <Components.PrimaryButton
                            title="Buy Now"
                            moreStyle={styles.buyNowButton}
                            onPress={this.handleBuyNow}
                        />                    
                    </View>
                </View>
            </>
        )
    }

}
  