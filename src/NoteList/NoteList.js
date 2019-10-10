import React, {Component} from 'react';
import Note from '../Note/Note';
import './NoteList.css';
import NotesContext from '../NotesContext';
import { getNotesForFolder } from '../NotesHelpers'
import { NavLink } from 'react-router-dom'
class NoteList extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotesContext; 
    render() {
        const { folderId } = this.props.match.params
        const { notes=[]} = this.context
        const notesForFolder = getNotesForFolder(notes, folderId)
    
    return (
        <section className="NoteList">
            <button type="submit">
                        <NavLink to="/add-note">New Note</NavLink></button>
        <ul className="NoteList__ul">
       {notesForFolder.map(note => 
                <li key={note.id} className="NoteList__li">
                    <Note
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    />
                </li>     
       )}
        </ul> 
       
        </section>
    )
}
}

NoteList.defaultProps = {
    notes: [],
  }
export default NoteList;