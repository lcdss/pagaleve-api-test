import http from './http';

const client = http.extend({
  prefixUrl: import.meta.env.VITE_PAGALEVE_BASE_URL,
});

export default client;
