import React from 'react';
import { FlatList, View,Text,ActivityIndicator,Image,StatusBar,TouchableOpacity} from 'react-native'; 
import { getPartners } from '../../actions/partners';
import constants from '../../constants';
import { AuthContext } from '../../contexts/AuthContexts';
import { styles } from './styles';

export default class MainHome extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
      super(props);
      this.state = {   
        partners:[],
        context: AuthContext,
        isLoading:true
       
     }    
    }


    setMyState = (value)=>this.setState(value);    

    componentDidMount(){        
        const user = this.context;
        console.warn(user)
        getPartners(this.setMyState);
    }

    handleSelectPartner = (item)=>{
        let payload ={
            selectedPartnerId: item._id,
            selectedPartnerName: item.partner_name
        }
        this.props.navigation.navigate(constants.ScreenNames.AppStack.PRIMARY_HOME,payload)
    }

    renderPartners = ({item, index})=>{
        return(
            <>
                <TouchableOpacity style={styles.partnerButton} onPress={()=>this.handleSelectPartner(item)} disabled={item.status == 1 ? false :true}>      
                    <View style={styles.partnerButtonContent}>
                        <Image
                            source={{uri:`${constants.Directories.PARTNERS_LOGO_DIRECTORY}/${item.partner_logo}`}}
                            style={styles.partnerButtonImage}
                        />
                        
                        <Text style={styles.partnerButtonLabel} allowFontScaling={false}>
                            
                            {item.status == 1  ? 
                                    item.partner_name
                                :
                                    `${item.partner_name} (Coming Soon)`
                            }
                        </Text>
                    </View>          
                </TouchableOpacity>
            </>
        )
    }
    
    render(){
        return(
            <>      
                <View style={{flex:1}}>    
                    <View>
                        <View style={{left:constants.Dimensions.vw(2)}}>
                            <Text style={styles.partnerTitle}>Select Shop</Text>
                        </View>

                        {this.state.isLoading ?
                            <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                            :   
                            <FlatList
                                data={this.state.partners}
                                renderItem={this.renderPartners}
                            />
                        }

                    </View>
                </View>
            </>
        )
    }

}
  