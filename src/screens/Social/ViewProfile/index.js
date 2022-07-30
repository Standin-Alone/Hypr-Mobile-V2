import React from 'react';

import { View,Text,ActivityIndicator} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {getProfileInfo} from '../../../actions/social';
export default class ViewProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        capturedImageBase4:this.props.route.params.image,
        parameters:this.props.route.params,
        isLoading:false,
        profileInfo:[]
      };
    }

     
    setMyState = (value)=>this.setState(value)


    componentDidMount(){

        
        let parameters = {
            userId:this.props.route.params.user_id
        }

        getProfileInfo(parameters,this.setMyState)
    }


    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={this.state.parameters.full_name}        
                />      

                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                    :
                <View style={{flex:1}}>                      
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginRight:constants.Dimensions.vw(30)}}>                                   
                        <FastImage source={{ uri:`${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.profileInfo?.profile_image}` }} resizeMode={FastImage.resizeMode.center} style={styles.image} />                                                                       
                        <View style={{textAlign:'center'}}>
                            <Text style={styles.textBold}> {this.state.profileInfo?.total_posts} </Text>
                            <Text style={{textAlign:'center'}}> Posts</Text>
                        </View>
                        <View style={{textAlign:'center'}}>
                            <Text style={styles.textBold}> {this.state.profileInfo?.total_friends} </Text>
                            <Text style={{textAlign:'center'}}> Friends</Text>
                        </View>
                    </View>      
                </View>  
                }       
            </>
        ) 
    }

}
  