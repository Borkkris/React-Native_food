import { View, Text, StyleSheet } from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

// 1a: import Api logic with searchApi, results and errorMessage
import useResults from '../hooks/useResults';

const SearchScreen = () => {

const [term, setTerm] = useState('');
// 2a: put the needed functions and states into this array, coming from useResults()
const [searchApi, results, errorMessage] = useResults();

// logic to filter the price from the given propertie
const filterResultsByPrice = (price) => {
  //price === "$" || "$$" || "$$$"
  return results.filter(result => {
    return result.price === price;
  });
}

  // jsx block
  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}/>
      {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList
        results={filterResultsByPrice('$')}
        title="cost effective"
      />
      <ResultsList 
      results={filterResultsByPrice('$$')}
        title="a bit pricier"
      />
      <ResultsList 
      results={filterResultsByPrice('$$$')}
        title="big spender"
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  errorStyle: {
    color: 'red',
    fontWeight: 'bold',
  }
});

export default SearchScreen