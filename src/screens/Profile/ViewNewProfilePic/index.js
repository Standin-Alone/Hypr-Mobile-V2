import React from 'react';

import { View,Text,SafeAreaView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import { changeProfilePicture } from '../../../actions/profile';
import { GET_SESSION } from '../../../utils/async_storage';


export default class ViewNewProfilePic extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        capturedImageBase4:this.props.route.params.image,
        imageInfo:this.props.route.params.imageInfo,
        isLoading:false,
        title:'Processing'
      };
    }

     
    setMyState = (value)=>this.setState(value)

    


    
    renderItem = ({item,index})=>(
        <View  >
                <FastImage source={{uri:`data:image/jpeg;base64,${item.fileBase64}`}} 
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}/>
        </View>
    )


    componentDidMount(){
        console.warn(this.props.route.params.imageInfo)
    }
    
    handleChangeProfilePicture = async ()=>{

        let parameters = {
            imageInfo:this.state.imageInfo,
            userId: await GET_SESSION('USER_ID'),
            changeImageType:this.props.route.params.changeImageType
        }
       
        changeProfilePicture(parameters,this.setMyState,this.props)
    }

    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                                            
                    onSave={this.handleChangeProfilePicture}
                    showSaveButton                            
                />      

                <Components.ProgressLoadingModal
                    openModal={this.state.isLoading}
                    title={this.state.title}
                />

                        
                <FastImage source={{uri: `data:image/jpeg;base64,${this.state.capturedImageBase4}`}} style={styles.image} resizeMode={FastImage.resizeMode.cover}/>
            </>
        ) 
    }

}
  