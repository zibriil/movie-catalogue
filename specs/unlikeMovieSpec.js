/* eslint-disable no-undef */
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unlike A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>;';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteMovieIdb.putMovie({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteMovieIdb.deleteMovie(1);
  });

  it('Should display unlike widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this movie"]')
    ).toBeTruthy();
  });

  it('Should not display like widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this movie"]')
    ).toBeFalsy();
  });

  it('Should not display like widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document
      .querySelector('[aria-label="unlike this movie"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([]);
  });

  it('Should not throw error if the unliked movie is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    await FavoriteMovieIdb.deleteMovie(1);

    document
      .querySelector('[aria-label="unlike this movie"]')
      .dispatchEvent(new Event('clicl'));
    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([]);
  });
});
