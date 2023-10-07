import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const LoginSuccessModal = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 ,alignItems:'center'}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 ,color:'blue'}}>
            Đăng nhập thành công
          </Text>
          <Text style={{ fontSize: 16 ,textAlign:'center'}}>
            Chào mừng bạn đã đăng nhập vào ứng dụng của chúng tôi!
          </Text>
          <TouchableOpacity
            style={{ marginTop: 20, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}
            onPress={closeModal}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginSuccessModal;
