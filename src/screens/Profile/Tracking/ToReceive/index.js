import React from 'react';
import { View,InteractionManager,FlatList } from 'react-native';
import { getToVerifyOrders,checkOrdersStatus } from '../../../../actions/tracking';
import Components from '../../../../components';
import constants from '../../../../constants';
import { GET_SESSION } from '../../../../utils/async_storage';


export default class ToReceive extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        isReadyToRender:false,     
        orders:[],
        loadingData:true,
        refreshing:false
      };
    }

    setMyState = (value)=>this.setState(value);

    async componentDidMount(){

        let payload = {
            userId: await GET_SESSION('USER_ID'),
            condition:'SHIPPED'
        }

        checkOrdersStatus(payload,this.setMyState)
      
    }

    renderItems = ({item,index}) =>{
        console.warn(item.orderedProducts?.product_image)
        return (
            <Components.OrderCardButton
                title={item?.orderNum}     
                image={item.orderedProducts?.product_image}           
                showIcon={true}
                iconName={'clipboard-list'}
                iconSize={50}
                onPress={()=>this.props.navigation.navigate(constants.ScreenNames.Market.ORDER_STATUS,{orderInfo:item})}
            />

        )
    }

    renderEmptyComponent = ()=>(
        <Components.EmptyComponent />
    )
    
    render(){
        return(

            <>
            <View style={{flex:1,backgroundColor:constants.Colors.light}}>
                <Components.PrimaryHeader
                     title={"To Receive"}
                     onGoBack={()=>this.props.navigation.goBack()}
                />
              
                {this.state.loadingData ?(
                  <View>
                    <Components.LoadingScreen />
                    </View>
                
                ) : (
                    <>                    
                        <FlatList
                            refreshing={this.state.refreshing}
                            onRefresh={async()=>{                                
                                let payload = {
                                    userId: await GET_SESSION('USER_ID'),
                                    condition:'SHIPPED'
                                }
                                this.setState({refreshing:true});
                                checkOrdersStatus(payload,this.setMyState)
                            }}
                            data={this.state.orders}            
                            renderItem={this.renderItems}
                            ListEmptyComponent={this.renderEmptyComponent}
                        />                 
                    </>
                    
                )}
            </View>
            </>
        )
    }

}
  