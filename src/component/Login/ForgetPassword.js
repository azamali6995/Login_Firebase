import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

function ForgetPassword(props) {
  const [email, setEmail] = useState('');

  const handleChange = val => {
    setEmail(val);
  };
  const handleForgetPassword = email => {
    if (!email) {
      alert('please enter email');
    }
    return auth().sendPasswordResetEmail(email);
  };

  const handleBack = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#3498db',
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            forget password
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            margin: 5,
            marginBottom: 35,
            backgroundColor: 'powderblue',
          }}>
          <TextInput
            style={{width: '100%', color: 'black'}}
            secureTextEntry
            placeholder="Enter Email"
            value={email}
            onChangeText={handleChange}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 35,
            margin: 5,
            backgroundColor: '#2980b9',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 55,
              justifyContent: 'center',
            }}
            onPress={handleForgetPassword}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white'}}>Forget Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            margin: 5,
            marginBottom: 35,
            color: 'white',
          }}>
          <TouchableOpacity onPress={handleBack}>
            <Text style={{color: 'blue'}}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ForgetPassword;
