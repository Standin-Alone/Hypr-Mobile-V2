import React from 'react';
import { Component } from 'react';
import { View,Text} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';




export default class VariantList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        params:this.props.route.params,        
        activeIndex:0,
        variantList:[]
      };
    }

    componentDidMount(){
        console.warn(this.state.params.variantList);
        let cleanVariantList = [];
        this.state.params.variantList.map((item)=>{
            cleanVariantList.push({
                variantName:item.variantNameEn,
                variantPrice: item.variantSellPrice,
                variantImage: item.variantImage
            })
        })
        this.setState({variantList:cleanVariantList})        
    }

setMyState = (value)=>this.setState
    handleViewProduct = (variant) =>{
        
        let parameters = {
            variant:variant
        }

        this.props.navigation.navigate(constants.ScreenNames.Market.PRODUCT_DETAIL,parameters)
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
  