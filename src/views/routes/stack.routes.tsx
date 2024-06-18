import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import OnBoardScreen from "../screens/OnBoardScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{title: ''}}>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Inicio"
        component={OnBoardScreen}
      />
    </Stack.Navigator>
  )
}
