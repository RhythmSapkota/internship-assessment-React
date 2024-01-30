import axios from 'axios';

// Creating an instance of Axios with custom configurations
export const apiInstance = axios.create({
  baseURL: 'http://localhost:8000/',  // base URL for all requests
  timeout: 5000,  // timeout for requests 
  headers: {
    'Authorization': 'Bearer YourAccessToken',  
    'Content-Type': 'application/json',
  },
});