import React from 'react';

import { View,Image,Text,TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import { GET_SESSION } from '../../../utils/async_storage/model';



export default class ProductDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        variant:this.props.route.params.variant,
        

      };
    }
    componentDidMount(){
        
        
    }

    handleAddToWishList = ()=>{

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
                    <Image source={{uri:this.state.variant.variantImage}} style={styles.variantImage}/>

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
                        <View style={styles.deliveryTitleContainer}>                                                            
                            <Text style={ styles.deliveryTitle}>Delivery</Text>
                        </View>
                        <View style={{ flexDirection:'row',justifyContent:'flex-end'}}>
                            

                            <View style={styles.changeDeliveryButton}>
                                    <Components.ChangeDeliveryButton
                                        title={'No delivery address...'}
                                        onPress={this.handleGoToChangeAddress}
                                    />
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
  