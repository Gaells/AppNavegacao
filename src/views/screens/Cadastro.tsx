import React, { useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import COLORS from '../../consts/colors';
import { useForm } from 'react-hook-form';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { StackNavigationProp } from '@react-navigation/stack';
export type RootTabParamList = {
  home: undefined;
  screenOptions: undefined;
};


const CadastroScreen = () => {
  
interface FormData {
  nome: string;
  email: string;
  senha: string;
}
  const { register, setValue, handleSubmit } = useForm<FormData>();
  
  useEffect(() => {
    register('nome')
    register('email')
    register('senha')
  }, [register]);
  const navigation = useNavigation<StackNavigationProp<RootTabParamList>>();

  const onSubmit = (data: FormData) => Alert.alert(data.nome, data.email);


  return (
    <ImageBackground source={require('../../assets/fundo-azul-preto.png')} style={styles.background}>
  {
  <View style={styles.container}>
      
      <Text style={styles.titulo}>Cadastre-se</Text>
 
      <View style={{ flex:4, marginBottom:5}}>
        <TouchableOpacity  activeOpacity={0.8}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={text => setValue('nome', text)}

          />
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
      <View style={styles.botao}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('home')} >        
                <Text style={{ fontSize: 18, fontWeight: 'bold', color:COLORS.white }}>Cadastre-se</Text>
          </TouchableOpacity>   
      </View>
    </View>

}</ImageBackground>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: COLORS.dark,
  },
  input: {
    paddingHorizontal:70,
    paddingVertical: 10,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    margin: 5,
    borderColor: COLORS.white,
    borderWidth: StyleSheet.hairlineWidth,
   
  },
  titulo: {
    padding: 5,
    fontSize:30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:20,
    color: COLORS.white,
    flex:3,
  },   
  botao: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    marginVertical: 15,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

   background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
});

export default CadastroScreen;
