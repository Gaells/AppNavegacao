import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import COLORS from '../../consts/colors';
import { useForm } from 'react-hook-form';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
export type RootTabParamList = {
  home: undefined;
  screenOptions: undefined;
  cadastro: undefined;
};


const LoginScreen = () => {
  
interface FormData {
  email: string;
  senha: string;
}
  const { register, setValue, handleSubmit } = useForm<FormData>();
  useEffect(() => {
    register('email')
    register('senha')
  }, [register]);
  
  const onSubmit = (data: FormData) => Alert.alert(data.email);
  const navigation = useNavigation<StackNavigationProp<RootTabParamList>>();

  return (
    <ImageBackground source={require('../../assets/fundo-azul-geo.jpeg')} style={styles.background}>
  {
  <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Text style={{marginBottom: 10}}>Digite seu email e senha</Text>
      
      <View style={{flex: 4, marginBottom:5}}>        
        <TouchableOpacity  activeOpacity={0.8}>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setValue('email', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={text => setValue('senha', text)}
          secureTextEntry
        />
        </TouchableOpacity >
      </View>
      <TouchableOpacity onPress={ () => navigation.navigate('cadastro')}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color:COLORS.white}}>Cadastre-se</Text>
        </TouchableOpacity>
      <View style={styles.botao}>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('home')}>        
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Entrar</Text>
        </TouchableOpacity>   
      </View>
  </View>
}


</ImageBackground>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: COLORS.primary,
  
  },
  input: {
    paddingHorizontal:60,
    paddingVertical: 10,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    margin: 5,
    borderColor: COLORS.white,
    borderWidth: StyleSheet.hairlineWidth,
   // alignItems: 'flex-start',
  },
  titulo: {
    padding: 5,
    fontSize:30,
    fontWeight: 'bold',
    marginVertical: 15,
    color: COLORS.dark,
    flex: 2,
  },   
  botao: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderRadius: 40,
    marginVertical: 15,
    borderColor: COLORS.dark,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

   background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
});
export default LoginScreen;
