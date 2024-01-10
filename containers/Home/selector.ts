import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';

const selectors = (state: RootState) => state.home;

export const dataNowPlaying = createSelector(
  [selectors],
  state => state.nowPlaying.data,
);

export const dataPopular = createSelector(
  [selectors],
  state => state.popular.data,
);

export const dataTopRated = createSelector(
  [selectors],
  state => state.topRated.data,
);

export const dataAllMovie = createSelector(
  [selectors],
  state => state.allMovie.data,
);

export const dataMovieDetail = createSelector(
  [selectors],
  state => state.movieDetail,
);

export const dataCharacter = createSelector(
  [selectors],
  state => state.character,
);

export const dataMovieTrailer = createSelector([selectors], state =>
  state.trailer.find(
    item => item.name === 'Official Trailer' && item.site === 'YouTube',
  ),
);

export const dataCharacterDetail = createSelector(
  [selectors],
  state => state.characterDetail,
);

export const dataMovieCredits = createSelector([selectors], state => [
  ...state.movieCredits.cast,
  ...state.movieCredits.crew,
]);
