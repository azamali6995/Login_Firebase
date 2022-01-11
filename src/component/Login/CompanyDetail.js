import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

function CompanyDetail(props) {
  console.log('props', props);
  const [fName, setFname] = useState('gull ahmad');
  const [lastName, setLastName] = useState('fabrics');
  const [company, setCompany] = useState('style Textile');
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let uid = props.route.params.keyvalue;
    console.log('Abc', userId);
    setUserId(uid);
  });

  const handleFirstName = val => {
    setFname(val);
  };
  const handleLast = val => {
    setLastName(val);
  };
  const handleCompany = val => {
    setCompany(val);
  };
  const handleSubmit = () => {
    setIsLoading(true);
    firestore()
      .collection('Users')
      .doc(userId)
      .set({fName, lastName, company})

      .then(() => {
        props.navigation.navigate('LogOut');
        setIsLoading(false);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const handleGetUsers = () => {
    props.navigation.navigate('UserShow', {});
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
            Company Detail
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
            placeholder="Enter first Name"
            keyboardType="email-address"
            value={fName}
            onChangeText={handleFirstName}
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
            placeholder="Enter Last Name"
            value={lastName}
            onChangeText={handleLast}
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
            placeholder="Enter Company"
            value={company}
            onChangeText={handleCompany}
          />
        </View>
        <Text> </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 25,
            margin: 5,
            backgroundColor: '#2980b9',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 55,
              justifyContent: 'center',
            }}
            onPress={handleSubmit}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {!isLoading ? (
                <Text style={{color: 'white'}}>Submit</Text>
              ) : (
                <ActivityIndicator color={'#fff'} />
              )}
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
            onPress={handleGetUsers}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white'}}>Get User</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CompanyDetail;
