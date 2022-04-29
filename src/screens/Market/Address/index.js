import React from 'react';

import { View,Image,Text,TouchableOpacity, FlatList} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import { getShipping, GET_SESSION } from '../../../utils/async_storage/index';
import {getShippingAddress} from '../../../actions/market';


export default class Address extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          shippingAddress:[] ,
          isLoading:false  
      };
    }

     
    setMyState = (value)=>this.setState(value)




     componentDidMount(){          
        getShippingAddress(this.setMyState);
        
        GET_SESSION('SHIPPING_ADDRESS').then((value)=>{
            this.setState({shippingAddress:value});
        })
    }   
    

    renderAddress = async ({item,index})=>{
        console.warn('items',item)
        return (<View>
            <Components.AddressCard
                data={item}
            />
        </View>
    )}


    handleGoToAddressForm = ()=>{

        this.props.navigation.navigate(constants.ScreenNames.Market.ADDRESS_FORM);
    }

    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'Address'}
                />             

                <View style={styles.container} >                   

                    
                    <Components.PrimaryButtonOutline
                        title="Add Address"
                        showIcon={true}
                        iconName="add-circle-outline"
                        iconSize={25}
                        onPress={this.handleGoToAddressForm}
                    />

                    <FlatList
                        data={this.state.shippingAddress}
                        renderItem={this.renderAddress}
                    />                    
                </View>
            </>
        )
    }

}
  