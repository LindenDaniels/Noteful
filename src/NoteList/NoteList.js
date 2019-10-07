import React from 'react';
import Note from '../Note/Note';
import './NoteList.css';
export default function NoteList(props) {
    return (
        <section className="NoteList">
        <ul className="NoteList__ul">
       {props.notes.map(note => 
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

NoteList.defaultProps = {
    notes: [],
}
