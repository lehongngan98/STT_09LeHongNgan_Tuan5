import { StyleSheet, Text, View ,Image, TextInput,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from 'expo-checkbox';
export default  bt_2c = ({tuan4}) => {
    const[passwordLength,setPasswordLength] = useState(12);
    const[includeLowerCase,setIncludeLowerCase] = useState(true);
    const[includeUpperCase,setIncludeUpperCase] = useState(true);
    const[includeNumber,setIncludeNumber] = useState(true);
    const[includeSpecialSymbols,setIncludeSpecialSymbols] =useState(true);
    const[generatedPassword,setGeneratedPassword]=useState("");

    const generatePassword = () =>{
        // tạo mật khẩu theo các tuỳ chọn đã chọn
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            // let characterType = Math.floor(Math.random() * 4);
            if (includeLowerCase) {
              password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            } else if (includeUpperCase) {
              password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            } else if (includeNumber) {
              password += Math.floor(Math.random() * 10);
            } else if (includeSpecialSymbols) {
                password += String.fromCharCode(Math.floor(Math.random() * 14) + 33);
            } 
            // includeLowerCase && includeUpperCase
            // includeLowerCase && includeNumber
            // includeLowerCase && includeSpecialSymbols
            // ...
            // includeLowerCase && includeUpperCase && includeNumber && includeSpecialSymbols

            
          }
        setGeneratedPassword(password);
        
    }

    
    return(
        <View style={styles.container}>
            <LinearGradient
            // Background Linear Gradient
            colors={['#3B3B98','#C4C4C4','#3B3B98']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.background}>
            <View style={{width:'85%',height:'85%',backgroundColor:'#23235B', borderRadius:15,alignItems:'center'}}>
                {/* title  */}
                <View style={{width:182,height:64,justifyContent:'center',alignItems:'center',marginTop:'15%'}}>
                    <Text style={{fontWeight:700,fontSize:25,color:'white'}}>PASSWORD GENERATOR</Text>
                </View>

                {/* show password  */}
                <Text style={{width:'80%',height:55,backgroundColor:'black',marginTop:'10%',fontSize:30,color:'white',textAlign:'center',padding:10}}>
                    {generatedPassword}
                </Text>
                
                {/* password length */}
                <View style={{width:'100%',height:40,marginTop:'15%',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <Text style={{height:24,width:'50%',fontWeight:700,fontSize:20,color:'white'}}>Password length</Text>
                    <TextInput style={{height:30,width:'30%',backgroundColor:'white'}}
                    keyboardType='numeric'
                    value={passwordLength}
                    onChangeText={(text) => setPasswordLength(parseInt(text))}
                    />
                </View>


                {/* checkbox includeLowerCase */}
                <View style={{width:'100%',height:40,marginTop:'7%',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <Text style={{height:24,width:'70%',fontWeight:700,fontSize:20,color:'white'}}>Include lower case letters</Text>
                    <CheckBox 
                        value={includeLowerCase}
                        onValueChange={() => setIncludeLowerCase(!includeLowerCase)}
                    />
                </View>

                {/* checkbox includeUpperCase */}
                <View style={{width:'100%',height:40,marginTop:'7%',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <Text style={{height:24,width:'70%',fontWeight:700,fontSize:20,color:'white'}}>Include upcase letters</Text>
                    <CheckBox 
                        value={includeUpperCase}
                        onValueChange={() => setIncludeUpperCase(!includeUpperCase)}
                    />
                </View>

                {/* checkbox includeNumber */}
                <View style={{width:'100%',height:40,marginTop:'7%',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <Text style={{height:24,width:'70%',fontWeight:700,fontSize:20,color:'white'}}>Include number</Text>
                    <CheckBox 
                        value={includeNumber}
                        onValueChange={() => setIncludeNumber(!includeNumber)}
                    />
                </View>

                {/* checkbox includeSpecialSymbols */}
                <View style={{width:'100%',height:40,marginTop:'7%',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <Text style={{height:24,width:'70%',fontWeight:700,fontSize:20,color:'white'}}>Include Special symbol</Text>
                    <CheckBox 
                        value={includeSpecialSymbols}
                        onValueChange={() => setIncludeSpecialSymbols(!includeSpecialSymbols)}
                    />
                </View>

                {/* button generatedPassword */}
                <TouchableOpacity style={{width:'70%',height:55,marginTop:70,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}
                onPress={generatePassword}
                >
                    <Text style={{fontSize:18,fontWeight:700,color:'white'}}>GENERATE PASSWORD </Text>
                </TouchableOpacity>
            </View>

            </LinearGradient>
        </View>
    );
}
export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
       
      },
})