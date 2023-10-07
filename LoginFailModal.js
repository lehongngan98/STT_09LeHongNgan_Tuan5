import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const LoginFailModal = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 ,alignItems:'center'}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 ,color:'red'}}>
            Đăng nhập thất bại
          </Text>
          <Text style={{ fontSize: 16 ,textAlign:'center'}}>
            Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng kiểm tra lại!
          </Text>
          <TouchableOpacity
            style={{ marginTop: 20, padding: 10, backgroundColor: 'red', borderRadius: 5 }}
            onPress={closeModal}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginFailModal;
