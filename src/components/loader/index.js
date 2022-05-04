
import React from "react";
import { View,SafeAreaView} from "react-native";
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