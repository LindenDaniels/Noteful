import { React, Component } from 'react';
import Note from '../Note/Note';
import './NoteList.css';
import NotesContext from '../contexts/NotesContext';
import { getNotesForFolder } from '../NotesHelpers'
import { NavLink } from 'react-router-dom'
import NotefulError from '../NotefulError'
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
            <button type="submit" className="AddNote">
                        <NavLink to="/add-note">Add Note</NavLink></button>
        <ul className="NoteList__ul">
       {notesForFolder.map(note => 
                <li key={note.id} className="NoteList__li">
                    <NotefulError key={note.id}>
                    <Note
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    />
                    </NotefulError>
                </li>     
       )}
        </ul> 
       
        </section>
    )
}
}

NoteList.defaultProps = {
    notes: [].isRequired,
  }
export default NoteList;