import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Lista from './Lista';
import Settings from './Settings';



export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home!</Text>
      <View style={styles.inputContainer}>
        <Pressable style={styles.bnt} onPress={() => navigation.navigate(Lista)}>
          <Icon name='ios-list' size={20} color='black' />
          <Text>Lista</Text>
        </Pressable>
        <Pressable style={styles.bnt} onPress={() => navigation.navigate(Settings)}>
          <Icon name='ios-settings' size={20} color='black' />
          <Text style={{justifyContent: 'center', alignItems: 'center'}}>Configurações</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    width: 125,
    height: 30,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bnt: {
    flexDirection: 'row',
    width: 175,
    height: 30,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
