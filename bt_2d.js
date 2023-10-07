import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, TextInput,TouchableOpacity} from 'react-native';

export  default bt_2d = ({tuan4}) => {
    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    const [price, setPrice] = useState(141800);
    const [quantity, setQuantity] = useState(1);
    const onPressMinus = () => {
        setQuantity(quantity-1);
        setPrice(price-141800);
        if(quantity==0){
            setQuantity(0);
            setPrice(0);
        }
    }
    const onPressAdd = () => {
        setQuantity(quantity+1);
        setPrice(price+141800);
    }
    return (
        <View style={{flex:1,backgroundColor:'#C4C4C4'}}>
            <View style={{height:'47%',width:'100%',paddingTop:100,backgroundColor:'white'}}>
                <View style={{height:'35%',width:'100%',flexDirection:'row'}}>
                    <Image source={require('./assets/book.png')} style={{marginLeft:20,height:147,width:124}}/>
                    <View style={{marginLeft:15,width:'70%',height:130}}>
                        <Text style={{fontSize:15,fontWeight:700,marginTop:13}}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={{fontSize:15,fontWeight:700,marginTop:13}}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={{fontSize:20,fontWeight:700,marginTop:13,color:'red'}}>{price} đ</Text>
                        <View style={{height:30,width:'100%',flexDirection:'row',marginTop:13,justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity  onPress={onPressMinus}>
                                    <Image source={require('./assets/btnminus.png')}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft:10,fontSize:20,fontWeight:500}}>{quantity}</Text>
                                <TouchableOpacity onPress={onPressAdd}>
                                    <Image source={require('./assets/btnadd.png')} style={{marginLeft:10}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginRight:35}}>
                                <TouchableOpacity>
                                    <Text style={{color:'blue',fontSize:15,fontWeight:500}}>Mua sau</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>

                {/* Mã giảm giá đã lưu */}
                <View style={{height:30,width:'100%',flexDirection:'row',marginTop:40}}>
                    <Text style={{fontSize:16,width:'40%',height:30,marginLeft:20,fontWeight:700}}>Mã giảm giá đã lưu</Text>
                    <Text style={{marginLeft:20,fontSize:16,color:'blue',fontWeight:700}}>Xem tại đây</Text>
                </View>
                <View style={{height:55,width:'100%',marginTop:50,flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity style={{width:'50%',borderRadius:10,height:55,justifyContent:'center',alignItems:'center',borderWidth:1,backgroundColor:'white',flexDirection:'row'}}>
                        <Image source={require('./assets/yellow_block.png')} style={{width:42,height:26}}></Image>
                        <Text style={{fontSize:18,fontWeight:700,marginLeft:10}}>Mã giảm giá</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:119,borderRadius:10,height:55,justifyContent:'center',alignItems:'center',backgroundColor:'#0A5EB7'}}>
                        <Text style={{fontWeight:700,fontSize:20,color:'white'}}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{width:'100%',height:62,backgroundColor:'white',marginTop:20,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontWeight:700,fontSize:14,marginLeft:20}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={{fontWeight:700,fontSize:14,color:'#134FEC',marginLeft:20}}>Nhập tại đây?</Text>
            </View>

            <View style={{width:'100%',height:62,backgroundColor:'white',marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:30}}>
                <Text style={{fontWeight:700,fontSize:25}}>Tạm tính</Text>
                <Text style={{fontWeight:700,fontSize:25,color:'red',marginLeft:20}}>{price} đ</Text>
            </View>

            <View style={{width:'100%',height:180,backgroundColor:'white',marginTop:100,alignItems:'center'}}>
                <View style={{height:40,width:'100%',flexDirection:'row',marginTop:30}}>
                    <Text style={{fontWeight:700,fontSize:25,color:'#808080',marginLeft:30}}>Thành tiền</Text>
                    <Text style={{fontWeight:700,fontSize:25,color:'red',marginLeft:90}}>{price} đ</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:'#E53935',justifyContent:'center',alignItems:'center',marginTop:20,width:'85%',height:65,borderRadius:10}}>
                    <Text style={{fontWeight:700,fontSize:25,color:'white'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}