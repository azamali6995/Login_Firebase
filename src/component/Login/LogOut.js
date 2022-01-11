import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import auth from '@react-native-firebase/auth';

function LogOut(props) {
  const handleForgetPassword = () => {
    auth()
      .signOut()
      .then(function () {
        props.navigation.navigate('Login');
      })
      .catch(function (error) {
        alert('Error', error);
      });
  };

  const handlePress = () => {
    Linking.openURL('https://www.leadconcept.com/');
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 35,
          margin: 5,
          backgroundColor: 'skyblue',
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
          }}
          onPress={handlePress}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 40}}>
              Welcome to LeadConcept
            </Text>
          </View>
        </TouchableOpacity>
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
            <Text style={{color: 'white'}}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LogOut;
