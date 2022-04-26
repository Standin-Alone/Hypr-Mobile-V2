import React from 'react';
import { FlatList, View } from 'react-native';
import { getAllProducts,getProductVariants} from '../../../actions/market';
import Components from '../../../components';
import { styles } from './styles';



export default class Market extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
          isLoading:false,
          products:[]
      };
    }
    
    setMyState = (value)=>this.setState(value);


    componentDidMount(){        
        getAllProducts(this.setMyState)
    }



    handleAddToCart = (item)=>{
        
        let parameters = {            
            pid:item.pid
        }    

        return getProductVariants(parameters,this.setMyState,this.props)
    }

    renderAllProducts = (result) => (        
            <Components.ProductCard                    
                productImage={result.item.productImage}
                productName={result.item.productNameEn}
                productPrice={result.item.sellPrice}
                addToCart = {()=>this.handleAddToCart(result.item)}
                
            />
    )

    render(){
        return(
            <>
                <View>
                    <Components.MarketHeader
                    />
                    <FlatList
                        numColumns={2}
                        data = {this.state.products}
                        renderItem = {this.renderAllProducts}
                        contentContainerStyle={styles.allProductsContainer}                        
                    />                
                </View>
            </>
        )
    }

}
  