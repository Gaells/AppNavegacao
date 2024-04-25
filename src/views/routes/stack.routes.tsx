import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Profile from "../screens/Profile";
import CartScreen from "../screens/CartScreen";
import New from "../screens/New";
import LoginScreen from "../screens/Login";
import CadastroScreen from "../screens/Cadastro";
import HomeScreen from "../screens/HomeScreen";


export type RootStackParamList = {
  new: undefined;
  cart: undefined;
  cadastro: undefined;
  login: undefined;
  home: undefined;
};

//const Stack = createStackNavigator();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (

    <Stack.Navigator screenOptions={{title: ''}}>
      
      <Stack.Screen
        name="login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="cadastro"
        component={CadastroScreen}
      />
      

      <Stack.Screen
        name="home"
        component={Profile}
      />
      
 
      <Stack.Screen
        name="cart"
        component={CartScreen}
      />

      <Stack.Screen
        name="new"
        component={New}
      />



    </Stack.Navigator>

  )
}
