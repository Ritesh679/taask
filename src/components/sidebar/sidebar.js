import React, { useEffect, useState } from 'react';
import './css/sidebar.css'

function isChecked(){
    const checked = localStorage.getItem("checked");
    if(!checked || checked === "false"){
        return false
    }
    return true
}

function handleCheckChange(checked){
    const sticky = document.querySelector('.sticky-notes');
    if(!checked) {
        sticky.classList.add('sticky-hide');
    }else{
        sticky.classList.remove('sticky-hide');
    }
}

const Sidebar = ({sidebar}) => {  
    const [checked,setChecked] = useState(() => isChecked() );

    const handleChange = (e) =>{
        let newValue = !checked;
        setChecked(newValue)        
        localStorage.setItem('checked',newValue)
        handleCheckChange(newValue)
    }

    useEffect(() => {
        handleCheckChange(checked)
    },[checked])

    
    return (
        <div className={sidebar?"sidebar sidebar--close":"sidebar"}>
            <div className='titles'>
                <h2 className='setting'>Settings</h2>
            </div>
            <div className='widgets'>
                <h4 className='widget'>Widgets</h4>
            <span className='lists'>
                <li className='widget-slider'>Sticky Note
                    <label className="switch">
                    <input type="checkbox" checked={checked} id='sticky-toggler' onChange={handleChange}/>
                    <span className="slider round"></span>
                    </label>
                </li>
                <li className='widget-slider'>Clock
                    <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    </label>
                </li>
                <li className='widget-slider'>Player
                    <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    </label>
                </li>
            </span>
            <div className='radio'>
                <label htmlFor= 'Spotify'>Spotify</label>
                <input type='radio' name='Spotify'/>
                <label htmlFor= 'YouTube'>YouTube</label>
                <input type='radio' name='YouTube'/>
                <label htmlFor= 'None'>None</label>
                <input type='radio' name='None'/>
            </div>
            </div>
            
            <h4 className='wallpaper'>Wallpaper</h4>
            <div className='wallpapers'>
                <label htmlFor='local'>Use Local File</label>
                <input type='file' id='local' onChange={(e)=>{
                    console.log(e.target.value)
                    console.log(e.target.files)
                    var fakeUrl = URL.createObjectURL(e.target.files[0])
                    console.log(fakeUrl)
                    sessionStorage.setItem('image',fakeUrl);
                    const app = document.querySelector('.App');
                    app.style.backgroundImage = `url(${fakeUrl})`;
                }}/>




                <button className='revert' onClick={(e)=>{
                    const app = document.querySelector('.App');
                    app.style.backgroundImage = 'url(https://media.istockphoto.com/photos/abstract-geometric-network-polygon-globe-graphic-background-picture-id1208738316?b=1&k=20&m=1208738316&s=170667a&w=0&h=f4KWULKjL770nceDM6xi32EbfIgMtBwSp5fPxIx08wc=)'
                    e.preventDefault();
                    window.localStorage.clear();
                }}>Revert to default</button>
            </div>
        </div>
    );
}

export default Sidebar;
