import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import COLORS from '../../consts/colors';

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton: React.FC<ButtonProps> = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
        <Text style={{ ...style.title, color: COLORS.primary }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    width: 150,
    margin: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { PrimaryButton, SecondaryButton };
