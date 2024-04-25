import { NavigationContainer, StackRouter } from "@react-navigation/native";
import DrawerRoutes from "./drawer.routes";
import StackRoutes from "./stack.routes";

export default function Routes(){
  return (
    <NavigationContainer>
    <DrawerRoutes />
    </NavigationContainer>
  )
}