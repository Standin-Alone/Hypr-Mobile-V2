import React from 'react';

import { View,Text,InteractionManager} from 'react-native';
import Components from '../../../components';
import { getWishList,removeProductFromWishList} from '../../../actions/market';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import constants from '../../../constants';
export default class WishList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:true,
            wishList:[]
      };
    }

     
    setMyState = (value)=>this.setState(value)


    componentDidMount(){    
        getWishList(this.setMyState);
       InteractionManager.runAfterInteractions(()=>{
         this.setState({isReadyToRender:true})
         
       })
 
    }   


    handleRemoveProductFromWishList = async (item)=>{
        console.warn(item);
        let payload = {
            wishListId:item._id,  
            reloadWishList:()=>getWishList(this.setMyState)
        }

        return removeProductFromWishList(payload,this.setMyState,this.props)
    }

    renderItem = ({item,index})=>{
        console.warn(item);
        return(
            <View>
                <Components.SearchProductCard
                   productImage ={item.product_img}
                   productName  ={item.variant_name}
                   productPrice  ={item.product_price}    
                   onRemove={()=>this.handleRemoveProductFromWishList(item)}
                />
            </View>
        )
    }

    


    render(){
     
        return this.state.isReadyToRender ? (
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                                            
                    title={'Wish List'}
                />      

                <FlatList
                    
                    data={this.state.wishList}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.allProductsContainer}                  
                />

            </>
        ) : (

            <View>
                <Text>Loading...</Text>
            </View>
        )
        
    }

}
  