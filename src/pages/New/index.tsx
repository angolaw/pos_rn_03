import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
// import { Container } from './styles';
import {createUser} from '../../service/service';
import {Person} from '../../utils/person';
const New = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('0');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  async function savePerson() {
    const ageNumber = parseInt(age, 10);
    const data = {
      name,
      age: ageNumber,
      company,
      email,
      avatar: `https://i.pravatar.cc/300?u=${email}`,
    };
    createUser(data).then(() => {
      navigation.navigate('Listagem');
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Nome"
          value={name}
          style={styles.input}
          onChangeText={text => setName(text)}
        />

        <TextInput
          placeholder="Idade"
          value={age}
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
      <TouchableOpacity style={styles.button} onPress={() => savePerson()}>
        <Text style={styles.buttonText}> {'Criar'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    alignContent: 'center',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 50,
    width: 300,
    height: 56,
    borderRadius: 10,
    padding: 10,
    marginLeft: 50,
    backgroundColor: '#00a680',
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
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
