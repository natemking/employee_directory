import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
 

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <SearchBar />
        <Table />
      </Wrapper>
      
    </>
  )
}

export default App;
