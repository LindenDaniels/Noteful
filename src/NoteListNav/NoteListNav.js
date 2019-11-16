import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NotesContext from '../contexts/NotesContext'
import { countNotesForFolder } from '../NotesHelpers'
import './NoteListNav.css'

class NoteListNav extends Component {
    static contextType = NotesContext;
    
    render() {
        const { folders = [], notes=[] } = this.context;
    return (
        <div className='NoteListNav'>
            <ul className='NoteListNav__list'>
                {folders.map(folder => 
                    <li key={folder.id}>
                        <NavLink
                          className='NoteListNav__folder-link'
                          to={`/folder/${folder.id}`}
                        >
                        <span className='NoteListNav__num-notes'>
                            {countNotesForFolder(notes, folder.id)}
                        </span>
                        {folder.name}
                        </NavLink>
                    </li>)}
                    
            </ul>
            <div className="NoteList__buttons">
            <button type="submit">
                        <NavLink to="/add-folder" className="AddFolder">Add Folder</NavLink></button>
            </div>
        </div>
    )
}
}

export default NoteListNav;