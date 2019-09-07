import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import { Route } from 'react-router-dom'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      {/*When the browser's route ends with just "/", 
        it will show the full list of films.*/}

      <Route path="/movies/:id" component={Movie} />
      {/*When the browser's route ends with the /:id of a film,
        it substitute the value of that route and render the component
        based on that. This is the same concept as template literals.*/}
      
    </div>
  );
};

export default App;