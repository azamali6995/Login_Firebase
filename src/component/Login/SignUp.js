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

export default function SignUp(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = val => {
    setEmail(val);
  };
  const handlePassword = val => {
    setPassword(val);
  };
  const handleFullName = val => {
    setFullName(val);
  };

  const handleSignUp = () => {
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
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response) {
        console.log('tag', '?', response);
        setIsLoading(false);
        props.navigation.navigate('Login');
      }
    } catch (e) {
      console.error(e.message);
      setIsLoading(false);
    }
  };

  const handleBackSignIn = () => {
    props.navigation.navigate('Login');
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
          // alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            SignUp
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
            placeholder="Enter Full Name"
            value={fullName}
            onChangeText={handleFullName}
          />
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
            onPress={handleSignUp}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {!isLoading ? (
                <Text style={{color: 'white'}}>SignUp</Text>
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
          <TouchableOpacity onPress={handleBackSignIn}>
            <Text style={{color: 'blue'}}>Already have an account? SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
