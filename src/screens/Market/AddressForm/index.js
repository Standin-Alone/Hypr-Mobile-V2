import React from 'react';

import { View,Image,Text,TouchableOpacity, FlatList, ScrollView} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import { GET_SESSION} from '../../../utils/async_storage/index';

import { saveAddress,getState,getShippingAddress} from '../../../actions/market';

export default class AddressForm extends React.Component {
     constructor(props) {
      super(props);
      this.state = {        
          shippingAddress:GET_SESSION('shipping_address'),          
          firstName:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
        },
        lastName:{
          focus:false,
          error:false,
          errorMessage:'',
          value:''
        },        
        contact:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
        },
        country:{
            focus:false,
            error:false,
            errorMessage:'',
            value:'',
            countryName:''
        },
        city:{
            focus:false,
            error:false,
            errorMessage:'',
            value:'San jose'
            
        },
        state:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
            
        },
        address:{
            focus:false,
            error:false,
            errorMessage:'',
            value:'',
            countryName:''
        },
        zipCode:{
            focus:false,
            error:false,
            errorMessage:'',
            value:'',
            countryName:''
        },
        cities:[],
        states:[],
        isLoading:false
      };
    }


    setMyState = (value)=>this.setState(value)

    componentDidMount(){
        let shippingAddress = getShippingAddress(this.setMyState).shippingAddress;
        this.setState({shippingAddress:shippingAddress})
    }
    

    renderAddress = ({item,index})=>(
        <View>
            <Components.AddressCard
                data={item}
                iconName={"flag"}
            />

        </View>
    )


    handleSelectCountry = (value)=>{
        let selectedCountryCode = value.cca2;
        let selectedCountryName = value.name;
        
        this.setState({country:{...this.state.country,value:selectedCountryCode,countryName:selectedCountryName,error:false}})
        
        let payload = {
            countryName:selectedCountryName
        }
        return getState(payload,this.setMyState)
    }  


    handleSelectCity = (value)=>{

        let selectedCity = value[0];
  
       console.warn(selectedCity);
        this.setState({city:{...this.state.city,value:selectedCity,error:false}})
        
    }  


    handleSelectState = (value)=>{

        let selectedState = value[0];
  
  
        this.setState({state:{...this.state.state,value:selectedState,error:false}})
        
    }  


    handleSaveAddress = async  ()=>{

        console.warn(this.state.city);
        let payload = {
            userId: await GET_SESSION('USER_ID'),            
            firstName:this.state.firstName.value,
            lastName:this.state.lastName.value,
            contact:this.state.contact.value,
            zipCode:this.state.zipCode.value,
            state:this.state.state.value,
            city:this.state.city.value,            
            country:this.state.country.value,
            countryName:this.state.country.countryName,
            address:this.state.address.value,
        }
        
        return saveAddress(payload,this.setMyState,this.props)
    }
    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'Add Address'}
                />             
                <ScrollView>
                    <View style={styles.container} >                   
                        <View style={styles.form}>
                            <View>     
                                <Components.PrimaryTextInput
                                        placeholder={"First Name"}
                                        iconName="supervised-user-circle"
                                        onFocus={()=>this.setState({firstName:{...this.state.firstName,focus:true}})}
                                        onBlur={()=>this.setState({firstName:{...this.state.firstName,focus:false}})}
                                        isFocus={this.state.firstName.focus}
                                        isError={this.state.firstName.error}
                                        errorMessage={this.state.firstName.errorMessage}
                                        value={this.state.firstName.value}
                                        onChangeText={(value)=>this.setState({firstName:{...this.state.firstName,value:value,error:false}})}                                
                                />                        
                            </View>

                            <View>     
                                <Components.PrimaryTextInput
                                        placeholder={"Last Name"}
                                        iconName="supervised-user-circle"
                                        onFocus={()=>this.setState({lastName:{...this.state.lastName,focus:true}})}
                                        onBlur={()=>this.setState({lastName:{...this.state.lastName,focus:false}})}
                                        isFocus={this.state.lastName.focus}
                                        isError={this.state.lastName.error}
                                        errorMessage={this.state.lastName.errorMessage}
                                        value={this.state.lastName.value}
                                        onChangeText={(value)=>this.setState({lastName:{...this.state.lastName,value:value,error:false}})}                                
                                />                        
                            </View>
                            

                            <View>     
                                <Components.PrimaryPhoneInput 
                                    onChangeText={(value)=>this.setState({contact:{...this.state.contact,value:value,error:false}})}                                 
                                    isError={this.state.contact.error}
                                    errorMessage={this.state.contact.errorMessage}
                                    value={this.state.contact.value}
                                />                  
                            </View>

                            <View>     
                                <Components.PrimaryCountrySelect
                                        onSelectCountry={this.handleSelectCountry}
                                        value={this.state.country.value}
                                        isError={this.state.country.error}
                                        errorMessage={this.state.country.errorMessage}
                                        isFocus={this.state.country.focus}
                                        iconName="flag"
                                />                        
                            </View>


                            <View>     
                                <Components.PrimaryStateSelect
                                        onSelect={this.handleSelectState}                                    
                                        value={this.state.state.value}
                                        items={this.state.states}
                                        errorMessage={this.state.state.errorMessage}
                                        isError={this.state.state.error}
                                        isFocus={this.state.state.focus}
                                        iconName="flag"
                                />                        
                            </View>


{/* 
                            <View>     
                                <Components.PrimaryCitySelect
                                        onSelect={this.handleSelectCity}                                    
                                        value={this.state.city.value}
                                        items={this.state.cities}
                                        errorMessage={this.state.city.errorMessage}
                                        isError={this.state.city.error}
                                        isFocus={this.state.city.focus}
                                        iconName="flag"
                                />                        
                            </View> */}

                            {/* <View>     
                                <Components.PrimaryTextInput
                                        placeholder={"City"}
                                        iconName="map"
                                        onFocus={()=>this.setState({city:{...this.state.city,focus:true}})}
                                        onBlur={()=>this.setState({city:{...this.state.city,focus:false}})}
                                        isFocus={this.state.city.focus}
                                        isError={this.state.city.error}
                                        errorMessage={this.state.city.errorMessage}
                                        value={this.state.city.value}
                                        onChangeText={(value)=>this.setState({city:{...this.state.city,value:value,error:false}})}                                
                                />                        
                            </View> */}



                            <View>     
                                <Components.PrimaryTextInput
                                        placeholder={"Address"}
                                        iconName="location-on"
                                        onFocus={()=>this.setState({address:{...this.state.address,focus:true}})}
                                        onBlur={()=>this.setState({address:{...this.state.address,focus:false}})}
                                        isFocus={this.state.address.focus}
                                        isError={this.state.address.error}
                                        errorMessage={this.state.address.errorMessage}
                                        value={this.state.address.value}
                                        onChangeText={(value)=>this.setState({address:{...this.state.address,value:value,error:false}})}                                
                                        multiline
                                />                        
                            </View> 




                            <View>     
                                <Components.PrimaryTextInput
                                        placeholder={"Zip Code"}
                                        iconName="map"
                                        onFocus={()=>this.setState({zipCode:{...this.state.zipCode,focus:true}})}
                                        onBlur={()=>this.setState({zipCode:{...this.state.zipCode,focus:false}})}
                                        isFocus={this.state.zipCode.focus}
                                        isError={this.state.zipCode.error}
                                        errorMessage={this.state.zipCode.errorMessage}
                                        value={this.state.zipCode.value}
                                        onChangeText={(value)=>this.setState({zipCode:{...this.state.zipCode,value:value,error:false}})}                                
                                />                        
                            </View>


                        </View>    
                        <Components.PrimaryButton
                                title="Save"
                                moreStyle={styles.addToCartButton}
                                isLoading={this.state.isLoading}
                                onPress={this.handleSaveAddress}
                            />
                    </View>
                </ScrollView>
            </>
        )
    }

}
  