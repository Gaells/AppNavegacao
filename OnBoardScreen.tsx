import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

interface OnBoardScreenProps {
  navigation: any; // Você pode ajustar esse tipo para o tipo real de navegação, se estiver utilizando algum sistema de navegação específico.
}

const OnBoardScreen: React.FC<OnBoardScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -200,
          }}
          source={require('../../assets/onboardImage.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{ top: -90, fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
            Comida Deliciosa
          </Text>
          <Text
            style={{
              top: -90,
              marginTop: 10,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            Nós te ajudamos a encontrar a melhor e mais deliciosa comida
          </Text>
        </View>
        <PrimaryButton 
          onPress={() => navigation.navigate('HomeScreen')}
          title="Começar"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  }
});

export default OnBoardScreen;
