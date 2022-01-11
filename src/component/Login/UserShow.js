import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text} from 'react-native';

function UserShow() {
  const [restaurantsList, setRestaurantsList] = useState([]);

  const getRestaurants = async () => {
    try {
      const list = [];
      var snapshot = await firestore().collection('users').get();
      console.log('Here', snapshot);
      snapshot.forEach(doc => {
        list.push(doc.data());
      });
      console.log('list', list);
      setRestaurantsList([...list]);
    } catch (e) {}
  };

  //Call when component is rendered
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        {restaurantsList.map((data, index) => (
          <View>
            <Text>{data.Brand_Name} </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default UserShow;
