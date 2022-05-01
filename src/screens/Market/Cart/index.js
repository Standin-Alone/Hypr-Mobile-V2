import React from 'react';

import { View,Image,Text,TouchableOpacity,InteractionManager, FlatList} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image'
import {styles} from './styles';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getCart } from '../../../actions/market';
export default class Cart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:false,             
          cart:[],   
          cartPerCountry:[],
          isLoading:false,
          
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
        
       getCart(this.setMyState);
       
       InteractionManager.runAfterInteractions(()=>{
         this.setState({isReadyToRender:true})

       })
       
    }   


    renderCart  = ({item,index})=>{
        return(
            <View>
               <Components.CartCard 
                    data={item}
               /> 
            </View>
        )
    }

    renderCartCountry = ({item,index})=>{
        return (<View>
                    <Components.CountryCartCard 
                        data={item}
                    >
                                          
                    </Components.CountryCartCard>
                </View>
        )
    }
   
    renderEmptyComponent = ()=>(
        <View style={{alignContent:'center',alignSelf:'center'}}>
            <MaterialIcons 
                name={'remove-shopping-cart'}
                size={400} 
                color={constants.Colors.fade}
            />
            <Text style={styles.emptyCartText} adjustsFontSizeToFit>Oops!</Text>
            <Text style={styles.emptyCartText} adjustsFontSizeToFit>Your cart is empty.</Text>
        </View>
    )

    render(){
     
        return this.state.isReadyToRender ? (
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'My Cart'}
                />             


                <FlatList
                    data={this.state.cartPerCountry}
                    renderItem={this.renderCartCountry}
                    contentContainerStyle={{top:constants.Dimensions.vh(5)}}
                    ListEmptyComponent={this.renderEmptyComponent}
                />   

           
            </>
        ) : (

            <View>
                <Text>Loading...</Text>
            </View>
        )
        
    }

}
  