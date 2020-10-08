import React from 'react';
import Axios from 'axios';
import FoodCard from '../components/FoodCard';
export default class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: [],
    };
  }
  componentDidMount() {
    const baseUrl =
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    Axios.get(baseUrl).then((res) => {
      console.log(res.data.meals);
      this.setState({ recipe: res.data.meals });
    });
  }

  diplaymeals = () => {
    // if (this.state.recipe.length > 0) {
    const meals = this.state.recipe.map((meal) => {
      return <FoodCard img={meal.strMealThumb} meal={meal.strMeal} />;
    });
    // } else {
    //   return <h1>pendding</h1>;
    // }

    return meals;
  };

  render() {
    return <div className="list">{this.diplaymeals()}</div>;
  }
}
