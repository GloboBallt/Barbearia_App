import React from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import Home from './Home';
import Cadastro from './Cadastro';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TELA DE LOGIN</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputContainer}>
          <Text>Nome de Usuario:</Text>
          <TextInput style={styles.input} />
          <Text>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
          <View style={{ flexDirection: 'row' }}>
            <Pressable style={styles.bnt} onPress={() => navigation.navigate(Home)}>
              <Text style={styles.title}>Logar</Text>
            </Pressable>
            <Pressable style={styles.bnt} onPress={() => navigation.navigate(Cadastro)}>
              <Text style={styles.title}>Cadastro</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 125,
    height: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    width: 100,
    height: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
