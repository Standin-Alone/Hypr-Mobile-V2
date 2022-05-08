import React from 'react';

import { View,Image,Text,TouchableOpacity, FlatList} from 'react-native';


import Components from '../../../components';
import constants from '../../../constants';
import {styles} from './styles';
import {getShippingAddress, updateSelectedAddress} from '../../../actions/market';


export default class AddressBook extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          shippingAddress:[] ,       
      };
    }

     
    setMyState = (value)=>this.setState(value)




     async componentDidMount(){          
       
       getShippingAddress(this.setMyState);     

       this.props.navigation.addListener('focus',()=>{
    
            getShippingAddress(this.setMyState);  
       })
    }   
    


    handleGoToEditAddressForm = (address)=>{        
        this.props.navigation.navigate(constants.ScreenNames.Profile.ADDRESS_EDIT_FORM,address);
    }
    
    renderAddress =  ({item,index})=>{      
        return (<View>
                    <Components.AddressCard
                        data={item}    
                        goToEditAddress={()=>this.handleGoToEditAddressForm(item)}                                                   
                    />
                </View>
        )
    }


    handleGoToAddressForm = ()=>{
        
        this.props.navigation.navigate(constants.ScreenNames.BottomTab.MARKET_HOME,{
            screen:constants.ScreenNames.Market.ADDRESS_FORM
        });
    }





    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'Address Book'}
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
  