import React from 'react';
import Axios from 'axios';
import FoodCard from '../components/FoodCard';
import FilterMeals from '../components/FilterMeals';
import MealDetails from '../components/MealDetails';
import { connect } from 'react-redux';
import { GetRecipe } from '../actions/index';
import Welcome from '../components/Welcome';
class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: [],
      category: [],
      details: [],
      ingredient: [],
    };
  }
  componentDidMount() {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
    Axios.get(`${baseUrl}/categories.php`).then((res) => {
      this.setState({ category: res.data.categories });
    });
  }

  handlechanges = (e) => {
    this.setState({ recipe: [] });
    this.props.GetRecipe(e.target.value);
  };

  gtdetails = (id) => {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
    this.setState({ ingredient: [] });
    Axios.get(`${baseUrl}/lookup.php?i=${id}`).then((res) => {
      this.setState({ details: res.data.meals });
      this.setState({ ingredient: [] });
      for (let i = 1; i < 20; i++) {
        if (
          res.data.meals[0][`strIngredient${i}`] !== '' &&
          res.data.meals[0][`strIngredient${i}`] !== null
        ) {
          this.state.ingredient.push(res.data.meals[0][`strIngredient${i}`]);
        }
      }
    });
  };
  displaydetails = () => {
    if (this.state.details.length > 0) {
      return (
        <MealDetails
          ingredient={this.state.ingredient}
          details={this.state.details}
          colsedetails={this.colsedetails}
        />
      );
    }
  };

  colsedetails = () => {
    this.setState({ details: [], ingredient: [] });
  };
  diplaymeals = () => {
    let meals = null;
    if (this.props.filter !== 'all') {
      const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
      Axios.get(`${baseUrl}/filter.php?c=${this.props.filter}`).then((res) => {
        this.setState({ recipe: res.data.meals });
      });
      meals = this.state.recipe.map((meal) => {
        return (
          <FoodCard
            id={meal.idMeal}
            key={meal.idMeal}
            img={meal.strMealThumb}
            meal={meal.strMeal}
            gtdetails={this.gtdetails}
          />
        );
      });
    } else {
      return <Welcome />;
    }

    return meals;
  };

  render() {
    return (
      <div>
        <FilterMeals
          handlechanges={this.handlechanges}
          category={this.state.category}
        />
        <div className="list">{this.diplaymeals()}</div>
        {this.displaydetails()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  GetRecipe: (cat) => {
    dispatch(GetRecipe(cat));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
