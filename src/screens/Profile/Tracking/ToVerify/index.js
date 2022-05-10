import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getToVerifyOrders,checkOrdersStatus } from '../../../../actions/tracking';
import Components from '../../../../components';
import constants from '../../../../constants';
import { GET_SESSION } from '../../../../utils/async_storage';


export default class ToVerify extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
        orders:[]
      };
    }

    setMyState = (value)=>this.setState(value);

    async componentDidMount(){

        let payload = {
            userId: await GET_SESSION('USER_ID')
        }

        // getToVerifyOrders(payload,this.setMyState);
        checkOrdersStatus(payload,this.setMyState)
        // this.props.navigation.addListener('focus',()=>{
        //     getToVerifyOrders(payload,this.setMyState);
        // })
        
    }

    renderItems = ({item,index}) =>{
        return (
            <Components.OrderCardButton
                title={item.order_number}
                showIcon={true}
                iconName={'clipboard-list'}
                iconSize={50}
                onPress={()=>this.props.navigation.navigate(item.navigateTo)}
            />

        )
    }

    
    render(){
        return(
            <>  
                <Components.PrimaryHeader
                    title={"To Verify"}
                    onGoBack={()=>this.props.navigation.goBack()}
                />
                <FlatList
                    data={this.state.orders}            
                    renderItem={this.renderItems}
                /> 
               
            </>
        )
    }

}
  