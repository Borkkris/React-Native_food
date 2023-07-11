import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
const [results, setResults] = useState([]);
const [errorMessage, setErrorMessage] = useState('')

// helper function can be used now in other components
const searchApi = async searchTerm => {
  // handling an error with try and catch block
  try {
  const response = await yelp.get('/search', {
    params: {
      limit: 50,
      term: searchTerm,
      location: 'san jose'
    }
  });
  setResults(response.data.businesses);
 } catch (err) {
    setErrorMessage('Something went wrong!')
  }
};

// using effect Hook to run the code one time, or multiple times depending on the second argument in the "[]"
// This ensures that the searchApi function is only called once and not continuously re-executed, which can be resource-intensive.
// search by default when app is running for the first time
useEffect(() => {
  searchApi('pasta');
}, []);

// returning the things I need inside of my SearchScreen Component
return [searchApi, results, errorMessage];
}