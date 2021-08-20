import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {updateData} from '../../service/service';
import {Person} from '../../utils/person';

// import { Container } from './styles';

const Details = () => {
  const router = useRoute();
  const {data}: Person = router.params as Person;
  // name, phone, email, avatar, address, company, id useStates
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [age, setAge] = useState(data.age);

  const [company, setCompany] = useState(data.company);

  const navigation = useNavigation();

  async function sendUpdatedData(updatedData: Person) {
    updateData(updatedData)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <View>
      <TextInput
        placeholder={`${data.name}`}
        value={name}
        style={styles.input}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder={`${data.age}`}
        value={age.toString()}
        style={styles.input}
        onChangeText={text => setAge(parseInt(text, 10))}
      />
      <TextInput
        placeholder={`${data.email}`}
        value={email}
        style={styles.input}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder={`${data.company}`}
        value={company}
        style={styles.input}
        onChangeText={text => setCompany(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          //log data
          //create a new object and send to via put
          const updatedData: Person = {
            data: {
              id: data.id,
              name: name || data.name,
              email: email || data.email,
              age: age || data.age,
              company: company || data.company,
            },
          };

          sendUpdatedData(updatedData);
        }}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
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
  buttonDelete: {
    alignSelf: 'stretch',
    marginTop: 50,
    width: 300,
    height: 56,
    borderRadius: 10,
    padding: 10,
    marginLeft: 50,
    backgroundColor: '#f00',
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Details;
