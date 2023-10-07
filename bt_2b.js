import { StyleSheet, Text, View ,Image, TextInput,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default  bt_2b = ({tuan4}) => {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    

    return(
        <View style={styles.container}>
            <View style={{width:'100%',height:90,marginTop:120,flexDirection:'row'}}>
                <View style={{backgroundColor:'green',height:90,width:90,marginLeft:20}}>
                    <Image source={require('./assets/usb.png')} style={{width:90,height:90}}></Image>
                </View>
                <View style={{height:90,flexDirection:'column',width:300,marginHorizontal:10,marginVertical:10}}>
                    <Text style={{fontWeight:700,fontSize: 16}}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
                </View>
            </View>  

            {/* view danh gia sao */}
            <View style={{width:259,height:100,marginTop:50}}>
                <View style={{height:21,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:700}}>Cực kì hài lòng</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                    <Image source={require('./assets/Star.png')}/>
                    <Image source={require('./assets/Star.png')}/>
                    <Image source={require('./assets/Star.png')}/>
                    <Image source={require('./assets/Star.png')}/>
                    <Image source={require('./assets/Star.png')}/>
                    
                </View>
            </View>

            {/* import image from lib */}
            <TouchableOpacity 
            style={{height:68,width:293,marginTop:50,flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10}}
            title="Pick an image from camera roll" onPress={pickImage}>
                <Image source={require('./assets/camera.png')} style={{width:39,height:32}}></Image>
                <Text style={{fontSize:16,fontWeight:700,marginLeft:10}}>Thêm ảnh</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 300, height: 200 ,marginTop:10}} />}

            {/* button gui */}
            <TouchableOpacity style={{width: 300, height: 43 ,marginTop:50,backgroundColor:'#1511EB',borderRadius:5,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:700,alignItems:'center',color:'white'}}>Gửi</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'rgba(251, 203, 0, 1)',
       alignItems: 'center',
      // justifyContent: 'center',
      
      
    }
})
