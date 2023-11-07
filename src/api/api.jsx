import axios from 'axios';

const API_KEY = '38292517-c0e6db01c0a3b7c636bee28eb';

const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

const resourceApi = (resource, number) => {
  const url = `${BASE_URL}&per_page=${number}&q=${resource}`;
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.error('A apărut o eroare la cererea API:', error);
      throw new Error('Eroare la cererea API.');
    });
};

export { resourceApi };
