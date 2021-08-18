import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import api from '../../api';
import {FlatList} from 'react-native-gesture-handler';
import UserCard from '../../components/UserCard';
import FAB from 'react-native-fab';
// import { Container } from './styles';

const Home = () => {
  const [persons, setPersons] = useState([]);

  //get users from json-server
  useEffect(() => {
    async function getPersons() {
      const response = await api.get('/persons');
      console.log(response);

      setPersons(response.data);
    }
    getPersons();
  }, []);

  return (
    <View>
      <FlatList
        data={persons}
        keyExtractor={item => String(item.email)}
        renderItem={({item}) => <UserCard data={item} />}
      />
      <FAB
        buttonColor="#00a680"
        iconTextColor="#FFFFFF"
        onClickAction={() => {}}
        visible={true}
      />
    </View>
  );
};

export default Home;
