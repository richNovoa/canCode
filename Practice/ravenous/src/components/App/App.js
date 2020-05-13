import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.css';
import BusinessList from '../BusinessList/BusinessList.css';

class App extends React.Component {
  render() {
  return (
    <div className="App" id="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>
  );
}
}

export default App;
