import React, { Component } from 'react';
import './NotePageNav.css'
import NotesContext from '../contexts/NotesContext';
import { findNote, findFolder } from '../NotesHelpers'
import { NavLink } from 'react-router-dom'

class NotePageNav extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotesContext;

    render() {
        const {notes, folders} = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
    

    return (
        <div className='NotePageNav'>
            {folder && (
                <h3 className='NotePageNav__folder-name'>
                  {folder.name}
                </h3>
                
            )}
            <button type="submit">
                        <NavLink to="/add-folder" className="AddFolder">Add Folder</NavLink></button>
        </div>
    )
}
}
export default NotePageNav;