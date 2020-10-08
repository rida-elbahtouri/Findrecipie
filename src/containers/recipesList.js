import React from 'react';
import Axios from 'axios';
import FoodCard from '../components/FoodCard';
import FilterMeals from '../components/FilterMeals';
import { connect } from 'react-redux';
import { GetRecipe } from '../actions/index';
class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: [],
      category: [],
    };
  }
  componentDidMount() {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

    Axios.get(`${baseUrl}/filter.php?c=${this.props.filter}`).then((res) => {
      this.setState({ recipe: res.data.meals });
    });

    Axios.get(`${baseUrl}/categories.php`).then((res) => {
      this.setState({ category: res.data.categories });
      console.log(res.data.categories);
    });
  }

  handlechanges = (e) => {
    this.props.GetRecipe(e.target.value);
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
    Axios.get(`${baseUrl}/filter.php?c=${this.props.filter}`).then((res) => {
      this.setState({ recipe: res.data.meals });
    });
  };
  diplaymeals = () => {
    let meals = null;
    if (this.props.filter !== 'all') {
      meals = this.state.recipe.map((meal) => {
        return <FoodCard img={meal.strMealThumb} meal={meal.strMeal} />;
      });
    } else {
      return <h1>Please select a category you want</h1>;
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
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
