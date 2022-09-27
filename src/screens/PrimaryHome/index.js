import React from 'react';
import { FlatList, View,Text,ActivityIndicator,ImageBackground} from 'react-native';
import Components from '../../components';
import constants from '../../constants';
import { getAllProducts,getProductVariants,getShippingAddress,getCartCount, getCart} from '../../actions/market';
import { styles } from './styles';
import { getUserInfo } from '../../actions/auth';

export default class PrimaryHome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        userInfo:[],
        isLoadingPlaceholder:true,
        isLoading:false,
        isProgress:false,
        notificationCount:0,
        products:[],
        newProducts:[],
        currentPage:1
     }    
     
    }
    setMyState = (value)=>this.setState(value);    
    componentDidMount(){        
        let parameter = {
            currentPage:1,
        }
        getAllProducts(parameter,this.setMyState)        
        getShippingAddress(this.setMyState);
        getCartCount(this.setMyState)
        getUserInfo(this.setMyState)
        this.props.navigation.addListener('focus',()=>{
            getAllProducts(parameter,this.setMyState)        
            getShippingAddress(this.setMyState);
            getCartCount(this.setMyState)
        })       
    }
    handleAddToCart = (item)=>{
        
        let parameters = {            
            pid:item.pid,
            productName:item.productNameEn
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
    loadMore = async (allProducts) => { 
            let parameter = {
                currentPage : this.state.currentPage,
                previousProductPage : this.state.products
            }
            getAllProducts(parameter,this.setMyState)  ;


    }

    renderFooter = ()=>(
        this.state.products.length == 0 ?
        null
        :
        <Components.FooterLoader/>
    )
    render(){
        
       
        return(
            <>       
             <Components.PrimaryHomeHeader
                hyprPoints={this.state.userInfo.reward >= 0  ? this.state.userInfo.reward.toFixed(2)  : 'Processing' }
                onPressHyprPoints={()=>this.props.navigation.navigate(constants.ScreenNames.Mlm.MLM)}
             />                                 
             <View style={{flex:1}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Featured Products</Text>
                </View>
     
                {this.state.isLoadingPlaceholder ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                        :
                        <FlatList
                        nestedScrollEnabled
                        keyExtractor={(item)=>item.pid}   
                        data = {this.state.products}
                        numColumns={2}
                        renderItem = {this.renderAllProducts}
                        style ={styles.allProductsContainer}                        
                        // contentContainerStyle={{}}
                        onEndReachedThreshold={0.1} // so when you are at 5 pixel from the bottom react run onEndReached function
                        onEndReached={async ({distanceFromEnd}) => {                                                             
                            
                            if (distanceFromEnd > 0 ) 
                            {   
                                
                                await this.setState( (prevState) => ({...prevState,currentPage:prevState.currentPage + 1}));
                                await this.setState( (prevState) => ({...prevState,refreshing:true}));
                                await this.loadMore();
                            }
                        }}   
                        ListFooterComponent={this.renderFooter}
                        /> 
                }                  
              
              </View>    
              <Components.PrimaryHomeFooter
                    goToShoppingCart={()=>this.props.navigation.navigate(constants.ScreenNames.Market.CART)}
                    goToSearch={()=>this.props.navigation.navigate(constants.ScreenNames.Market.SEARCH)}
                    goToWishList={()=>this.props.navigation.navigate(constants.ScreenNames.Market.WISH_LIST)}
                />     
            </>
        )
    }

}
  