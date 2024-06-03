import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OnBoardScreen from '../screens/OnBoardScreen';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  color: string;
  size: number;
};

const HomeIcon = ({ color, size }: TabBarIconProps) => <Icon name="home-filled" color={color} size={size} />;
const FavoriteIcon = ({ color, size }: TabBarIconProps) => <Icon name="favorite" color={color} size={size} />;
const CartIcon = ({ color, size }: TabBarIconProps) => <Icon name="shopping-cart" color={color} size={size} />;

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="TelaInicial"
        component={OnBoardScreen}
        options={{
          tabBarIcon: FavoriteIcon,
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: CartIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
