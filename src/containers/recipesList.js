import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodCard from '../components/FoodCard';
import FilterMeals from '../components/FilterMeals';
import MealDetails from '../components/MealDetails';
import GetRecipe from '../actions/index';
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
    Axios.get(`${baseUrl}/categories.php`).then(res => {
      this.setState({ category: res.data.categories });
    });
  }

  handlechanges = e => {
    this.setState({ recipe: [] });
    const { GetRecipe } = this.props;
    GetRecipe(e.target.value);
  };

  // eslint-disable-next-line
  displaydetails = () => {
    const { details } = this.state;
    if (details.length > 0) {
      const { ingredient } = this.state;
    }
  };

  colsedetails = () => {
    this.setState({ details: [], ingredient: [] });
  };

  diplaymeals = () => {
    let meals = null;
    const { filter } = this.props;
    if (filter !== 'all') {
      const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
      Axios.get(`${baseUrl}/filter.php?c=${filter}`).then(res => {
        this.setState({ recipe: res.data.meals });
      });
      const { recipe } = this.state;
      meals = recipe.map(meal => (
        <FoodCard
          id={meal.idMeal}
          key={meal.idMeal}
          img={meal.strMealThumb}
          meal={meal.strMeal}
          gtdetails={this.gtdetails}
        />
      ));
    } else {
      return <Welcome />;
    }

    return meals;
  };

  render() {
    const { category } = this.state;
    return (
      <div>
        <FilterMeals
          handlechanges={this.handlechanges}
          category={category}
        />
        <div className="list">{this.diplaymeals()}</div>
        {this.displaydetails()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.recipe,
});

const mapDispatchToProps = dispatch => ({
  GetRecipe: cat => {
    dispatch(GetRecipe(cat));
  },
});

RecipesList.propTypes = {
  GetRecipe: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
