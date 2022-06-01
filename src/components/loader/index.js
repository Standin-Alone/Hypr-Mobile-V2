
import React from "react";
import { View,SafeAreaView,ActivityIndicator,Text} from "react-native";
import { styles } from "./styles";
import constants from "../../constants";
import Spinner from 'react-native-spinkit';
import LottieView from 'lottie-react-native';


export const Loader = ({
    isLoading
}) => {
    if (isLoading) {
        return (
            <SafeAreaView style={[styles.overlay, { alignItems: 'center', justifyContent: 'center' }]}>
                <View style={{ borderRadius: 10, backgroundColor: 'transparent', paddingHorizontal: 25, paddingVertical: 15 }}>
                    {/* <Text style={{ fontSize: 20, fontWeight: '200',fontFamily:Fonts.GothamBold }}>{props.title !== undefined ? props.title : 'Loading'}</Text>                     */}
                    {/* <Spinner
                        style={{alignSelf:'center'}}
                        isVisible={true}
                        size={60}
                        type={'ThreeBounce'}
                        color={constants.Colors.blue_primary}
                    /> */}

                    <LottieView source={constants.Icons.Loader} cacheComposition={true} autoPlay={true}  loop={true} style={{width:constants.Dimensions.vw(30),alignSelf:'center'}}  />
                
                </View>
            </SafeAreaView>
        );
    } else {
        return (<View />)
    }
}


export const LoadingScreen = ({
}) => {   
        return (
           <View style={{flexDirection:'column',justifyContent:'center',top:constants.Dimensions.vh(60)}}>
               <ActivityIndicator size={'large'} color={constants.Colors.primary} />
           </View>
        );
    
}
export const FooterLoader = ({
}) => {
    return (
        <View style={{flex:1,alignContent:'center',alignSelf:'center',justifyContent:'center'}}>
              <ActivityIndicator size={'large'} color={constants.Colors.primary} />
              <Text style={{ fontSize: 20, fontWeight: '200',fontFamily:constants.Fonts.PoppinsRegular}}>Getting more products...</Text>
        </View>
    )
}