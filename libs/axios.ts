import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

instance.interceptors.request.use(
  config => {
    if (config.headers) {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGRmOGU2MmU4MGZiZTM4ZWU4OTFiZTcwZmU0YjIwZiIsInN1YiI6IjY1OTRlMWM2MGU2NGFmN2I0ODhjMThmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KmUo2z90m2LVol_15yruAkRUjtfiPFo-MrCKjVlyi5U';
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Accept = 'application/json';
      if (config.data instanceof FormData) {
        delete config.headers['Content-Type'];
        console.log('FormData', config.data);
      } else {
        config.headers['Content-Type'] = 'application/json';
      }
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  },
);
