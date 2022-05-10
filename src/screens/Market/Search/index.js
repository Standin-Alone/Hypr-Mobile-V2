import React from 'react';

import { View,Text,InteractionManager} from 'react-native';
import Components from '../../../components';
import { getProductVariants, searchProducts} from '../../../actions/market';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import constants from '../../../constants';

export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
          isReadyToRender:true,
          search:{
            focus:false,
            value:'',
         
            },
          products:[]
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
        
  
       
       InteractionManager.runAfterInteractions(()=>{
         this.setState({isReadyToRender:true})
       })
 
    }   

    handleSearchSubmit = (value)=>{
        let payload = {
            searchValue:value
        }
        return searchProducts(payload,this.setMyState)
    }

    handleSearchText = (value)=>{
   
  
        this.setState({search:{...this.state.search,value:value}})
    }

    handleAddToCart = (item)=>{
        
        let parameters = {            
            pid:item.pid,
            productName:item.productNameEn
        }    

        return getProductVariants(parameters,this.setMyState,this.props)
    }

    renderItem = ({item,index})=>{
        
        return(
            <View>
                <Components.SearchProductCard
                   productImage ={item.productImage}
                   productName  ={item.productNameEn}
                   productPrice  ={item.sellPrice}   
                   addToCart={()=>this.handleAddToCart(item)}
                    
                />
            </View>
        )
    }

    


    render(){
     
        return this.state.isReadyToRender ? (
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    showSearchText
                    onChangeSearchText={this.handleSearchText}
                    onSearchSubmit={()=>this.handleSearchSubmit(this.state.search.value)}


                      
                   onFocus={()=>this.setState({search:{...this.state.search,focus:true}})}
                   onBlur={()=>this.setState({search:{...this.state.search,focus:false}})}
                   isFocus={this.state.search.focus}
                   value={this.state.search.value}
                />      

                <FlatList
                    data={this.state.products}
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
  