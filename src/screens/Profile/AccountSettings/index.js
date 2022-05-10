import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Components from '../../../components';
import constants from '../../../constants';
import { CLEAR_SESSION } from '../../../utils/async_storage';


export default class AccountSettings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          buttons:[{
            name:'Address Book',
            icon:'location',
            navigateTo:constants.ScreenNames.Profile.ADDRESS_BOOK
          },{
            name:'Log Out',
            icon:'log-out',
            iconColor:constants.Colors.danger,
            navigateTo:{
                index: 0,
                routes: [{ name: constants.ScreenNames.AppStack.AUTHENTICATION }]
            }
          }]
      };
    }


    renderButtons = ({item,index}) =>{
        return (
            <Components.PrimaryButtonNoOutline
                title={item.name}
                showIcon={true}
                iconName={item.icon}
                iconSize={20}
                iconColor={item.iconColor}
                onPress={async ()=>{
                    
                    if(item.name == 'Log Out'){
                        await CLEAR_SESSION();
                        this.props.navigation.reset(item.navigateTo)
                    }else{
                        this.props.navigation.navigate(item.navigateTo)
                    }
                    
                
                }}
            />

        )
    }
    render(){
        return(
            <>  
                <Components.PrimaryHeader
                    title={"Account Settings"}
                    onGoBack={()=>this.props.navigation.goBack()}
                />

                <FlatList
                    data={this.state.buttons}            
                    renderItem={this.renderButtons}
                /> 
               
            </>
        )
    }

}
  