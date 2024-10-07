// src/App.jsx
import NavBar from './NavBar';
import Search from './Search';
import Content from './content';
import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  //function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  }

  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content"> 
        <Search onSearch={handleSearch} />
        <Content searchTerm={searchTerm}/>
      </div>
    </div>
  );
}

export default App;
