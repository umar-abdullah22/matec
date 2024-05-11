import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
}
});

export const handleError = (error: unknown) => {
    // Check if it's an Axios error with a response
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message || 'An unexpected error occurred';
    }
    return 'Network error';
  }

export default axiosInstance;
