import React from 'react';
import { FlatList, View,ActivityIndicator,InteractionManager,StatusBar,Text} from 'react-native';
import Components from '../../components';
import constants from '../../constants';

import { getUserInfo,logOut} from '../../actions/auth';
import { styles } from './styles';

export default class Notification extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        userInfo:[],
        notifs:[{
            name:'John Edcel Zenarosa',
            message:`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"1914 translation by H. Rackham`,
            date:'11/03/2022',
            profile:'50ea1b4f-97a9-461e-ba0e-bf933635a04d.jpg'
        }],
        isLoadingPlaceholder:true 

     }    
     
    }
    setMyState = (value)=>this.setState(value);    

    componentDidMount(){        
        getUserInfo(this.setMyState)

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
                    />
                }
                </View>   

            </View>            
            </>
        )
    }

}
  