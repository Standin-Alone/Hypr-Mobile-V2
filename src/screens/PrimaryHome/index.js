import React from 'react';
import { FlatList, View,Text,ActivityIndicator,Image} from 'react-native';
import Components from '../../components';
import constants from '../../constants';
import { getAllProducts,getProductVariants,getShippingAddress,getCartCount, getCart} from '../../actions/market';
import { styles } from './styles';
import { getUserInfo,logOut} from '../../actions/auth';
import SideMenu from 'react-native-side-menu-updated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CLEAR_SESSION } from '../../utils/async_storage';
import ActionButton from 'react-native-circular-action-menu';
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
        currentPage:1,
        openMenu:false
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
            productName:item.productNameEn,
            markupPrice:item.markup_price
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

    goToUserProfile = ()=>{
        this.props.navigation.navigate(constants.ScreenNames.Profile.PROFILE);
    }
    goToSocial = ()=>{
        this.props.navigation.navigate(constants.ScreenNames.Social.SOCIAL);
    }
    menu = ()=>(
        <View style={{flex:1}}>
            <View style={{flexDirection:'column'}}>
                <TouchableOpacity onPress={()=>this.goToUserProfile()}>
                    <Image source={{uri: `${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.userInfo?.profile_image}`}} style={styles.userProfile}  />
                </TouchableOpacity>
                <Text style={styles.fullName}>{`${this.state.userInfo?.first_name}  ${this.state.userInfo?.last_name}  `}</Text>
            </View>
            <View style={{position:'absolute',bottom:constants.Dimensions.vh(2),left:0,right:0}}>
                <View style={{left:constants.Dimensions.vw(17)}}>
                    <TouchableOpacity onPress={()=>logOut} style={{flexDirection:'row'}}>
                        <constants.Icons.Ionicons
                            name="log-out"
                            color={constants.Colors.danger}
                            size={constants.Dimensions.normalize(10)}
                        />
                        <Text style={styles.logOut}>
                            Log out
                        </Text>
                    </TouchableOpacity>
                </View>
              
            </View>
        </View>

    )
    render(){
        
       
        return(
            <>      
 
             <View style={{flex:1}}>
             <Components.PrimaryHomeHeader
                hyprPoints={this.state.userInfo.reward >= 0  ? this.state.userInfo.reward.toFixed(2)  : 'Processing' }
                onPressHyprPoints={()=>this.props.navigation.navigate(constants.ScreenNames.Mlm.MLM)}
                onOpenMenu={()=>{                                    
                    this.props.navigation.openDrawer()
                }}                
                // onOpenMenu ={()=>this.goToUserProfile()}
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
                </View>
                {/* Side Wheel Button */}
                <View style={styles.buttonWheelContainer}>
                    <ActionButton 
                        buttonColor="rgba(0,0,0.5,0.5)"  
                        btnOutRange="rgba(0,0,0.5,0.5)"  
                        radius={constants.Dimensions.vh(20)} 
                        icon={<constants.Icons.FontAwesome name='arrow-right' color={constants.Colors.light} 
                        style={styles.wheelMainButtonIcon} 
                        size={constants.Dimensions.normalize(10)}/>}>
                        <ActionButton.Item buttonColor={constants.Colors.gradient.secondary} title="New Task" onPress={() => console.log("notes tapped!")} size={constants.Dimensions.normalize(25)}>
                            <constants.Icons.MaterialCommunityIcons name="arrow-right" size={constants.Dimensions.normalize(10)} color={constants.Colors.light}/>
                        </ActionButton.Item>   
                        <ActionButton.Item buttonColor={constants.Colors.gradient.secondary} title="New Task" onPress={()=>this.goToSocial}  size={constants.Dimensions.normalize(25)}>
                                <constants.Icons.Foundation name="social-500px" size={constants.Dimensions.normalize(10)} color={constants.Colors.light} style={styles.middleButtonWheel}/>
                        </ActionButton.Item>   
                        <ActionButton.Item buttonColor={constants.Colors.gradient.secondary} title="New Task" onPress={() => console.log("notes tapped!")} size={constants.Dimensions.normalize(25)}>
                            <constants.Icons.FontAwesome5 name="arrow-right" style={styles.actionButtonIcon} />
                        </ActionButton.Item>                
                    </ActionButton>         
                </View>
            </>
        )
    }

}
  