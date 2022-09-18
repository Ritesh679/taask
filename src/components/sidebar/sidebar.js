import React from 'react';
import './css/sidebar.css'

const Sidebar = ({sidebar}) => {
    
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
                    <input type="checkbox"/>
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
                <button className='local'>Use Local Wallpaper</button>
                <button className='revert'>Revert to default</button>
            </div>
        </div>
    );
}

export default Sidebar;
