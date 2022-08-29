import React from 'react';

import { View,Image,Text,TouchableOpacity, FlatList} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import { getShipping, GET_SESSION } from '../../../utils/async_storage/index';
import {getShippingAddress, updateSelectedAddress} from '../../../actions/market';


export default class Address extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          shippingAddress:[] ,
          variant:this.props.route.params.variant,
          isLoading:false  ,
          loadingData:true,
      };
    }

     
    setMyState = (value)=>this.setState(value)




     async componentDidMount(){          
       
       getShippingAddress(this.setMyState);  
       
       this.props.navigation.addListener('focus',()=>{
        getShippingAddress(this.setMyState);  
       
       })
    }   
    
    handleSelectAddress = (item)=>{     
        let newShipping = [...this.state.shippingAddress];

        newShipping.map((shippingItem)=>{
            if(shippingItem.address == item.address){       
                shippingItem.is_selected = true                
            }else{
                shippingItem.is_selected = false
            }
        });
  
        this.setState({shippingAddress:newShipping});
    
       
    }
    handleGoToEditAddressForm = (address)=>{        
        this.props.navigation.navigate(constants.ScreenNames.Market.ADDRESS_EDIT_FORM,address);
    }
    renderAddress =  ({item,index})=>{
      

        return (<View>
                    <Components.AddressCard
                        data={item}
                        isSelected={item.is_selected}
                        onSelect = {()=>this.handleSelectAddress(item)}
                        goToEditAddress={()=>this.handleGoToEditAddressForm(item)}                                                
                    />
                </View>
        )
    }


    handleGoToAddressForm = ()=>{
        // console.warn(this.state.shippingAddress);
        this.props.navigation.navigate(constants.ScreenNames.Market.ADDRESS_FORM);
    }

    handleSaveSelectedAddress = async ()=>{
        console.warn(this.state.shippingAddress.filter(item=>item.is_selected== true)[0]);
        let payload = {     
            screenName:'address',      
            variant:this.state.variant,
            shippingAddress: this.state.shippingAddress.filter(item=>item.is_selected== true)[0],
            userId : await GET_SESSION('USER_ID')
        }

        return updateSelectedAddress(payload,this.setMyState,this.props)

    }


    renderEmptyComponent = ()=>(
        <Components.EmptyComponent />
    )
    render(){
     
        return(
            <>  
                <View style={{flex:1,backgroundColor:constants.Colors.light}}>
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
                {this.state.loadingData ?
                        <Components.LoadingScreen/>
                          :
                    <>
                        <FlatList
                                data={this.state.shippingAddress}
                                renderItem={this.renderAddress}
                                contentContainerStyle={{top:constants.Dimensions.vh(5)}}
                                ListEmptyComponent={this.renderEmptyComponent}
                                
                            />   
            
                        <View style={styles.buttonContainer}>
                                <Components.PrimaryButton                              
                                    title={"Save"}                              
                                    isLoading={this.state.isLoading}
                                    onPress={this.handleSaveSelectedAddress}
                                />
                        </View>             
                    </>
                }
                </View>
            </>
        )
    }

}
  