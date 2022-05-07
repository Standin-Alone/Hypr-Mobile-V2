import React from 'react';

import { View,Text,InteractionManager} from 'react-native';
import { WebView } from 'react-native-webview';
import getBaseUrl from '../../../utils/config';
import constants from '../../../constants';
import base64 from 'react-native-base64';
import { successPayment } from '../../../actions/order';

export default class Payment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:true,            
          parameters:this.props.route.params
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){      
        
       InteractionManager.runAfterInteractions(()=>{
         this.setState({isReadyToRender:true})
       }) 
    }   

    handleNavigationStateChange = (navState)=>{
        console.warn(navState);

        if(navState.title == 'Payment Success | Paypal'){            
            
            let payload = {
                cart:this.state.parameters.cart,
                orderId:this.state.parameters.orderId,
                userId:this.state.parameters.userId,
                paymentMethod:this.state.parameters.paymentMethod,
                url:navState.url
            }
                     
            setTimeout(()=>{
                successPayment(payload,this.setMyState,this.props);
            },1000);
         
        }
    }

    render(){
     
        return this.state.isReadyToRender ? (
            <>
                    
                <WebView                 
                    source={{ uri:`${getBaseUrl().accesspoint}${constants.EndPoints.PAY_WITH_PAYPAL}/${base64.encode(JSON.stringify(this.props.route.params))}`}}                 
                    scalesPageToFit={true}
                    onNavigationStateChange={this.handleNavigationStateChange}
                />

            </>
        ) : (

            <View>
                <Text>Loading...</Text>
            </View>
        )
        
    }

}
  