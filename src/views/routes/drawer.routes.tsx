import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons'

import TabRoutes from "./tab.route";
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{title: ''}}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
          drawerLabel: 'Inicio'
        }}
      />
      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
          drawerLabel: 'Meu Perfil'
        }}
      />
      <Drawer.Screen
        name="new"
        component={StackRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="plus" color={color} size={size} />,
          drawerLabel: 'Novo'
        }}
      />
      <Drawer.Screen
        name="cart"
        component={StackRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
          drawerLabel: 'Meu Perfil'
        }}
      />
    </Drawer.Navigator>
  )
}
