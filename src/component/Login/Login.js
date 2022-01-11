import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default function Login(props) {
  console.log('props', props);
  const [email, setEmail] = useState('azam@gmail.com');
  const [password, setPassword] = useState('123456');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = val => {
    setEmail(val);
  };
  const handlePassword = val => {
    setPassword(val);
  };

  const handleForget = () => {
    console.log('>>>>', props);
    props.navigation.navigate('ForgetPassword', {Keyvalue: 'Azam ali'});
  };

  const handleSignupAcc = () => {
    props.navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars');
      setValid(false);
      return;
    }
    __doCreateUser(email, password);
  };
  const __doCreateUser = async (email, password) => {
    setIsLoading(true);
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response) {
        console.log('tag', '?', response);

        props.navigation.navigate('CompanyDetail', {
          keyvalue: response.user.uid,
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
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
            Login
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
            placeholder="Enter Email"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmail}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            margin: 5,
            marginBottom: 35,
            backgroundColor: 'powderblue',
            color: 'white',
          }}>
          <TextInput
            style={{width: '100%', color: 'black'}}
            secureTextEntry
            placeholder="Enter password"
            value={password}
            onChangeText={handlePassword}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            margin: 5,
            marginBottom: 35,
            color: 'white',
          }}>
          <TouchableOpacity onPress={handleForget}>
            <Text style={{color: 'blue'}}>Forget Password</Text>
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
            onPress={handleLogin}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {!isLoading ? (
                <Text style={{color: 'white'}}>Login</Text>
              ) : (
                <ActivityIndicator color={'#fff'} />
              )}
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
          <TouchableOpacity onPress={handleSignupAcc}>
            <Text style={{color: 'blue'}}>Have not an account? SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
