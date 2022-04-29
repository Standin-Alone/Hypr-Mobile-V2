import React from 'react';

import { View,Image,Text,TouchableOpacity, FlatList} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import { GET_SESSION } from '../../../utils/async_storage';



export default class Address extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          shippingAddress:GET_SESSION('shipping_address')    
      };
    }
    componentDidMount(){
                
    }
    

    renderAddress = ({item,index})=>(
        <View>
            <Components.AddressCard
                data={this.state.shippingAddress}
            />

        </View>
    )


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
  