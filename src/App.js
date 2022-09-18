import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { useState } from 'react';
import Main from './components/MainPage/main';
import Search from './components/SearchBox/search';

function App() {
  const [sidebar,setSidebar] = useState(false);
  const toggleSidebar = () =>{
    setSidebar((prevState)=>!prevState)
  }
  return (
    <div className="App">
      <Main openSidebar = {toggleSidebar}/>
      <Sidebar sidebar={sidebar}/>
      <Search/>
      <footer>
        <span>Privacy policy</span> | <span>Terms &amp; conditions. </span>
        <span>All the rights reserved to &copy; Axeite Media LLC</span>
      </footer>
    </div>
  );
}

export default App;
