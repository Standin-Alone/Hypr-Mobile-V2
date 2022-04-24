import React from 'react';
import { View,Text,Image,Animated} from 'react-native';
import Components from '../../components';
import constants from '../../constants';
import { styles } from './styles';
import { login } from '../../actions/auth';
import { POST } from '../../utils/axios';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
export default class VerifyOtp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        

          username:{
              focus:false,
              error:false,
              errorMessage:'',
              data:''
          },
          password:{
            focus:false,
            error:false,
            errorMessage:'',
            data:''
          },  
          isLoading:false,
          otpValue:''
      };
     
    }

 
    render(){
        
       
        return(
            <>                              
                <View style={styles.container}>
                <CodeField
                    
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    
                    
                    cellCount={8}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        // onLayout={getCellOnLayoutHandler(index)}
                        >
                        {/* {symbol || (isFocused ? <Cursor /> : null)} */}
                    </Text>
                    )}
                />
                </View>                
            </>
        )
    }

}
  