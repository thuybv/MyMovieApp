import {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';

import {instance} from '../libs/axios';
import {
  Character,
  CharacterDetail,
  CharacterDetailParams,
  HomeServiceType,
  MovieCredits,
  MovieDetailParams,
  MovieDetailResponse,
  NowPlayingParams,
  NowPlayingResponse,
  VideoTrailer,
} from '../types/home';

class HomeService implements HomeServiceType {
  protected _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  fetchListNowPlaying(
    params: NowPlayingParams,
  ): AxiosPromise<NowPlayingResponse> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: 'movie/now_playing',
      params,
    };
    return this._axios(request);
  }

  fetchListPopular(params: NowPlayingParams): AxiosPromise<NowPlayingResponse> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: 'movie/popular',
      params,
    };
    return this._axios(request);
  }
  fetchListTopRated(
    params: NowPlayingParams,
  ): AxiosPromise<NowPlayingResponse> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: 'movie/top_rated',
      params,
    };
    return this._axios(request);
  }

  fetchMovieDetail(
    params: MovieDetailParams,
  ): AxiosPromise<MovieDetailResponse> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: `movie/${params.movie_id}`,
      params,
    };
    return this._axios(request);
  }

  fetchCharacter(params: MovieDetailParams): AxiosPromise<Character> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: `movie/${params.movie_id}/credits`,
      params,
    };
    return this._axios(request);
  }

  fetchMovieTrailer(params: MovieDetailParams): AxiosPromise<VideoTrailer> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: `movie/${params.movie_id}/videos`,
      params,
    };
    return this._axios(request);
  }

  fetchCharacterDetail(
    params: CharacterDetailParams,
  ): AxiosPromise<CharacterDetail> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: `person/${params.person_id}`,
      params,
    };
    return this._axios(request);
  }
  fetchMovieCredits(params: CharacterDetailParams): AxiosPromise<MovieCredits> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: `person/${params.person_id}/movie_credits`,
      params,
    };
    return this._axios(request);
  }
}

export const homeService = new HomeService(instance);
