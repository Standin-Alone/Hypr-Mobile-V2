import React from 'react';
import { Component } from 'react';
import { View,Text} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { getShippingAddress } from '../../../actions/market';
import Components from '../../../components';
import constants from '../../../constants';
import { GET_SESSION } from '../../../utils/async_storage';
import { calculateFreight } from '../../../utils/functions';




export default class VariantList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        params:this.props.route.params,        
        activeIndex:0,
        variantList:[],
        shippingAddress:[]
      };
    }

    setMyState = (value)=>this.setState(value)

    componentDidMount(){

        getShippingAddress(this.setMyState);

        let cleanVariantList = [];
  
        this.state.params.variantList.map((item)=>{
            cleanVariantList.push({
                variantName:item.variantNameEn,
                variantPid: item.pid,
                variantVid: item.vid,
                variantPrice: item.variantSellPrice,
                variantImage: item.variantImage,
                variantSku: item.variantSku,
            })
        })
        this.setState({variantList:cleanVariantList})        
    }



    handleViewProduct = async (variant) =>{
        
        let payload = {
            variant:variant,
            shippingAddress: this.state.shippingAddress.filter(item=>item.is_selected== true)[0],
            userId : await GET_SESSION('USER_ID')
        }

        calculateFreight(payload,this.setMyState,this.props);
        
    }

    
    renderItem = ({item,index},parallaxProps)=>{
        
        return(
            <Components.VariantCard
                data={item}
                parallaxProps={parallaxProps}    
                viewProduct={()=>this.handleViewProduct(item)}            
            />
        )
    }

    render(){
        
        return(
            <>  
                <Components.Loader isLoading={this.state.isLoading}/>   
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}
                    title="Select Variant"
                />

                <View>                                    
                    <Carousel
                    layout={"default"}                                    
                    data={this.state.variantList}
                    sliderWidth={constants.Dimensions.itemWidth + 100}
                    itemWidth={constants.Dimensions.itemWidth}                                                                                                                            
                    renderItem={this.renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) }          
                    inactiveSlideShift={0}           
                    loop={true}           
                    layoutCardOffset={9}        
                    useScrollView={true}               
                    containerCustomStyle={{ top:constants.Dimensions.vh(10),alignSelf:'center' }}
                    />
                </View>
            </>
        )
    }

}
  