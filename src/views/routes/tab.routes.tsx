import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OnBoardScreen from '../screens/OnBoardScreen';
import ProductList from '../screens/ProductList';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  color: string;
  size: number;
};

const HomeIcon = ({ color, size }: TabBarIconProps) => <Icon name="home-filled" color={color} size={size} />;
const FavoriteIcon = ({ color, size }: TabBarIconProps) => <Icon name="favorite" color={color} size={size} />;
const CartIcon = ({ color, size }: TabBarIconProps) => <Icon name="shopping-cart" color={color} size={size} />;
const BookIcon = ({ color, size }: TabBarIconProps) => <Icon name="book" color={color} size={size} />;

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
      <Tab.Screen
        name="API"
        component={ProductList}
        options={{
          tabBarIcon: BookIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
