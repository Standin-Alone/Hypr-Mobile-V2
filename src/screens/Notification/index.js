import React from 'react';
import { FlatList, View,ActivityIndicator,InteractionManager,StatusBar,Text} from 'react-native';
import Components from '../../components';
import constants from '../../constants';

import { getUserInfo,logOut} from '../../actions/auth';
import { styles } from './styles';
import { getNotifications } from '../../actions/notification';

export default class Notification extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        userInfo:[],
        notifs:[],
        isLoadingPlaceholder:true 

     }    
     
    }
    setMyState = (value)=>this.setState(value);    

    componentDidMount(){        
        getUserInfo(this.setMyState)


        let payload = {
            currentPage:1,
            previousNotifs:[],
         
        }

        getNotifications(payload,this.setMyState)
        InteractionManager.runAfterInteractions(()=>{
                this.setState({isLoadingPlaceholder:false})
          })
    }

    renderNotifs = ({item,index})=>{
        return(
            <Components.NotificationCard
                fullName={item.name}
                message={item.message}
                date={item.date}
                profilePicture={item.profile}
            />
        )
    }
    renderEmpty = ()=>{ 
        return(
            <View style={{alignSelf:'center'}}>
                <Text  style={styles.emptyNotif}  allowFontScaling={false}>No Notifications.</Text>
            </View>
        )
    }
    render(){
        
       
        return(
            <>       
             <View style={{flex:1}}>
                 <StatusBar
                    animated={true}
                    backgroundColor={constants.Colors.primary} 
                    barStyle={"light-content"}               
                />  
                <View style={{ top:constants.Dimensions.vh(2) }}>     
                <View style={{left:constants.Dimensions.vw(2)}}>
                    <Text style={styles.notifTitle}>
                        Notifications    
                    </Text>               
                </View>
                
                {this.state.isLoadingPlaceholder ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                        :
                    <FlatList
                        data={this.state.notifs}
                        renderItem={this.renderNotifs}
                        contentContainerStyle={{ paddingVertical:constants.Dimensions.vh(5) }}
                        ListEmptyComponent={this.renderEmpty}
                    />
                }
                </View>   

            </View>            
            </>
        )
    }

}
  