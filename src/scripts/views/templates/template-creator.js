import CONFIG from '../../globals/config';

const createMovieItemTemplate = movie => `
      <div class="movie-item">
        <div class="movie-item__header">
          <img src="${
            movie.backdrop_path
              ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path
              : 'https://picsum.photos/id/666/800/450?grayscale'
          }" alt="${movie.title || '-'}" class="movie-item__poster" />
          <div class="movie-item__header__rating">
            <p>⭐<span class="movie-item__rating__score">${
              movie.vote_average || '-'
            }</span></p>
          </div>
        </div>
        <div class="movie-item__content">
          <h3 class="movie__title"><a href="/#/detail/${movie.id}">${
  movie.title || '-'
}</a></h3>
          <p>${movie.overview || '-'}</p>
        </div>
      </div>
    `;

const createMovieDetailTemplate = movie => `
    <h2 class="movie__title">${movie.title}</h2>
    <img src="${CONFIG.BASE_IMAGE_URL}${movie.poster_path}" alt="${
  movie.title
}" class="movie__poster" />
    <div class="movie__info">
      <h3>Information</h3>
      <h4>Tagline</h4>
      <p>${movie.tagline ? movie.tagline : '-'}</p>
      <h4>Release Date</h4>
      <p>${movie.release_date}</p>
      <h4>Duration</h4>
      <p>${movie.runtime} minutes</p>
      <h4>Rating</h4>
      <p>${movie.vote_average}</p>
    </div>
    <div class="movie__overview">  
      <h4>Overview</h4>
      <p>${movie.overview}</p>
    </div>
    `;

const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
 `;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeMovieButtonTemplate,
  createUnlikeMovieButtonTemplate,
};
