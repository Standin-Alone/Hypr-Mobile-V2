import React from 'react';

import { View,Text,TouchableOpacity} from 'react-native';
import Components from '../../../components';
import { styles } from './styles';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import { createPost } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';


export default class CreatePost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        capturedImageBase4:this.props.route.params.image,
        caption:{
            focus:false,
            error:false,
            errorMessage:'',
            value:''
        },
      };
    }

     
    setMyState = (value)=>this.setState(value)

    handlePreview = ()=>{

        this.props.navigation.goBack()
    }

    handleCreatePost =  async ()=>{
        
        let parameter ={
            userId:await GET_SESSION('USER_ID'),
            file:this.state.capturedImageBase4,
            caption:this.state.caption.value

        }
        
        return createPost(parameter,this.setMyState,this.props)
    }

    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    title={'New Post'}
                    customStyle={styles.createPost}
                    showPostButton
                    onCreatePost={this.handleCreatePost}    
                />      

                <View style={styles.container}>
                    <View style={{flexDirection:'row'}}>                        
                        
                        <View style={{flex:0.2}}>
                            <TouchableOpacity onPress={this.handlePreview}>
                                <FastImage source={{uri:`data:image/jpeg;base64,${this.state.capturedImageBase4[0].fileBase64}`}} 
                                resizeMode={FastImage.resizeMode.cover}
                                style={styles.image}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{left:constants.Dimensions.vw(1),flex:0.75,bottom:constants.Dimensions.vh(5)}}>
                            <Components.PrimaryInputNoBorder
                                placeholder={"Write a caption..."}
                                onChangeText={(value)=>this.setState({caption:{...this.state.confirmPassword,value:value,error:false}})}                                
                                value={this.state.caption}
                            />
                        </View>
                        
                    </View>

                </View>
             
            </>
        ) 
    }

}
  