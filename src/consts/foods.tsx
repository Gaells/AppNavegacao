interface Food {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: any;
}

const foods: Food[] = [
  {
    id: '1',
    name: 'Meat Pizza',
    ingredients: 'Mixed Pizza',
    price: 44.30,
    image: require('../assets/meatPizza.png'),
  },
  {
    id: '2',
    name: 'Pizza de Queijo',
    ingredients: 'Cheese Pizza',
    price: 42.10,
    image: require('../assets/cheesePizza.png'),
  },
  {
    id: '3',
    name: 'Hamburguer de Frango',
    ingredients: 'Frango frito',
    price: 35.10,
    image: require('../assets/chickenBurger.png'),
  },
  {
    id: '4',
    name: 'Sushi Makizushi',
    ingredients: 'Salmão',
    price: 19.55,
    image: require('../assets/sushiMakizushi.png'),
  },
];

export default foods;
