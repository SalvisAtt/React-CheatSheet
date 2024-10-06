// src/App.jsx
import NavBar from './NavBar';
import Search from './Search';
import Content from './content';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content"> 
        <Search />
        <Content />
      </div>
    </div>
  );
}

export default App;
