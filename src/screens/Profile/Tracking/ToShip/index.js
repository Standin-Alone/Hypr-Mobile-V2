import React from 'react';
import { View,InteractionManager } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getToVerifyOrders,checkOrdersStatus } from '../../../../actions/tracking';
import Components from '../../../../components';
import constants from '../../../../constants';
import { GET_SESSION } from '../../../../utils/async_storage';


export default class ToShip extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        isReadyToRender:false,     
        orders:[],
        loadingData:true
      };
    }

    setMyState = (value)=>this.setState(value);

    async componentDidMount(){

        let payload = {
            userId: await GET_SESSION('USER_ID'),
            condition:'UNSHIPPED'
        }

          
        checkOrdersStatus(payload,this.setMyState)
     
    }

    renderItems = ({item,index}) =>{

        console.warn('item',item);
        return (
            <Components.OrderCardButton
                title={item?.orderNum}                
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
                     title={"To Ship"}
                     onGoBack={()=>this.props.navigation.goBack()}
                />
              
                {this.state.loadingData ?(
                  <View>
                    <Components.LoadingScreen />
                    </View>
                
                ) : (
                    <>                    
                        <FlatList
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
  