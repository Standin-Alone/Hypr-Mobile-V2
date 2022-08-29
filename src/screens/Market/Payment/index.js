import React from 'react';

import { View,Text,InteractionManager} from 'react-native';
import { WebView } from 'react-native-webview';
import getBaseUrl from '../../../utils/config';
import constants from '../../../constants';
import base64 from 'react-native-base64';
import { successPayment } from '../../../actions/order';
import StripeCheckout from 'react-native-stripe-checkout-webview';


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
        

        if(navState?.title == 'Payment Success | Paypal' ){            
            
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
            {  
                this.state.parameters.paymentMethod == 'paypal' ?
                <WebView                 
                    source={{ uri:`${getBaseUrl().accesspoint}${constants.EndPoints.PAY_WITH_PAYPAL}/${base64.encode(JSON.stringify(this.props.route.params))}`}}                 
                    scalesPageToFit={true}
                    onNavigationStateChange={this.handleNavigationStateChange}
                />
                :
                <StripeCheckout
                    
                    stripePublicKey={constants.APIKeys.stripe.publicKey}   
                    checkoutSessionInput={{
                        sessionId: this.props.route.params.checkoutSessionId,                        
                    }}

                    onSuccess={({ checkoutSessionId,}) => {     
                        
                        let payload = {
                            cart:this.state.parameters.cart,
                            orderId:this.state.parameters.orderId,
                            userId:this.state.parameters.userId,
                            paymentMethod:this.state.parameters.paymentMethod,
                            url:`${getBaseUrl().accesspointPlain}/successPayment?sc_checkout=success&paymentId=${this.props.route.params.checkoutSessionId}&PayerId=${this.state.parameters.orderId}&paymentTitle=Stripe`,
                        }
                            
                        setTimeout(()=>{
                            successPayment(payload,this.setMyState,this.props);
                        },1000);
                     
                        
                    }}

                    webViewProps={{ onNavigationStateChange: this.handleNavigationStateChange() }}
                    // renderOnComplete= {()=>{
                    //     return (<View style={{backgroundColor:'transparent'}}></View>)
                    // }}
         
                />

            }                  

            </>
        ) : (

            <View>
                <Text>Loading...</Text>
            </View>
        )
        
    }

}
  