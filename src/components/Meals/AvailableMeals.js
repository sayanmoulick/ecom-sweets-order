import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Kaju Barfi',
    description: 'Barfi with Finest cashews',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Rasagolla',
    description: 'Milk and sugar-syrup based',
    price: 15,
  },
  {
    id: 'm3',
    name: 'Gulab Jamun',
    description: 'Fried and sugar-syrup based',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Sandesh',
    description: 'Dried Cheese based',
    price: 19.99,
  },
  {
    id: 'm5',
    name: 'Khir Kadam',
    description: 'Dried Cheese',
    price: 9.99,
  },
  {
    id: 'm6',
    name: 'Ras Malai',
    description: 'Milk based',
    price: 30.99,
  },
  {
    id: 'm7',
    name: 'Kalakand',
    description: 'Dried Cheese based',
    price: 11.99,
  },
  {
    id: 'm8',
    name: 'Sitabhog',
    description: 'Fried, rice, and sugar-syrup based',
    price: 80.99,
  },
  {
    id: 'm9',
    name: 'Langcha',
    description: 'Fried and sugar-syrup based',
    price: 20.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
