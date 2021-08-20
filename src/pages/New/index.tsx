import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {Button, ImagePickerIOS, TextInput} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import api from '../../api';
import {Person} from '../../components/UserCard';
// import { Container } from './styles';
import {createUser} from '../../service/service';
const New = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('0');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  async function savePerson() {
    const data = {
      name,
      phone,
      age,
      company,
      email,
      avatar: `https://i.pravatar.cc/300?u=${email}`,
    } as Person;
    await createUser(data).then(() => {
      navigation.navigate('Home');
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagePicker} />
      <View>
        <TextInput
          placeholder="Nome"
          value={name}
          style={styles.input}
          onChangeText={text => setName(text)}
        />

        <TextInput
          placeholder="Idade"
          value={age.toString()}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setAge(text)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.input}
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Empresa"
          value={company}
          style={styles.input}
          onChangeText={text => setCompany(text)}
        />
      </View>
      <Button title="Criar" onPress={() => savePerson()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
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

  imagePicker: {
    height: 100,
    width: 100,
    backgroundColor: '#7159',
    borderRadius: 50,
  },
});

export default New;
