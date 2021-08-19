import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Person} from '../../components/UserCard';

// import { Container } from './styles';

const Details = () => {
  const router = useRoute();
  const {data}: Person = router.params;
  // name, phone, email, avatar, address, company, id useStates
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [company, setCompany] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={data.name}
        style={styles.input}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={data.email}
        style={styles.input}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Empresa"
        value={data.company}
        style={styles.input}
        onChangeText={text => setCompany(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    width: 300,
    padding: 10,
    marginLeft: 50,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 50,
    borderBottomColor: '#000', // Add this to specify bottom border color
    borderBottomWidth: 1, // Add this to specify bottom border thickness
  },
});

export default Details;
