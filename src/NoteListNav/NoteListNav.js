import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NotesContext from '../contexts/NotesContext'
import NoteListContext from '../contexts/NoteListContext'
import FolderListContext from '../contexts/FolderListContext'
import { countNotesForFolder } from '../NotesHelpers'
import './NoteListNav.css'
import NoteApiService from '../services/note-api-service';
import FolderApiService from '../services/folder-api-service';

class NoteListNav extends Component {
    static contextType = { NotesContext, NoteListContext, FolderListContext }

    componentDidMount() {
        this.context.clearError()
        FolderApiService.getFolders()
        .then(this.context.setFolderList)
        .catch(this.context.setError)
        .then(
        NoteApiService.getNotes()
          .then(this.context.setNoteList)
          .catch(this.context.setError)
         )}
    
    render() {
        const { folders = [], notes = [] } = this.context;
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