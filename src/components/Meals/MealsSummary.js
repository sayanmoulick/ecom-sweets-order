import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Sweets, Delivered To You</h2>
      <p>
        Choose your favorite sweet from our broad selection of available sweets
        and enjoy a delicious dessert at home.
      </p>
      <p>
        All our sweets are prepared with high-quality ingredients, just-in-time and
        of course by experienced masters!
      </p>
    </section>
  );
};

export default MealsSummary;
