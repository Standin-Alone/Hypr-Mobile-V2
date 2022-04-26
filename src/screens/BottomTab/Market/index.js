import React from 'react';
import { FlatList, View } from 'react-native';
import { getAllProducts } from '../../../actions/market';
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
    
    renderAllProducts = (result) => (        
            <Components.ProductCard                    
                productImage={result.item.productImage}
                productName={result.item.productNameEn}
                productPrice={result.item.sellPrice}
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
  