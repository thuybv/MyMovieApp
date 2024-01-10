import {createSlice} from '@reduxjs/toolkit';
import {
  Cast,
  CastCredits,
  CharacterDetail,
  CrewCredits,
  DataNowPlaying,
  MovieDetailResponse,
  Result,
} from '../../types/home';
import {
  fetchCharacter,
  fetchCharacterDetail,
  fetchListMovie,
  fetchListNowPlaying,
  fetchListPopular,
  fetchListTopRate,
  fetchMovieCredits,
  fetchMovieDetail,
  fetchMovieTrailer,
} from './thunk';

interface InitialState {
  nowPlaying: {
    page?: number;
    data: DataNowPlaying[];
  };
  popular: {
    page?: number;
    data: DataNowPlaying[];
  };
  topRated: {
    page?: number;
    data: DataNowPlaying[];
  };
  allMovie: {
    data: DataNowPlaying[];
  };
  movieDetail: MovieDetailResponse | undefined;
  character: Cast[];
  trailer: Result[];
  characterDetail?: CharacterDetail;
  movieCredits: {
    cast: CastCredits[];
    crew: CrewCredits[];
  };
}

const initialState: InitialState = {
  nowPlaying: {page: 1, data: []},
  popular: {page: 1, data: []},
  topRated: {page: 1, data: []},
  allMovie: {data: []},
  movieDetail: undefined,
  character: [],
  trailer: [],
  characterDetail: undefined,
  movieCredits: {
    cast: [],
    crew: [],
  },
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    clearOldData: state => {
      state.movieDetail = undefined;
      state.character = [];
      state.trailer = [];
      state.movieCredits = {
        cast: [],
        crew: [],
      };
    },
    clearCharacterDetail: state => {
      state.characterDetail = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchListNowPlaying.fulfilled, (state, action) => {
      state.nowPlaying.data = action.payload.results ?? [];
      state.nowPlaying.page = action.payload.page;
    });
    builder.addCase(fetchListNowPlaying.rejected, state => {
      state.nowPlaying.data = [];
    });
    builder.addCase(fetchListPopular.fulfilled, (state, action) => {
      state.popular.data = action.payload.results ?? [];
      state.popular.page = action.payload.page;
    });
    builder.addCase(fetchListPopular.rejected, state => {
      state.popular.data = [];
    });
    builder.addCase(fetchListTopRate.fulfilled, (state, action) => {
      state.topRated.data = action.payload.results ?? [];
      state.topRated.page = action.payload.page;
    });
    builder.addCase(fetchListTopRate.rejected, state => {
      state.topRated.data = [];
    });
    builder.addCase(fetchListMovie.fulfilled, (state, action) => {
      state.allMovie.data = [
        ...action.payload[0].data.results,
        ...action.payload[1].data.results,
      ];
    });
    builder.addCase(fetchListMovie.rejected, state => {
      state.topRated.data = [];
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
    });
    builder.addCase(fetchMovieDetail.rejected, state => {
      state.movieDetail = undefined;
    });
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.character = action.payload.cast;
    });
    builder.addCase(fetchCharacter.rejected, state => {
      state.character = [];
    });
    builder.addCase(fetchMovieTrailer.fulfilled, (state, action) => {
      state.trailer = action.payload.results;
    });
    builder.addCase(fetchMovieTrailer.rejected, state => {
      state.trailer = [];
    });
    builder.addCase(fetchCharacterDetail.fulfilled, (state, action) => {
      state.characterDetail = action.payload;
    });
    builder.addCase(fetchCharacterDetail.rejected, state => {
      state.characterDetail = undefined;
    });
    builder.addCase(fetchMovieCredits.fulfilled, (state, action) => {
      state.movieCredits.cast = action.payload.cast;
      state.movieCredits.crew = action.payload.crew;
    });
    builder.addCase(fetchMovieCredits.rejected, state => {
      state.movieCredits.cast = [];
      state.movieCredits.crew = [];
    });
  },
});

export default homeSlice.reducer;
export const {clearOldData, clearCharacterDetail} = homeSlice.actions;
