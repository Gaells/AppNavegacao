import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import ProductList from "../screens/ProductList";

const Drawer = createDrawerNavigator();

type DrawerIconProps = {
  color: string;
  size: number;
};

const HomeIcon = ({ color, size }: DrawerIconProps) => <Feather name="home" color={color} size={size} />;
const CartIcon = ({ color, size }: DrawerIconProps) => <Feather name="shopping-cart" color={color} size={size} />;
const BookIcon = ({ color, size }: DrawerIconProps) => <Feather name="book" color={color} size={size} />;

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name="TelaInicio"
        component={TabRoutes}
        options={{
          drawerIcon: HomeIcon,
          drawerLabel: 'Tela Incial'
        }}
      />
      <Drawer.Screen
        name="CartScreen"
        component={StackRoutes}
        options={{
          drawerIcon: CartIcon,
          drawerLabel: 'Carrinho'
        }}
      />
      <Drawer.Screen
        name="Lista de Produtos API"
        component={ProductList}
        options={{
          drawerIcon: BookIcon,
          drawerLabel: 'Produtos'
        }}
      />
    </Drawer.Navigator>
  );
}
