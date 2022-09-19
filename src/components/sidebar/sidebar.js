import React from 'react';
import './css/sidebar.css'

const Sidebar = ({sidebar}) => {
    const handleChange = (e) =>{
        const checked = e.target.checked;
        const sticky = document.querySelector('.sticky-notes');
        sticky.classList.add('sticky-hide')
        if(checked){
            sticky.classList.remove('sticky-hide');       
        }

    }
    
    return (
        <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
            <div className='titles'>
                <h2 className='setting'>Settings</h2>
            </div>
            <div className='widgets'>
                <h4 className='widget'>Widgets</h4>
            <span className='lists'>
                <li className='widget-slider'>Sticky Note
                    <label className="switch">
                    <input type="checkbox" id='sticky-toggler' onChange={handleChange}/>
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
                <input id='local' type='file' onChange={(e)=>{
                    console.log(e.target.files[0]);
                    const app = document.querySelector('.App');
                    // app.style.backgroundImage = `url(${e.target.files[0].name})`
                    app.style.backgroundImage = `e.target.files[0].name`
                }}/>
                <button className='revert'>Revert to default</button>
            </div>
        </div>
    );
}

export default Sidebar;
