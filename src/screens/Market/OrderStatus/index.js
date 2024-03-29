import React from 'react';

import { View,Text,InteractionManager,FlatList} from 'react-native';


import Components from '../../../components';
import constants from '../../../constants';
import { styles } from './styles';
import { getOrderedProducts,getTrackOrder,orderReceived } from '../../../actions/tracking';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DraggablePanel from 'react-native-draggable-panel';
import Timeline from 'react-native-timeline-flatlist';
import { GET_SESSION } from '../../../utils/async_storage';
const data = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ]
export default class OrderStatus extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:false,   
          parameters:this.props.route.params,
          orderInfo:this.props.route.params.orderInfo,
          orderedProducts: this.props.route.params.orderInfo.productList,
          openTrackingPanel:false,
          isTracking:false,
          tracking:[],
          routes:[],
          progressTitle:""
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
        let payload = {
            orderNumber :this.state.parameters.orderInfo?.orderNum 
        }
     

        getOrderedProducts(payload,this.setMyState)
   
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
    handleOpenTracking =async ()=>{       
        let payload = {
            trackNumber:this.state.orderInfo.trackNumber,
            orderNumber :this.state.parameters.orderInfo?.orderNum,
            userId: await GET_SESSION('USER_ID')
        }
        getTrackOrder(payload,this.setMyState)
    }
    handleOrderReceived =  async ()=>{
        let payload = {
            orderNumber :this.state.parameters.orderInfo?.orderNum,
            userId: await GET_SESSION('USER_ID'),
            orderedProducts:this.state.orderedProducts
        }
      
        orderReceived(payload,this.setMyState,this.props)
    }
    render(){
     
        return  (
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'Order Status'}
                />             

                <Components.ProgressLoadingModal
                    openModal={this.state.isTracking}
                    title={this.state.progressTitle}
                />

                {this.state.isReadyToRender == true ? (
                <View style={{flexDirection:'column',alignContent:'space-between'}}>                
                        <View style={styles.orderStatusHeader}>
                            <View>
                                <View style={{flexDirection:'column',left:constants.Dimensions.vw(5),  top:constants.Dimensions.vh(4),}}>
                                    <Text style={styles.orderNumLabel}><constants.Icons.MaterialCommunityIcons name="clipboard-edit" size={20} color={constants.Colors.secondary}/>Order Number</Text>
                                    <Text style={styles.orderNumVal}>{this.state.parameters.orderInfo?.orderNum}</Text>
                                </View>                
                                <View style={{flexDirection:'row',left:constants.Dimensions.vw(5), top:constants.Dimensions.vh(4)}}>
                                    <Text>Order Date: </Text>
                                    <Text> {this.state.parameters.orderInfo?.createDate}</Text>
                                </View>
                            </View>
                            <View>
                                {this.state.orderInfo.trackNumber && 
                                   <Components.PrimaryButtonOutline
                                    title={`Track ${this.state.orderInfo.trackNumber}`}
                                     onPress={this.handleOpenTracking}
                                     moreStyle={{width:constants.Dimensions.vw(43),left:constants.Dimensions.vw(2)}}
                                     moreTextStyle={{fontSize:constants.Dimensions.normalize(6),top:constants.Dimensions.vh(1)}}
                                     showIcon
                                     iconName={"location-pin"}
                                     iconSize={constants.Dimensions.normalize(7)}
                                    />

                                }
                            </View>
                        </View>         

                        <View style={[styles.orderStatusHeader,{height:constants.Dimensions.vh(70)}]}>
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
                                    <Text > {this.state.orderInfo.shippingCustomerName}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:constants.Dimensions.vw(2)}}>
                                    <Text>Address:</Text>
                                    <Text numberOfLines={3} style={{width:constants.Dimensions.vw(80)}}> {this.state.orderInfo.shippingAddress}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:constants.Dimensions.vw(2)}}>
                                    <Text>State:</Text>
                                    <Text> {this.state.orderInfo.shippingProvince}</Text>
                                </View>                              
                                <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:constants.Dimensions.vw(2)}}>
                                    <Text>Country:</Text>
                                    <Text> {this.state.orderInfo.shippingCountryCode}</Text>
                                </View>
                                
                                
                            </View>                
                        </View>      

                        {this.state.orderInfo.trackNumber && this.state.orderInfo.order_status != 'Received'  && 
                           (
                            <>
                        
                           <View style={styles.orderReceivedContainer}>
                                <Components.PrimaryButton
                                    title={`Order Received`}      
                                    moreStyle={styles.orderReceivedBtn}  
                                    onPress={this.handleOrderReceived}                                                     
                                    /> 
                            </View>   
                            </>
                   
                           )
                        }
                      

                    <DraggablePanel
                        visible={this.state.openTrackingPanel}
                        initialHeight={constants.Dimensions.vh(250)}
                      >
                        <View>                                                    
                            <Text style={styles.trackingStatusLabel}>Tracking Status</Text>
                        </View>
                        <View style={{marginVertical:constants.Dimensions.vh(5),marginHorizontal:constants.Dimensions.vw(2)}}>
                            <View style={{flexDirection:'row'}}>
                                <Text>Logistic:</Text>
                                <Text> {this.state.trackingInfo?.logisticName}</Text>
                            </View>
                        </View>
                        <Timeline data={this.state.routes} 
                            listViewStyle={{marginHorizontal:constants.Dimensions.vw(2)}}
                            timeStyle={{backgroundColor:constants.Colors.warning,borderRadius:20,paddingHorizontal:constants.Dimensions.vw(2),paddingVertical:constants.Dimensions.vh(2)}}                            
                        />
                    </DraggablePanel>
                    </View>   )
                    :(
                        <Components.LoadingScreen/>
                    )
                }

            </>
      
        )
    }

}
  