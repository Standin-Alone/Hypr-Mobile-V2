import React from 'react';

import { View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera';

import constants from '../../../constants';
import {styles} from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import InstaStory from 'react-native-insta-story';
import { getFileData } from '../../../utils/functions';
import Toast from 'react-native-toast-message';

export default class Camera extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        cameraType:'back',
        addType:this.props.route.params.addType
    
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
        console.warn(this.props.route.params.addType)
    }   



    handleTakeAPhoto = async ()=>{
        if (this.camera) {
            const options = { quality: 0.5, base64: true ,exif :true};
            const data = await this.camera.takePictureAsync(options);
            

            const metadata = await getFileData(data.uri);


            let fileSize = (metadata.size /1000) / 1000;

         
            if(fileSize < 5){
             
                let  fileParts = data.uri.split('/');
                let filename = fileParts[fileParts.length - 1];
                
                let parameter = {
                    image:[{fileBase64:data.base64,fileName:filename}],
                    multiple:false,
                    addType:this.state.addType
                }

                this.props.navigation.navigate(constants.ScreenNames.Social.CAPTURED_PHOTO,parameter);
            }else{
                Toast.show({
                    type:'error',
                    text1: 'Message',
                    text2:'Your  file limit is 1mb only',
                });
            }
            
          }
    }

    handleTakeFromGallery = async ()=>{
        
        let getImage = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true, 
            quality:0.5,
            selectionLimit:5           
        });

        let {assets} = getImage;
    
        let imageGallery = [];

        let countError = 0 ;
        assets.map(async (gallery)=>{

            const metadata = await getFileData(gallery.uri);


            let fileSize = (metadata.size /1024) / 1024;
            console.warn(fileSize < 1) ;
            if(fileSize < 1){
                
                
                imageGallery.push({fileBase64:gallery.base64,fileName:gallery.fileName});                        
            }else{
                countError++;
               
            }
            
        })
  

        if(countError ==  0){
            let parameter = {
                image:imageGallery,
                multiple:true,
                addType:this.state.addType
            }
            
            this.props.navigation.navigate(constants.ScreenNames.Social.CAPTURED_PHOTO,parameter);  
        }else{
            Toast.show({
                type:'error',
                text1: 'Message!',
                text2:'Your file limit is 1MB only.',
            });
        }
       
    }   

    handelSwitchCameraType = ()=>{

        this.setState({cameraType:this.state.cameraType  == 'front' ? 'back' : 'front'});
    }
    
    render(){
     
        return(
            <>

        
               <RNCamera
                     ref={ref => {
                        this.camera = ref;
                      }}
                    type={this.state.cameraType}
                    defaultTouchToFocus                    
                    style={[StyleSheet.absoluteFillObject]}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}  
                                                                           
                >
                <View style={{paddingVertical:constants.Dimensions.vh(2),paddingHorizontal:constants.Dimensions.vw(2)}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <constants.Icons.Ionicons name="close" size={40} color={constants.Colors.light}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottom}>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>                    
                        <TouchableOpacity style={{alignSelf:'center',top:constants.Dimensions.vh(5)}} onPress={this.handelSwitchCameraType}>
                            <constants.Icons.Ionicons name="camera-reverse-outline" size={40} color={constants.Colors.light}/>
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={this.handleTakeAPhoto.bind(this)}>
                            <constants.Icons.FontAwesome name="dot-circle-o" size={90} color={constants.Colors.light}/>
                        </TouchableOpacity>   
                        <TouchableOpacity style={{alignSelf:'center',top:constants.Dimensions.vh(5)}} onPress={this.handleTakeFromGallery.bind(this)}>
                            <constants.Icons.MaterialIcons name="add-photo-alternate" size={40} color={constants.Colors.light}/>
                        </TouchableOpacity>   
                    </View>
                </View>

                </RNCamera>
                                    
         

               
            </>
        ) 
    }

}
  