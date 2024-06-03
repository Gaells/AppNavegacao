import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{title: ''}}>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
      />
    </Stack.Navigator>
  )
}
