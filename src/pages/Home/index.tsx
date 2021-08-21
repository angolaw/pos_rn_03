import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import UserCard from '../../components/UserCard';
import FAB from 'react-native-fab';
import {useNavigation} from '@react-navigation/native';
// import { Container } from './styles';
import {getAll} from '../../service/service';
import {Person} from '../../utils/person';
const Home = () => {
  const [persons, setPersons] = useState([] as Person[]);
  const navigation = useNavigation();

  //get users from json-server
  useEffect(() => {
    async function getPersons() {
      const response = await getAll();
      const newData = response.map((person: Person) => {
        return {
          ...person,
          avatar: `https://i.pravatar.cc/300?u=${person.email}`,
        };
      });
      setPersons(newData);
    }
    getPersons();
  }, [persons]);

  return (
    <View>
      <FlatList
        data={persons}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <UserCard data={item} />}
      />
      <FAB
        buttonColor="#00a680"
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          navigation.navigate('New');
        }}
        visible={true}
      />
    </View>
  );
};

export default Home;
