import {createAsyncThunk} from '@reduxjs/toolkit';

import {homeService} from '../../services/home';
import {
  CharacterDetailParams,
  MovieDetailParams,
  NowPlayingParams,
} from '../../types/home';

const api_key = '2ddf8e62e80fbe38ee891be70fe4b20f';

export const fetchListNowPlaying = createAsyncThunk(
  'home/nowPlaying',
  async (params: NowPlayingParams) => {
    try {
      const res = await homeService.fetchListNowPlaying({
        language: 'en-US',
        api_key,
        page: params.page,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchListPopular = createAsyncThunk(
  'home/popular',
  async (params: NowPlayingParams) => {
    try {
      const res = await homeService.fetchListPopular({
        language: 'en-US',
        api_key,
        page: params.page,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchListTopRate = createAsyncThunk(
  'home/topRated',
  async (params: NowPlayingParams) => {
    try {
      const res = await homeService.fetchListTopRated({
        language: 'en-US',
        api_key,
        page: params.page,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchListMovie = createAsyncThunk(
  'home/allMovie',
  async (params: NowPlayingParams) => {
    try {
      const resAll = Promise.all([
        homeService.fetchListPopular({
          language: 'en-US',
          api_key,
          page: params.page,
        }),
        homeService.fetchListTopRated({
          language: 'en-US',
          api_key,
          page: params.page,
        }),
      ]);
      const res = await resAll;
      return res;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchMovieDetail = createAsyncThunk(
  'home/movieDetail',
  async (params: MovieDetailParams) => {
    try {
      const res = await homeService.fetchMovieDetail({
        language: 'en-US',
        api_key,
        movie_id: params.movie_id,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchCharacter = createAsyncThunk(
  'home/character',
  async (params: MovieDetailParams) => {
    try {
      const res = await homeService.fetchCharacter({
        language: 'en-US',
        api_key,
        movie_id: params.movie_id,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchMovieTrailer = createAsyncThunk(
  'home/trailer',
  async (params: MovieDetailParams) => {
    try {
      const res = await homeService.fetchMovieTrailer({
        language: 'en-US',
        api_key,
        movie_id: params.movie_id,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchCharacterDetail = createAsyncThunk(
  'home/characterDetail',
  async (params: CharacterDetailParams) => {
    try {
      const res = await homeService.fetchCharacterDetail({
        language: 'en-US',
        api_key,
        person_id: params.person_id,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);

export const fetchMovieCredits = createAsyncThunk(
  'home/movieCredits',
  async (params: CharacterDetailParams) => {
    try {
      const res = await homeService.fetchMovieCredits({
        language: 'en-US',
        api_key,
        person_id: params.person_id,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching now playing list:', error);
      throw error;
    }
  },
);
