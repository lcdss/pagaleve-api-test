import ky from 'ky';

const client = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

export default client;
