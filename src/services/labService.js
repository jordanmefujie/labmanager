import axios from 'axios';

const API_URL = 'http://example.com/api/labs'; // Replace with your API URL

export const getLabs = () => {
  return axios.get(API_URL);
};

export const addLab = (lab) => {
  return axios.post(API_URL, lab);
};
