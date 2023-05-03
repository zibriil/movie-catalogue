import FavoriteMovieIdb from '../../data/favorite-movie-idb';
// import { createMovieItemTemplate } from '../templates/template-creator';
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // const moviesContainer = document.querySelector('#movies');
    // const movies = await FavoriteMovieIdb.getAllMovies();
    // movies.forEach(movie => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({
      view,
      favoriteMovies: FavoriteMovieIdb,
    });
  },
};

export default Like;
