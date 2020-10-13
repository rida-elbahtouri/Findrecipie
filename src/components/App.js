import React from 'react';
import '../assets/App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import RecipesList from '../containers/recipesList';
import MealDetails from '../containers/MealDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={RecipesList} />
          <Route path="/meal/:id/:name" component={MealDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
