import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from "./containers/MoviesList";
import MovieDetail from "./containers/MovieDetail";

function App() {

  return (
    <div className="App">
      <h1>Prince's Theatre</h1>
      <Switch>
        <Route path={'/'} exact>
          <MovieList />
        </Route>
        <Route path="/:movieID">
          <MovieDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
