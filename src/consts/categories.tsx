interface Category {
  id: string;
  name: string;
  image: any;
}

const categories: Category[] = [
  { id: '1', name: 'Combos', image: require('../assets/categories/combo.png') },
  { id: '2', name: 'Hamburger', image: require('../assets/categories/burger.png') },
  { id: '3', name: 'Bebidas', image: require('../assets/categories/drink.png') },
  { id: '4', name: 'Sobremesas', image: require('../assets/categories/sobremesa.png') },
];

export default categories;
