import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

    
export default function App() {
  const [usuario1, setUsuario] =useState('');
  const [valido, setvalido] = useState(false);

    const validacao = (usuario1: string) => {
      const chars = /^[a-zA-Z0-9_-]+$/;
      return chars.test(usuario1);
    }
    const escusua = (usuario1: string) => {
      setUsuario(usuario1);
      setvalido(validacao(usuario1));}


    const handleSubmit = () => {
      if (valido) {
        Alert.alert('Sucesso', 'Nome de usuário válido!');
      } else {
        Alert.alert('Erro',  'Nome de usuário inválido!');
      }
  };

  return (
    <View style={styles.container}> 
    <Text style={styles.resultado}>numero 2:</Text>
    <TextInput style={styles.input} value={usuario1} onChangeText={escusua}/>

    <Button
        title="Validar"
        onPress={handleSubmit}
      />
  
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  resultado: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    margin: 25
  },

  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
}});
