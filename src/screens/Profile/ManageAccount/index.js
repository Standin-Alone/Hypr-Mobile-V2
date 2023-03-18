import React from 'react';
import { View,TouchableOpacity,Image,Text, ScrollView} from 'react-native';
import { getUserInfo, getUserProfileInfo } from '../../../actions/auth';
import Components from '../../../components';
import constants from '../../../constants';
import { CLEAR_SESSION } from '../../../utils/async_storage';
import { styles } from './styles';
import moment from 'moment';
import { saveProfileChanges } from '../../../actions/profile';
import PhoneInput from 'react-native-phone-number-input';
export default class ManageAccount extends React.Component {


    constructor(props) {
      super(props);
      this.state = {        
            userInfo:[],
            isLoading:true,
            isSaving:false,
            firstName:{
                focus:false,
                error:false,
                errorMessage:'',
                value:''
            },
            lastName:{
                focus:false,
                error:false,
                errorMessage:'',
                value:''
            },
            birthday:{
                focus:false,
                error:false,
                errorMessage:'',
                value:'',
                openDatePicker:false
            },
            email:{
                focus:false,
                error:false,
                errorMessage:'',
                value:''
            },
            contactNumber:{
                focus:false,
                error:false,
                errorMessage:'',
                value:'',
                phoneCode:''
            }
           
      };    
    }

    setMyState = (value)=>this.setState(value)

    componentDidMount(){   
        getUserProfileInfo(this.setMyState,this.state)
    }

    openUploadSelection = (type)=>{
        
        this.setState({showSelection:true,changeImageType:type});
    }

    handleSaveChanges = ()=>{      
        let payload = {
            firstName:this.state.firstName.value,
            lastName:this.state.lastName.value,
            email:this.state.email.value,
            contact:this.state.contactNumber.value,            
            birthday:this.state.birthday.value,            
        }
        
        saveProfileChanges(payload,this.setMyState,this.state,this.props)
    }

    render(){
        return(
            <>  
                <Components.PrimaryHeader
                    title={"Manage Account"}
                    onGoBack={()=>this.props.navigation.goBack()}
                />

                {this.state.isLoading ? 
                    <View style={{flex:1}}>
                        <Components.UpdateProfileSkeletonHolder/>
                    </View>
                :
                    <ScrollView>
                        <View>
                            <View style={styles.profileImageContainer}>
                                <TouchableOpacity onPress={()=>this.openUploadSelection('profile')}  >                            
                                    <Image source={{uri: `${constants.Directories.PROFILE_PICTURE_DIRECTORY}/${this.state.userInfo?.profile_image}`}} style={styles.userProfile}  />
                                        <constants.Icons.FontAwesome5 name="camera" size={25} color={constants.Colors.primary} style={styles.cameraIcon} allowFontScaling={false}/>
                                </TouchableOpacity>
                            </View>
                        </View>                
                        <View style={styles.accountInfoContainer}>
                            <View>
                                <Text allowFontScaling={false}>First Name</Text>
                                <Components.PrimaryTextInput
                                        placeholder={"First Name"}
                                        iconName="email"
                                        onFocus={()=>this.setState({firstName:{...this.state.firstName,focus:true}})}
                                        onBlur={()=>this.setState({firstName:{...this.state.firstName,focus:false}})}
                                        isFocus={this.state.firstName.focus}
                                        isError={this.state.firstName.error}
                                        errorMessage={this.state.firstName.errorMessage}
                                        value={this.state.firstName.value}
                                        onChangeText={(value)=>this.setState({firstName:{...this.state.firstName,value:value,error:false}})}                                
                                />    
                            </View>
                            <View>
                                <Text allowFontScaling={false}>Last Name</Text>
                                <Components.PrimaryTextInput
                                        placeholder={"Last Name"}
                                        iconName="email"
                                        onFocus={()=>this.setState({lastName:{...this.state.lastName,focus:true}})}
                                        onBlur={()=>this.setState({lastName:{...this.state.lastName,focus:false}})}
                                        isFocus={this.state.lastName.focus}
                                        isError={this.state.lastName.error}
                                        errorMessage={this.state.lastName.errorMessage}
                                        value={this.state.lastName.value}
                                        onChangeText={(value)=>this.setState({lastName:{...this.state.lastName,value:value,error:false}})}                                
                                />      
                            </View>
                            <View>
                                <Text allowFontScaling={false}>Birthday</Text>
                                <Components.PrimaryTextInput
                                        placeholder={"Birthday"}
                                        iconName="cake"
                                        onFocus={()=>this.setState({birthday:{...this.state.birthday,focus:true}})}
                                        onBlur={()=>this.setState({birthday:{...this.state.birthday,focus:false}})}
                                        isFocus={this.state.birthday.focus}
                                        isError={this.state.birthday.error}
                                        errorMessage={this.state.birthday.errorMessage}                                    
                                        value={this.state.birthday.value}
                                        onChangeDate={(setValue,value)=>{this.setState({birthday:{...this.state.birthday,value:moment(value).format('MM-DD-YYYY'),error:false,openDatePicker:false}})}}                                    
                                        openDatePicker={this.state.birthday.openDatePicker}
                                        onPressIn={()=>this.setState({birthday:{...this.state.birthday,openDatePicker:this.state.birthday.openDatePicker ? false : true }})}
                                />    
                            </View>
                            <View>
                                <Text allowFontScaling={false}>Email</Text>
                                <Components.PrimaryTextInput
                                        placeholder={"example@gmail.com"}
                                        iconName="email"
                                        onFocus={()=>this.setState({email:{...this.state.email,focus:true}})}
                                        onBlur={()=>this.setState({email:{...this.state.email,focus:false}})}
                                        isFocus={this.state.email.focus}
                                        isError={this.state.email.error}
                                        errorMessage={this.state.email.errorMessage}
                                        value={this.state.email.value}
                                        onChangeText={(value)=>this.setState({email:{...this.state.email,value:value,error:false}})}                                
                                />      
                            </View>                    
                            <View>
                                <Text allowFontScaling={false}>Contact Number</Text>                             
                                <Components.PrimaryPhoneInput   
                                    onChangeText={(value)=>this.setState({contactNumber:{...this.state.contactNumber,value:value,error:false}})}                                 
                                    isError={this.state.contactNumber.error}
                                    defaultCode={this.state.contactNumber?.phoneCode}
                                    errorMessage={this.state.contactNumber.errorMessage}
                                    value={this.state.contactNumber.value}
                                    textInputProps={{value:this.state.contactNumber.value}}
                                />                                         
                            </View>
                        </View>
                        <View style={styles.saveButtonContainer}>
                            <Components.PrimaryButton
                                title={"Save"}
                                isLoading={this.state.isSaving}                            
                                onPress={this.handleSaveChanges}
                            />
                        </View>
                    </ScrollView>
                }
               
            </>
        )
    }

}
  