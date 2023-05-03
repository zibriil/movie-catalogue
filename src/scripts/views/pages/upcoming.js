import TheMovieDBSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Upcoming in Cinema</h2>
      <div id="movies" class="movies"></div>
    </div>
    `;
  },

  async afterRender() {
    const moviesContainer = document.querySelector('#movies');
    const movies = await TheMovieDBSource.upcomingMovies();
    movies.forEach(movie => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
