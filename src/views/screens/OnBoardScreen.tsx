import React from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

interface OnBoardScreenProps {
  navigation: any; // Você pode ajustar esse tipo para o tipo real de navegação, se estiver utilizando algum sistema de navegação específico.
}

const OnBoardScreen: React.FC<OnBoardScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/onboardImage.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Comida Deliciosa
          </Text>
          <Text style={styles.description}>
            Nós te ajudamos a encontrar a melhor e mais deliciosa comida
          </Text>
          <PrimaryButton 
            onPress={() => navigation.navigate('HomeScreen')}
            title="Começar"
          />
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: COLORS.dark,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.grey,
  },
});

export default OnBoardScreen;
