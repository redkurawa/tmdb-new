import { api } from './api';

export const GetM = async (url: string) => {
  // console.log('[service.ts] Memanggil endpoint:', url);
  const r = await api.get(url);
  return r;
};

export default GetM;

// import { api } from './api';

// export const GetMovie = async (endpoint: string) => {
//   console.log('[service.ts] Memanggil endpoint:', endpoint);
//   const response = await api.get(endpoint); // endpoint tanpa slash di depan
//   return response.data;
// };
