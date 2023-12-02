import axios from 'axios';

export const AxiosClient = axios.create({
	baseURL: 'https://employee-health-backend-6h0l.onrender.com/api/v1',
	timeout: 8000,
	headers: {
		Accept: 'application/json',
	},
});

AxiosClient.interceptors.request.use(
  (config) => {
    // Get the token from storage (e.g., localStorage)
    const authToken = localStorage.getItem('authToken');

    // Set the token in the request headers
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);