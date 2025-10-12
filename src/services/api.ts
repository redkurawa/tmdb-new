import axios from 'axios';

// console.log('[api.ts] Base URL:', import.meta.env.VITE_API_TMDB);
// console.log('[api.ts] Token:', import.meta.env.VITE_API_KEY);

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_TMDB,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// import axios from 'axios';

// const baseURL = import.meta.env.VITE_API_TMDB;
// const token = import.meta.env.VITE_API_KEY;

// console.log('[api.ts] Base URL:', baseURL);
// console.log('[api.ts] Token :', token);
// console.log('[api.ts] Token tersedia:', Boolean(token));

// export const api = axios.create({
//   baseURL,
//   headers: {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',
//   },
// });
