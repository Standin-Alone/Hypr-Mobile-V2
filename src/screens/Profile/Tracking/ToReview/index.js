import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getForReviewOrders } from '../../../../actions/tracking';
import Components from '../../../../components';
import constants from '../../../../constants';
import { GET_SESSION } from '../../../../utils/async_storage';


export default class ToReview extends React.Component {
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
            condition:'SHIPPED'
        }
        getForReviewOrders(payload,this.setMyState)
    }

    renderItems = ({item,index}) =>{
        return (
            <Components.OrderCardButton
                title={item?.order_number}     
                image={item.product_image}           
                showIcon={true}
                iconName={'clipboard-list'}
                iconSize={50}
                showReviewButton
                onReview={()=>this.props.navigation.navigate(constants.ScreenNames.Market.REVIEW_PRODUCT,{productInfo:item})}            
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
                     title={"To Review"}
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
  