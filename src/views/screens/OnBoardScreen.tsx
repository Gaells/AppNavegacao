import React from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';
interface OnBoardScreenProps {
  navigation: any;
}

const OnBoardScreen: React.FC<OnBoardScreenProps> = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/logo.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Faça seu Pedido Aqui!
          </Text>
          <Text style={styles.description}>
            Onde você irá comer hoje?
          </Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              onPress={() => navigation.navigate('HomeScreen')}
              title="Comer aqui"
            />
            <PrimaryButton 
              onPress={() => navigation.navigate('HomeScreen')}
              title="Vou levar"
            />
          </View>
        </View>
      </View>    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '40%', 
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Kanit_700Bold',
    textAlign: 'center',
    marginBottom: 10,
    color: COLORS.dark,
  },
  description: {
    fontSize: 20,
    fontFamily: 'Kanit_400Regular',
    textAlign: 'center',
    color: COLORS.grey,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default OnBoardScreen;
