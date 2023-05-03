class FavoriteMovieSearchPresenter {
  constructor({ favoriteMovies, view }) {
    this._view = view;
    this._favoriteMovies = favoriteMovies;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching(latesQuery => {
      this._searchMovies(latesQuery);
    });
  }

  async _searchMovies(latestQuery) {
    this._latestQuery = latestQuery.trim();

    const foundMovies =
      this.latestQuery.length > 0
        ? await this._favoriteMovies.searchMovies(this.latestQuery)
        : await this._favoriteMovies.getAllMovies();

    foundMovies ? this._showFoundMovies(foundMovies) : ''; // this my solution
  }

  _showFoundMovies(movies) {
    this._view.showFavoriteMovies(movies);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteMovieSearchPresenter;
