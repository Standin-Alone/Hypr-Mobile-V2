import React from 'react';

import { View,Text,InteractionManager,FlatList} from 'react-native';


import Components from '../../../components';
import constants from '../../../constants';
import { styles } from './styles';
import { getOrderedProducts } from '../../../actions/tracking';
export default class OrderStatus extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:false,   
          parameters:this.props.route.params,
          orderInfo:this.props.route.params.orderInfo,
          orderedProducts: this.props.route.params.orderInfo.productList  
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
        let payload = {
            orderNumber :this.state.parameters.orderInfo?.orderNum 
        }
        
        getOrderedProducts(payload,this.setMyState)
        console.warn(this.state.orderInfo)
        InteractionManager.runAfterInteractions(()=>{
         this.setState({isReadyToRender:true})
        })
 
    }   

    renderItem = ({item,index})=>{
      
        return(
            <Components.OrderStatusProductCard 
                image={item.product_image}
                productName={item.product_name}
                productPrice={item.product_price}
                quantity={item.quantity}
            />
        )
    }



    render(){
     
        return  (
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'Order Status'}
                />             



                {this.state.isReadyToRender == true ? (
                <View style={{flexDirection:'column',alignContent:'space-between'}}>                
                        <View style={styles.orderStatusHeader}>
                            <View style={{flexDirection:'column',left:constants.Dimensions.vw(5),  top:constants.Dimensions.vh(4),}}>
                                <Text style={styles.orderNumLabel}><constants.Icons.MaterialCommunityIcons name="clipboard-edit" size={20} color={constants.Colors.secondary}/>Order Number</Text>
                                <Text style={styles.orderNumVal}>{this.state.parameters.orderInfo?.orderNum}</Text>
                            </View>                
                        </View>         

                        <View style={[styles.orderStatusHeader,{height:constants.Dimensions.vh(80)}]}>
                            <View style={{flexDirection:'column',left:constants.Dimensions.vw(5),  top:constants.Dimensions.vh(4),}}>
                            <Text style={styles.orderLabel}>My Orders</Text>
                                <FlatList
                                    data={this.state.orderedProducts}    
                                    renderItem={this.renderItem}
                                />
                            
                            </View>                
                        </View>     

                        <View style={[styles.orderStatusHeader,{height:constants.Dimensions.vh(50)}]}>
                            <View style={{flexDirection:'column',left:constants.Dimensions.vw(5),  top:constants.Dimensions.vh(4),}}>
                                <Text style={styles.orderLabel}>Shipping Details</Text>                            
                                <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:constants.Dimensions.vw(2)}}>
                                    <Text>Name:</Text>
                                    <Text>{this.state.orderInfo.shippingCustomerName}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:constants.Dimensions.vw(2)}}>
                                    <Text>Address:</Text>
                                    <Text>{this.state.orderInfo.shippingAddress}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:constants.Dimensions.vw(2)}}>
                                    <Text>State:</Text>
                                    <Text>{this.state.orderInfo.shippingProvince}</Text>
                                </View>                              
                                <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:constants.Dimensions.vw(2)}}>
                                    <Text>Country:</Text>
                                    <Text>{this.state.orderInfo.shippingCountryCode}</Text>
                                </View>
                                
                                
                            </View>                
                        </View>      
                    </View>   )
                    :(
                        <Components.LoadingScreen/>
                    )
                }

            </>
      
        )
    }

}
  