import React from 'react';
import Axios from 'axios';

export default class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
    };
  }
  componentDidMount() {
    const baseUrl =
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    Axios.get(baseUrl).then((res) => {
      this.setState({ recipe: res.data });
      console.log(this.state.recipe);
    });

    console.log(this.state.recipe);
  }

  render() {
    return <div className="list"> hello </div>;
  }
}
