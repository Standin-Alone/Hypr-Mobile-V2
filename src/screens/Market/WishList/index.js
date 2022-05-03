import React from 'react';

import { View,Text,InteractionManager} from 'react-native';
import Components from '../../../components';
import { getWishList} from '../../../actions/market';
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


    async componentDidMount(){    
        getWishList(this.setMyState);
       InteractionManager.runAfterInteractions(()=>{
         this.setState({isReadyToRender:true})
         console.warn(this.state.wishList);
       })
 
    }   



    renderItem = ({item,index})=>{
        console.warn(item);
        return(
            <View>
                <Components.SearchProductCard
                   productImage ={item.product_img}
                   productName  ={item.variant_name}
                   productPrice  ={item.product_price}    
                               
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
  