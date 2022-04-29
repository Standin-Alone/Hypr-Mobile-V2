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




     async componentDidMount(){          
       
       getShippingAddress(this.setMyState);     
    }   
    

    renderAddress =  ({item,index})=>{
      
        console.warn(item)
        return (<View>
                    <Components.AddressCard
                        data={item}
                        isSelected={item.is_selected}
                    />
                </View>
        )
    }


    handleGoToAddressForm = ()=>{
        // console.warn(this.state.shippingAddress);
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

                                 
                </View>

                <FlatList
                        data={this.state.shippingAddress}
                        renderItem={this.renderAddress}
                        contentContainerStyle={{top:constants.Dimensions.vh(5)}}
                        
                    />   
            </>
        )
    }

}
  