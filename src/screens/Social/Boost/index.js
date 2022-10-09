import React from 'react';

import { View,Text,SafeAreaView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import { boost } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';
import { FlatList } from 'react-native-gesture-handler';

export default class Boost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        params:this.props.route.params,
        isProgress:false,
        progressTitle:'Posting story...'
      };
    }    

    setMyState = (value)=>this.setState(value)

    handleBoost = async ()=>{
        let parameter = {         
            userId:await GET_SESSION('USER_ID'),
            variant:this.state.params.variant 
      
        }
        
        boost(parameter,this.setMyState,this.props)
    }
     
    render(){     
        return(
            <>
                <Components.PrimaryHeader                
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    onBoost={this.handleBoost}
                    showBoostButton                               
                />      
                <Components.ProgressLoadingModal
                    openModal={this.state.isProgress}
                    title={this.state.progressTitle}
                />
                <View style={{flex:1,zIndex:-1}}> 
                    <FastImage source={{uri:this.state.params?.image}} 
                        resizeMode={FastImage.resizeMode.center}
                        style={styles.image}/>           
                </View>                                                                                         
                <View style={styles.bottom}>
                    <View style={{flex:1,marginHorizontal:constants.Dimensions.vw(5)}}>
                        <Text style={styles.variantName} numberOfLines={2}>{this.state.params?.variant.variantName}</Text>
                    </View>
                    <View style={{flex:2,flexDirection:'row',justifyContent:'flex-end',marginHorizontal:constants.Dimensions.vw(10)}}>
                        <Text style={styles.variantPrice}>${this.state.params?.variant.variantPrice}</Text>
                    </View>                                                
                </View>
            </>
        ) 
    }

}
  