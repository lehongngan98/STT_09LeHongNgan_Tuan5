import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View ,Image, TextInput,TouchableOpacity} from 'react-native';
import LoginSuccessModal from './LoginSuccessModal';
import LoginFailModal from './LoginFailModal';
export  default bt_2a = ({tuan4}) => {
  const [isHide, setIsHide] = useState(false);
  const [username, setUsername] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleFail, setIsModalVisibleFail] = useState(false);
  const login = () => {
    if(username == 'admin' && isPassword == 'admin'){
      setIsModalVisible(true);
    }
    else{
      setIsModalVisibleFail(true);
    }
  }
  const closeModal = () => {
    setIsModalVisible(false);
  }
  const closeModalFail = () => {
    setIsModalVisibleFail(false);
  }
    return (
        <View style={styles.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={['#FBCB00','#BF9A00']}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.background}>
              <View style={{width:100,height:35,marginTop:155,marginLeft:3}}>
                <Text style={{fontSize:30,fontWeight:700,alignItems:"center"}}>LOGIN</Text>
              </View>
    
              <View style={{width:'100%',height:150,justifyContent:'center',alignItems:'center'}}>
                {/* username */}
                <View style={{width:330,height:54,marginTop:100,borderWidth:1}}>
                  <Image style={{width:32,height:32,marginTop:10,marginLeft:10}} source={require('./assets/user.png')}></Image>
                  <TextInput style={{width:300,height:54,marginLeft:50,marginTop:-35,fontSize:24}} placeholder="Name" autoCapitalize='none' 
                  onChangeText={(text) => setUsername(text)}
                  />
                </View>
    
                {/* password */}
                <View style={{width:330,height:54,marginTop:40,borderWidth:1}}>
                  <View style={{width:'85%'}}>
                    <Image style={{width:32,height:32,marginTop:10,marginLeft:10}} source={require('./assets/lock.png')}></Image>
                    <TextInput 
                    onChangeText={(text) => setIsPassword(text)}
                    style={{width:'60%',height:54,paddingLeft:50,marginTop:-35,fontSize:24}} placeholder="Password" autoCapitalize='none' secureTextEntry={ isHide ? false : true}></TextInput>
                  </View>
                  <View style={{width:'20%'}}>
                    <TouchableOpacity onPress={()=>{
                      setIsHide(!isHide)
                    }}>
                      {
                        isHide ? <Image style={{width:32,height:32,marginLeft:290,marginTop:-47}} source={require('./assets/hide.png')}/>
                        : <Image style={{width:32,height:32,marginLeft:290,marginTop:-47}} source={require('./assets/eye.png')}/>                        
                      }
                    </TouchableOpacity>
                    
                  </View>
                </View>
    
              </View>
              <View style={{width:'100%',height:54,justifyContent:'center',marginTop:150,alignItems:'center'}}>
                {/* button login */}
                <TouchableOpacity
                  onPress={login}
                  >
                  <View style={{width:330,height:54,backgroundColor:'#060000',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:24,textAlign:'center',fontWeight:700,color:'white'}}>LOGIN</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* modal login success */}
              <LoginSuccessModal isVisible={isModalVisible} closeModal={closeModal} />
              {/* modal login fail */}
              <LoginFailModal isVisible={isModalVisibleFail} closeModal={closeModalFail} />
              {/* Forgot your password? */}
              <View style={{width:'100%',height:54,justifyContent:'center',marginTop:40,alignItems:'center'}}>
                <Text style={{fontSize:20,textAlign:'center',fontWeight:400,color:'#000000'}}>Forgot your password?</Text>
              </View>
              
            </LinearGradient>
    
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // backgroundColor: 'rgba(251, 203, 0, 1)',
        // alignItems: 'center',
        // justifyContent: 'center',
        
        
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        flex: 1,
        alignItems: 'center',
    
      },
    });
    
