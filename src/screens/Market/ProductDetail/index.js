import React from 'react';

import { View,Image,Text,TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import { GET_SESSION } from '../../../utils/async_storage';
import { getShippingAddress,addToCart } from '../../../actions/market';



export default class ProductDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        variant:this.props.route.params.variant,     
        freightCalculation:this.props.route.params.freightCalculation,   
        shippingAddress:[],
        isLoading:false
      };
    }

    setMyState = (value)=>this.setState(value)

    componentDidMount(){
        
        getShippingAddress(this.setMyState)
    }

    handleAddToWishList = ()=>{

    }

    handleAddToCart = async ()=>{
        let userId = await GET_SESSION('USER_ID');
       
        let payload = {
            variant:this.state.variant,
            userId: userId
        }

   

        return addToCart(payload,this.setMyState)

    }

    handleGoToChangeAddress = () =>{

        this.props.navigation.navigate(constants.ScreenNames.Market.ADDRESS);
    }
    
    render(){
     
        return(
            <>
                <Components.MarketHeader
                    onGoBack = {()=>this.props.navigation.goBack()}      
                    showGoback={true}                                  
                />
                <View style={styles.variantContainer}>                                                 
                    <Image source={{uri:this.state.variant.variantImage}} style={styles.variantImage} resizeMode='stretch'/>

                    <View  style={styles.variantNameContainer}>
                        <View>
                            <Text style={styles.variantName} numberOfLines={2}>
                                {this.state.variant.variantName}
                            </Text>                                   
                        </View>
                        <View style={styles.variantPriceContainer}>
                            <Text style={styles.variantPrice} numberOfLines={2}>${this.state.variant.variantPrice}</Text>
                        </View>
                    </View>
                    
                    <View  style={styles.deliveryContainer}>      
                        <View style={{flexDirection:'row',flex:1}}>
                            <View style={styles.deliveryContent}>            
                                <Text style={ styles.deliveryTitle} numberOfLines={1} ellipsizeMode='tail'>Delivery</Text>
                            </View>

                            <View style={styles.deliveryButton}>
                                <View style={styles.changeDeliveryButton}>
                                        <Components.ChangeDeliveryButton
                                            title={this.state.shippingAddress.length == 0 ? 'No delivery address...'  : this.state.shippingAddress.filter((item)=>item.is_selected==true)[0].address}
                                            onPress={this.handleGoToChangeAddress}
                                        />
                                </View>
                            </View>    
                        </View>    

                        <View style={{flexDirection:'row',flex:1}}>
                            <View style={styles.deliveryContent}>            
                                <Text style={ styles.deliveryPriceTitle} numberOfLines={1} ellipsizeMode='tail'>Delivery </Text>
                            </View>

                            <View style={styles.deliveryButton}>
                                <View style={styles.changeDeliveryButton}>
                                    <Text style={ styles.deliveryPriceTitle} numberOfLines={1} ellipsizeMode='tail'>

                                        {this.state.freightCalculation[0].logisticName}
                                    </Text> 
                                </View>
                            </View>    
                        </View>  

                        <View style={{flexDirection:'row',flex:1}}>
                            <View style={styles.deliveryContent}>            
                                <Text style={ styles.deliveryPriceTitle} numberOfLines={1} ellipsizeMode='tail'>Delivery Days</Text>
                            </View>

                            <View style={styles.deliveryButton}>
                                <View style={styles.changeDeliveryButton}>
                                    <Text style={ styles.deliveryPriceTitle} numberOfLines={1} ellipsizeMode='tail'>

                                        {this.state.freightCalculation[0].logisticAging} Days
                                    </Text> 
                                </View>
                            </View>    
                        </View>  


                        <View style={{flexDirection:'row',flex:1}}>
                            <View style={styles.deliveryContent}>            
                                <Text style={ styles.deliveryPriceTitle} numberOfLines={1} ellipsizeMode='tail'>Delivery Fee</Text>
                            </View>

                            <View style={styles.deliveryButton}>
                                <View style={styles.changeDeliveryButton}>
                                    <Text style={ styles.deliveryPriceTitle} numberOfLines={1} ellipsizeMode='tail'>
                                        ${this.state.freightCalculation[0].logisticPrice}
                                    </Text> 
                                </View>
                            </View>    
                        </View>  

                        
                    </View>
                </View>

                <View style={{flex: 1}}>
                    <View style={{position: 'absolute', left: 0, right: 0, bottom: 5,flexDirection:'row',justifyContent:'flex-end'}}>
                        <TouchableOpacity onPress={this.handleAddToWishList}  style={{  marginHorizontal:constants.Dimensions.vw(2) ,top:2 }}>
                            <constants.Icons.MaterialCommunityIcons 
                                name="cards-heart" 
                                size={40} 
                                color={constants.Colors.danger}
                            />
                        </TouchableOpacity>
                        <Components.PrimaryButton
                            title="Add To Cart"
                            moreStyle={styles.addToCartButton}
                            onPress={this.handleAddToCart}
                            isLoading={this.state.isLoading}
                        />   

                        <Components.PrimaryButton
                            title="Buy Now"
                            moreStyle={styles.buyNowButton}
                        />                    
                    </View>
                </View>
            </>
        )
    }

}
  