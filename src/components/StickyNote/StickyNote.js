import React, {useEffect, useReducer, useState } from 'react';
import './css/main.css'
import {v4 as uuid} from 'uuid';
// import {useLocalStorage} from '../../hooks/local';

const initialNotesState = {
    notes:[],
};

const StickyNote = ({openSidebar}) => {
    const notesReducer = (prevState,action)=> {
        // eslint-disable-next-line default-case
        switch(action.type){
            case 'ADD_NOTE' : {
                const newState = {
                    notes:[...prevState.notes,action.payload]
                };
                console.log('After ADD_NOTE',newState);
                window.localStorage.setItem('notes',JSON.stringify(newState.notes))
                return newState;
            }
            case 'DELETE_NOTE':{
                const newState = {
                    ...prevState,
                    notes:prevState.notes.filter(note=>note.id !==action.payload.id)
                }
                window.localStorage.setItem('notes',JSON.stringify(newState.notes));
                return newState;
            }
        }
    }
    const [notesState,dispatch] = useReducer(notesReducer,initialNotesState)
    const [noteInput,setNoteInput] = useState('')
    const addNote = (e) => {
        e.preventDefault();

        if(!noteInput){
            return;
        }

        const newNote = {
            id:uuid(),
            text:noteInput,
        }

        dispatch({type:'ADD_NOTE',payload:newNote});
        setNoteInput('');
    }

    const dropNote = e=>{
        e.target.style.left = `${e.pageX - 50}px`;
        e.target.style.top = `${e.pageY - 50}px`;

    }
    const dragOver = e => {
        e.stopPropagation();
        e.preventDefault();
    }
    useEffect(()=>{
        const notes = JSON.parse(window.localStorage.getItem('notes'));
        if(notes){
            initialNotesState.notes = notes;
        }
    },[])
    
    return (
        <div className='main'>
            <div className='test' onDragOver={dragOver}>
                <button onClick={openSidebar}>test</button>
            </div>
            <div className='sticky-notes'>
                <form onSubmit={addNote} className='note-form'>
                    <textarea value={noteInput} onChange={e=>setNoteInput(e.target.value)} placeholder='Create a sticky note...'/>
                    <button>Add</button>
                </form>
                {
                    notesState.notes.map(note=>(
                    <div key={note.id} className='note' draggable='true' onDragEnd={dropNote}>
                        <div onClick={()=>dispatch({type:'DELETE_NOTE',payload:note})} className='close'>                
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <pre className='text'>{note.text}</pre>
                    </div>))
                }
            </div>
        </div>
    );
}

export default StickyNote;
