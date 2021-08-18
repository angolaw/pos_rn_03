import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container } from './styles';

const New = () => {
  return (
    <View>
      <View style={styles.imagePicker}>
        <Icon name="rocket" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imagePicker: {
    height: 100,
    width: 100,
    backgroundColor: '#7159',
    borderRadius: 42,
  },
});

export default New;
