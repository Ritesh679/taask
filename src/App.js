import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { useEffect, useState } from 'react';
import Main from './components/MainPage/main';
import Search from './components/SearchBox/search';

function App() {
  const [sidebar,setSidebar] = useState(false);
  const [bgImg,setBgImg] = useState('https://media.istockphoto.com/photos/abstract-geometric-network-polygon-globe-graphic-background-picture-id1208738316?b=1&k=20&m=1208738316&s=170667a&w=0&h=f4KWULKjL770nceDM6xi32EbfIgMtBwSp5fPxIx08wc=')
  const toggleSidebar = () =>{
    setSidebar((prevState)=>!prevState)
  }
  useEffect(()=>{
    let temp_bg = window.localStorage.getItem('image')
    setBgImg(temp_bg);
  },[])
  return (
    <div className="App" style={{backgroundImage:`url(${bgImg})`}}>      
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
