import React from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import PhoneInput from 'react-native-phone-input'
import Home from './Home';



export default function Cadastro({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TELA DE CADASTRO</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Nome Completo:</Text>
          <TextInput style={styles.input} />
          <Text>Telefone:</Text>
          <PhoneInput style={styles.input} initialCountry={'br'}/>
          <Text>Email:</Text>
          <TextInput style={styles.input} autoComplete={true}/>
          <Text>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry={true}/>
          <Text>Confirme a senha:</Text>
          <TextInput style={styles.input} secureTextEntry={true}/>
          <Pressable style={styles.input} onPress={() => navigation.navigate(Home)}>
            <Text style={styles.title}>Cadastrar</Text>
          </Pressable>
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
    width: 200,
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
  },
  title: {
    fontWeight: 'bold',
    
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
